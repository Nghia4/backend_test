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
  Transaction,
} from '../models';
import {AdminRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class AdminTransactionController {
  constructor(
    @repository(AdminRepository) protected adminRepository: AdminRepository,
  ) { }

  @get('/admins/{id}/transactions', {
    responses: {
      '200': {
        description: 'Array of Admin has many Transaction',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Transaction)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Transaction>,
  ): Promise<Transaction[]> {
    return this.adminRepository.transactions(id).find(filter);
  }

  @post('/admins/{id}/transactions', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transaction)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Admin.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transaction, {
            title: 'NewTransactionInAdmin',
            exclude: ['id'],
            optional: ['adminId']
          }),
        },
      },
    }) transaction: Omit<Transaction, 'id'>,
  ): Promise<Transaction> {
    return this.adminRepository.transactions(id).create(transaction);
  }

  @patch('/admins/{id}/transactions', {
    responses: {
      '200': {
        description: 'Admin.Transaction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transaction, {partial: true}),
        },
      },
    })
    transaction: Partial<Transaction>,
    @param.query.object('where', getWhereSchemaFor(Transaction)) where?: Where<Transaction>,
  ): Promise<Count> {
    return this.adminRepository.transactions(id).patch(transaction, where);
  }

  @del('/admins/{id}/transactions', {
    responses: {
      '200': {
        description: 'Admin.Transaction DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Transaction)) where?: Where<Transaction>,
  ): Promise<Count> {
    return this.adminRepository.transactions(id).delete(where);
  }
}
