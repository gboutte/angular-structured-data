import { PostalAddressSchema } from '../../postal-address-schema';
import { AttendanceModeSchema } from './attendance-mode-schema';

export class MixedEventAttendanceModeSchema extends AttendanceModeSchema {
  url: string = '';
  name: string = '';
  postalAddress: PostalAddressSchema = new PostalAddressSchema();

  constructor() {
    super();
  }

  build() {
    this.postalAddress.build();
    this.addProperty('location', [
      {
        '@type': 'Place',
        name: this.name,
        address: this.postalAddress.getData(),
      },
      {
        '@type': 'VirtualLocation',
        url: this.url,
      },
    ]);
  }

  getEventAttendanceModeUrl(): string {
    return 'https://schema.org/MixedEventAttendanceMode';
  }
}
