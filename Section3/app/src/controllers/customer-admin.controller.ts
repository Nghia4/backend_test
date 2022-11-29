import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Customer,
  Admin,
} from '../models';
import {CustomerRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class CustomerAdminController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Customer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.number('id') id: typeof Customer.prototype.id,
  ): Promise<Admin> {
    return this.customerRepository.admin(id);
  }
}
