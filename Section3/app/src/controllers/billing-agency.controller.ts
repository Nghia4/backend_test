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
  Agency,
} from '../models';
import {BillingRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class BillingAgencyController {
  constructor(
    @repository(BillingRepository)
    public billingRepository: BillingRepository,
  ) { }

  @get('/billings/{id}/agency', {
    responses: {
      '200': {
        description: 'Agency belonging to Billing',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agency)},
          },
        },
      },
    },
  })
  async getAgency(
    @param.path.number('id') id: typeof Billing.prototype.id,
  ): Promise<Agency> {
    return this.billingRepository.agency(id);
  }
}
