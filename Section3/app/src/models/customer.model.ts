import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Agency} from './agency.model';
import {Admin} from './admin.model';
import {Billing} from './billing.model';
import {Product} from './product.model';
import {Transaction} from './transaction.model';

@model()
export class Customer extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @belongsTo(() => Agency)
  agencyId: number;

  @belongsTo(() => Admin)
  adminId: number;

  @hasMany(() => Billing)
  billings: Billing[];

  @hasMany(() => Product)
  products: Product[];

  @hasMany(() => Transaction)
  transactions: Transaction[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
