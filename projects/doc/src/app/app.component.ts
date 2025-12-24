import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StructuredDataComponent } from '../../../angular-structured-data/src/lib/structured-data/structured-data.component';
import { SchemaInterface,StructuredDataService ,EventSchema,PersonSchema,EventStatusType,OfferSchema,ItemAvailability,PlaceSchema,PostalAddressSchema,EventAttendanceModeEnumeration} from '@gboutte/schema.org-classes'

@Component({
    selector: 'app-root',
    imports: [StructuredDataComponent, NgForOf],
    providers: [StructuredDataService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  schema!: SchemaInterface;

  schemaJsonString!: string;


  schemas: SchemaInterface[] = [];
  constructor() {
    const schema: EventSchema = new EventSchema();

    schema.name = 'Event Name';
    schema.performer = new PersonSchema();
    schema.performer.name = 'Performer Name';
    schema.description = 'Event Description';
    schema.image = 'https://example.com/image.jpg';
    schema.eventStatus = EventStatusType.EventScheduled;
    schema.startDate = new Date('2025-12-01T20:00:00.000Z');

    const offer: OfferSchema = new OfferSchema();
    offer.price = 100;
    offer.priceCurrency = 'EUR';
    offer.validFrom = new Date('2025-12-01T11:50:00.000Z');
    offer.url = 'http://google.fr';
    offer.availability = ItemAvailability.InStock;

    schema.offers = [offer];

    const location: PlaceSchema = new PlaceSchema();
    location.name = 'Offline Event';
    location.address = new PostalAddressSchema();
    location.address.streetAddress = '123 Main St';
    location.address.addressLocality = 'Springfield';
    location.address.addressRegion = 'IL';
    location.address.postalCode = '62701';
    location.address.addressCountry = 'US';

    schema.location = location;

    schema.eventAttendanceMode =
      EventAttendanceModeEnumeration.OfflineEventAttendanceMode;

    const service = new StructuredDataService()
    const jsonString: string = service.getStructuredDataJsonString(schema);

    this.schemas.push(schema);
    this.schemaJsonString = jsonString;
  }
}
