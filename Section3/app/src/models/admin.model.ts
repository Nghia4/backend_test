import {Entity, model, property, hasMany} from '@loopback/repository';
import {Agency} from './agency.model';
import {Customer} from './customer.model';
import {Product} from './product.model';
import {Billing} from './billing.model';
import {Transaction} from './transaction.model';

@model()
export class Admin extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @hasMany(() => Agency)
  agencies: Agency[];

  @hasMany(() => Customer)
  customers: Customer[];

  @hasMany(() => Product)
  products: Product[];

  @hasMany(() => Billing)
  billings: Billing[];

  @hasMany(() => Transaction)
  transactions: Transaction[];

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
