import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Admin} from './admin.model';
import {Agency} from './agency.model';
import {Customer} from './customer.model';

@model()
export class Transaction extends Entity {
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
  name: string;
  @belongsTo(() => Admin)
  adminId: number;

  @belongsTo(() => Agency)
  agencyId: number;

  @belongsTo(() => Customer)
  customerId: number;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
