import {Item} from './item.model';

export class Order {
  constructor(public id: number,
              public customerId: number,
              public customerName: string,
              public phone: string,
              public deliveryAddress: string,
              public orderPaymentMethod: string,
              public paymentReference: string,
              public orderItems: Item[],
              public status: string) {
  }
}
