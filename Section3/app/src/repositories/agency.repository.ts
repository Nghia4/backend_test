import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Agency, AgencyRelations, Customer, Admin, Billing, Product, Transaction} from '../models';
import {CustomerRepository} from './customer.repository';
import {AdminRepository} from './admin.repository';
import {BillingRepository} from './billing.repository';
import {ProductRepository} from './product.repository';
import {TransactionRepository} from './transaction.repository';

export class AgencyRepository extends DefaultCrudRepository<
  Agency,
  typeof Agency.prototype.id,
  AgencyRelations
> {

  public readonly customers: HasManyRepositoryFactory<Customer, typeof Agency.prototype.id>;

  public readonly admin: BelongsToAccessor<Admin, typeof Agency.prototype.id>;

  public readonly billings: HasManyRepositoryFactory<Billing, typeof Agency.prototype.id>;

  public readonly products: HasManyRepositoryFactory<Product, typeof Agency.prototype.id>;

  public readonly transactions: HasManyRepositoryFactory<Transaction, typeof Agency.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>, @repository.getter('BillingRepository') protected billingRepositoryGetter: Getter<BillingRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('TransactionRepository') protected transactionRepositoryGetter: Getter<TransactionRepository>,
  ) {
    super(Agency, dataSource);
    this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter,);
    this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
    this.billings = this.createHasManyRepositoryFactoryFor('billings', billingRepositoryGetter,);
    this.registerInclusionResolver('billings', this.billings.inclusionResolver);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
    this.customers = this.createHasManyRepositoryFactoryFor('customers', customerRepositoryGetter,);
    this.registerInclusionResolver('customers', this.customers.inclusionResolver);
  }
}
