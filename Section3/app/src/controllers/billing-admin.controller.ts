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
  Admin,
} from '../models';
import {BillingRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class BillingAdminController {
  constructor(
    @repository(BillingRepository)
    public billingRepository: BillingRepository,
  ) { }

  @get('/billings/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Billing',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.number('id') id: typeof Billing.prototype.id,
  ): Promise<Admin> {
    return this.billingRepository.admin(id);
  }
}
