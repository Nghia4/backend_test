import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Agency,
  Admin,
} from '../models';
import {AgencyRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class AgencyAdminController {
  constructor(
    @repository(AgencyRepository)
    public agencyRepository: AgencyRepository,
  ) { }

  @get('/agencies/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Agency',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.number('id') id: typeof Agency.prototype.id,
  ): Promise<Admin> {
    return this.agencyRepository.admin(id);
  }
}
