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
  Admin,
} from '../models';
import {ProductRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class ProductAdminController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.number('id') id: typeof Product.prototype.id,
  ): Promise<Admin> {
    return this.productRepository.admin(id);
  }
}
