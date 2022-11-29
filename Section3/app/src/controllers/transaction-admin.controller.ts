import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Transaction,
  Admin,
} from '../models';
import {TransactionRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class TransactionAdminController {
  constructor(
    @repository(TransactionRepository)
    public transactionRepository: TransactionRepository,
  ) { }

  @get('/transactions/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Transaction',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.number('id') id: typeof Transaction.prototype.id,
  ): Promise<Admin> {
    return this.transactionRepository.admin(id);
  }
}
