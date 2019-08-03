export class Item {
  constructor(public id: number,
              public productId: number,
              public sellerId: number,
              public sellerEmail: string,
              public productName: string,
              public orderedQuantity: number,
              public perUnitPrice: number,
              public OrderedId: number) {
  }
}
