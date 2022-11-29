import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations, Admin, Agency, Customer} from '../models';
import {AdminRepository} from './admin.repository';
import {AgencyRepository} from './agency.repository';
import {CustomerRepository} from './customer.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly admin: BelongsToAccessor<Admin, typeof Product.prototype.id>;

  public readonly agency: BelongsToAccessor<Agency, typeof Product.prototype.id>;

  public readonly customer: BelongsToAccessor<Customer, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AgencyRepository') protected agencyRepositoryGetter: Getter<AgencyRepository>, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Product, dataSource);
    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter,);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    this.agency = this.createBelongsToAccessorFor('agency', agencyRepositoryGetter,);
    this.registerInclusionResolver('agency', this.agency.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
  }
}
