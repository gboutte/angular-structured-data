import { Schema } from '../schema';

export class OfferSchema extends Schema {
  name: string = '';
  price: number = 0;
  priceCurrency: string = 'EUR';
  valideFrom: Date = new Date();
  url: string = '';
  availability: 'InStock' | 'SoldOut' | 'PreOrder' | 'NotSpecified' = 'InStock';
  constructor() {
    super(false);
    this.addProperty('@type', 'Offer');
  }

  build() {
    if (this.name.length > 0) {
      this.addProperty('name', this.name);
    }
    if (this.price > 0) {
      this.addProperty('price', this.price.toString());
    }
    if (this.priceCurrency.length > 0) {
      this.addProperty('priceCurrency', this.priceCurrency);
    }
    //Add date format Y-m-d
    this.addProperty('validFrom', this.valideFrom.toISOString().split('T')[0]);

    this.addProperty('url', this.url);

    switch (this.availability) {
      case 'InStock':
        this.addProperty('availability', 'https://schema.org/InStock');
        break;
      case 'SoldOut':
        this.addProperty('availability', 'https://schema.org/SoldOut');
        break;
      case 'PreOrder':
        this.addProperty('availability', 'https://schema.org/PreOrder');
        break;
    }
  }
}
