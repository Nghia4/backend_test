import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Admin,
  Customer,
} from '../models';
import {AdminRepository} from '../repositories';

@authenticate('jwt')
export class AdminCustomerController {
  constructor(
    @repository(AdminRepository) protected adminRepository: AdminRepository,
  ) { }

  @get('/admins/{id}/customers', {
    responses: {
      '200': {
        description: 'Array of Admin has many Customer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Customer>,
  ): Promise<Customer[]> {
    return this.adminRepository.customers(id).find(filter);
  }

  @post('/admins/{id}/customers', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Customer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Admin.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer, {
            title: 'NewCustomerInAdmin',
            exclude: ['id'],
            optional: ['adminId']
          }),
        },
      },
    }) customer: Omit<Customer, 'id'>,
  ): Promise<Customer> {
    return this.adminRepository.customers(id).create(customer);
  }

  @patch('/admins/{id}/customers', {
    responses: {
      '200': {
        description: 'Admin.Customer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer, {partial: true}),
        },
      },
    })
    customer: Partial<Customer>,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
  ): Promise<Count> {
    return this.adminRepository.customers(id).patch(customer, where);
  }

  @del('/admins/{id}/customers', {
    responses: {
      '200': {
        description: 'Admin.Customer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
  ): Promise<Count> {
    return this.adminRepository.customers(id).delete(where);
  }
}
