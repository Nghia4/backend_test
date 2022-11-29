import { authenticate } from '@loopback/authentication';
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
  Agency,
} from '../models';
import {CustomerRepository} from '../repositories';

@authenticate('jwt')
export class CustomerAgencyController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/agency', {
    responses: {
      '200': {
        description: 'Agency belonging to Customer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agency)},
          },
        },
      },
    },
  })
  async getAgency(
    @param.path.number('id') id: typeof Customer.prototype.id,
  ): Promise<Agency> {
    return this.customerRepository.agency(id);
  }
}
