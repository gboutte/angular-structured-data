import { Schema } from '../schema';

export class PostalAddressSchema extends Schema {
  streetAddress: string = '';
  addressLocality: string = '';
  addressRegion: string = '';
  postalCode: string = '';
  addressCountry: string = '';

  constructor() {
    super(false);
    this.addProperty('@type', 'PostalAddress');
  }

  build() {
    this.addProperty('streetAddress', this.streetAddress);
    this.addProperty('addressLocality', this.addressLocality);
    this.addProperty('addressRegion', this.addressRegion);
    this.addProperty('postalCode', this.postalCode);
    this.addProperty('addressCountry', this.addressCountry);
  }
}
