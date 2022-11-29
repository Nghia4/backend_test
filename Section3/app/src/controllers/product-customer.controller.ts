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
  Customer,
} from '../models';
import {ProductRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class ProductCustomerController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Product.prototype.id,
  ): Promise<Customer> {
    return this.productRepository.customer(id);
  }
}
