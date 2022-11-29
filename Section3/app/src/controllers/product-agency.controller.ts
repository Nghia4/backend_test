import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Product,
  Agency,
} from '../models';
import {ProductRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class ProductAgencyController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/agency', {
    responses: {
      '200': {
        description: 'Agency belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agency)},
          },
        },
      },
    },
  })
  async getAgency(
    @param.path.number('id') id: typeof Product.prototype.id,
  ): Promise<Agency> {
    return this.productRepository.agency(id);
  }
}
