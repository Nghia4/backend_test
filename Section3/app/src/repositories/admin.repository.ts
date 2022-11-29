import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Admin, AdminRelations, Agency, Customer, Product, Billing, Transaction} from '../models';
import {AgencyRepository} from './agency.repository';
import {CustomerRepository} from './customer.repository';
import {ProductRepository} from './product.repository';
import {BillingRepository} from './billing.repository';
import {TransactionRepository} from './transaction.repository';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.id,
  AdminRelations
> {

  public readonly agencies: HasManyRepositoryFactory<Agency, typeof Admin.prototype.id>;

  public readonly customers: HasManyRepositoryFactory<Customer, typeof Admin.prototype.id>;

  public readonly products: HasManyRepositoryFactory<Product, typeof Admin.prototype.id>;

  public readonly billings: HasManyRepositoryFactory<Billing, typeof Admin.prototype.id>;

  public readonly transactions: HasManyRepositoryFactory<Transaction, typeof Admin.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AgencyRepository') protected agencyRepositoryGetter: Getter<AgencyRepository>, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('BillingRepository') protected billingRepositoryGetter: Getter<BillingRepository>, @repository.getter('TransactionRepository') protected transactionRepositoryGetter: Getter<TransactionRepository>,
  ) {
    super(Admin, dataSource);
    this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter,);
    this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
    this.billings = this.createHasManyRepositoryFactoryFor('billings', billingRepositoryGetter,);
    this.registerInclusionResolver('billings', this.billings.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
    this.customers = this.createHasManyRepositoryFactoryFor('customers', customerRepositoryGetter,);
    this.registerInclusionResolver('customers', this.customers.inclusionResolver);
    this.agencies = this.createHasManyRepositoryFactoryFor('agencies', agencyRepositoryGetter,);
    this.registerInclusionResolver('agencies', this.agencies.inclusionResolver);
  }
}
