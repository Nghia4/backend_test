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
  Billing,
} from '../models';
import {AdminRepository} from '../repositories';

@authenticate('jwt')
export class AdminBillingController {
  constructor(
    @repository(AdminRepository) protected adminRepository: AdminRepository,
  ) { }

  @get('/admins/{id}/billings', {
    responses: {
      '200': {
        description: 'Array of Admin has many Billing',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Billing)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Billing>,
  ): Promise<Billing[]> {
    return this.adminRepository.billings(id).find(filter);
  }

  @post('/admins/{id}/billings', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Billing)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Admin.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Billing, {
            title: 'NewBillingInAdmin',
            exclude: ['id'],
            optional: ['adminId']
          }),
        },
      },
    }) billing: Omit<Billing, 'id'>,
  ): Promise<Billing> {
    return this.adminRepository.billings(id).create(billing);
  }

  @patch('/admins/{id}/billings', {
    responses: {
      '200': {
        description: 'Admin.Billing PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Billing, {partial: true}),
        },
      },
    })
    billing: Partial<Billing>,
    @param.query.object('where', getWhereSchemaFor(Billing)) where?: Where<Billing>,
  ): Promise<Count> {
    return this.adminRepository.billings(id).patch(billing, where);
  }

  @del('/admins/{id}/billings', {
    responses: {
      '200': {
        description: 'Admin.Billing DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Billing)) where?: Where<Billing>,
  ): Promise<Count> {
    return this.adminRepository.billings(id).delete(where);
  }
}
