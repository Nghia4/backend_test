import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Customer, CustomerRelations, Agency, Admin, Billing, Product, Transaction} from '../models';
import {AgencyRepository} from './agency.repository';
import {AdminRepository} from './admin.repository';
import {BillingRepository} from './billing.repository';
import {ProductRepository} from './product.repository';
import {TransactionRepository} from './transaction.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly agency: BelongsToAccessor<Agency, typeof Customer.prototype.id>;

  public readonly admin: BelongsToAccessor<Admin, typeof Customer.prototype.id>;

  public readonly billings: HasManyRepositoryFactory<Billing, typeof Customer.prototype.id>;

  public readonly products: HasManyRepositoryFactory<Product, typeof Customer.prototype.id>;

  public readonly transactions: HasManyRepositoryFactory<Transaction, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AgencyRepository') protected agencyRepositoryGetter: Getter<AgencyRepository>, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('BillingRepository') protected billingRepositoryGetter: Getter<BillingRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('TransactionRepository') protected transactionRepositoryGetter: Getter<TransactionRepository>,
  ) {
    super(Customer, dataSource);
    this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter,);
    this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
    this.billings = this.createHasManyRepositoryFactoryFor('billings', billingRepositoryGetter,);
    this.registerInclusionResolver('billings', this.billings.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
    this.agency = this.createBelongsToAccessorFor('agency', agencyRepositoryGetter,);
    this.registerInclusionResolver('agency', this.agency.inclusionResolver);
  }
}
