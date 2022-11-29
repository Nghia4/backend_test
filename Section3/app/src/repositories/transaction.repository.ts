import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Transaction, TransactionRelations, Admin, Agency, Customer} from '../models';
import {AdminRepository} from './admin.repository';
import {AgencyRepository} from './agency.repository';
import {CustomerRepository} from './customer.repository';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {

  public readonly admin: BelongsToAccessor<Admin, typeof Transaction.prototype.id>;

  public readonly agency: BelongsToAccessor<Agency, typeof Transaction.prototype.id>;

  public readonly customer: BelongsToAccessor<Customer, typeof Transaction.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('AgencyRepository') protected agencyRepositoryGetter: Getter<AgencyRepository>, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Transaction, dataSource);
    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter,);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    this.agency = this.createBelongsToAccessorFor('agency', agencyRepositoryGetter,);
    this.registerInclusionResolver('agency', this.agency.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
  }
}
