import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Billing,
  Customer,
} from '../models';
import {BillingRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class BillingCustomerController {
  constructor(
    @repository(BillingRepository)
    public billingRepository: BillingRepository,
  ) { }

  @get('/billings/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Billing',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Billing.prototype.id,
  ): Promise<Customer> {
    return this.billingRepository.customer(id);
  }
}
