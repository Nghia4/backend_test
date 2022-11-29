import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Agency,
  Customer,
} from '../models';
import {AgencyRepository} from '../repositories';

@authenticate('jwt')
export class AgencyCustomerController {
  constructor(
    @repository(AgencyRepository) protected agencyRepository: AgencyRepository,
  ) { }

  @get('/agencies/{id}/customers', {
    responses: {
      '200': {
        description: 'Array of Agency has many Customer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Customer>,
  ): Promise<Customer[]> {
    return this.agencyRepository.customers(id).find(filter);
  }

//   @post('/agencies/{id}/customers', {
//     responses: {
//       '200': {
//         description: 'Agency model instance',
//         content: {'application/json': {schema: getModelSchemaRef(Customer)}},
//       },
//     },
//   })
//   async create(
//     @param.path.number('id') id: typeof Agency.prototype.id,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Customer, {
//             title: 'NewCustomerInAgency',
//             exclude: ['id'],
//             optional: ['agencyId']
//           }),
//         },
//       },
//     }) customer: Omit<Customer, 'id'>,
//   ): Promise<Customer> {
//     return this.agencyRepository.customers(id).create(customer);
//   }

//   @patch('/agencies/{id}/customers', {
//     responses: {
//       '200': {
//         description: 'Agency.Customer PATCH success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async patch(
//     @param.path.number('id') id: number,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Customer, {partial: true}),
//         },
//       },
//     })
//     customer: Partial<Customer>,
//     @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
//   ): Promise<Count> {
//     return this.agencyRepository.customers(id).patch(customer, where);
//   }

//   @del('/agencies/{id}/customers', {
//     responses: {
//       '200': {
//         description: 'Agency.Customer DELETE success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async delete(
//     @param.path.number('id') id: number,
//     @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where<Customer>,
//   ): Promise<Count> {
//     return this.agencyRepository.customers(id).delete(where);
//   }
 }
