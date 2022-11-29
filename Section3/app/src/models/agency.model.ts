import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';
import {Admin} from './admin.model';
import {Billing} from './billing.model';
import {Product} from './product.model';
import {Transaction} from './transaction.model';

@model()
export class Agency extends Entity {
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

  @hasMany(() => Customer)
  customers: Customer[];

  @belongsTo(() => Admin)
  adminId: number;

  @hasMany(() => Billing)
  billings: Billing[];

  @hasMany(() => Product)
  products: Product[];

  @hasMany(() => Transaction)
  transactions: Transaction[];

  constructor(data?: Partial<Agency>) {
    super(data);
  }
}

export interface AgencyRelations {
  // describe navigational properties here
}

export type AgencyWithRelations = Agency & AgencyRelations;
