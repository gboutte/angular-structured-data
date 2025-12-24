import { Component, inject } from '@angular/core';
import { AngularStructuredDataService } from '../../../../../angular-structured-data/src/lib/angular-structured-data.service';
import {
  EventAttendanceModeEnumeration,
  EventSchema,
  EventStatusType,
  OfferSchema, OrganizationSchema,
  PersonSchema, PlaceSchema, PostalAddressSchema,
  SchemaInterface,
} from '@gboutte/schema.org-classes';
import { StructuredDataComponent } from '../../../../../angular-structured-data/src/lib/structured-data/structured-data.component';

@Component({
  selector: 'sd-event-example',
  imports: [StructuredDataComponent],
  templateUrl: './event-example.component.html',
  styleUrl: './event-example.component.scss',
  providers: [AngularStructuredDataService],
})
export class EventExampleComponent {
  protected schemaJsonString!: string;
  protected schemas: SchemaInterface[] = [];

  private structuredDataService: AngularStructuredDataService = inject(
    AngularStructuredDataService,
  );

  constructor() {
    const schema: SchemaInterface = this.getSchema();

    const jsonString: string =
      this.structuredDataService.getStructuredDataJsonString(schema);

    this.schemas.push(schema);
    this.schemaJsonString = jsonString;
  }

  private getSchema(): SchemaInterface {
    const schema: EventSchema = new EventSchema();

    schema.name = 'Event Name';
    schema.description = 'Event Description';
    schema.image = 'https://example.com/image.jpg';
    schema.eventStatus = EventStatusType.EventScheduled;

    const performer: PersonSchema = new PersonSchema();
    performer.name = 'Performer Name';
    schema.performer = performer;

    const offer = new OfferSchema();
    offer.price = 100;

    schema.offers = [offer];

    schema.eventAttendanceMode =
      EventAttendanceModeEnumeration.OfflineEventAttendanceMode;

    const place:PlaceSchema = new PlaceSchema();
    place.name = 'Offline Event';

    const postalAddress = new PostalAddressSchema();
    postalAddress.streetAddress = '123 Main St';
    postalAddress.addressLocality = 'Springfield';
    postalAddress.addressRegion = 'IL';
    postalAddress.postalCode = '62701';
    postalAddress.addressCountry = 'US';
    place.address = postalAddress;

    schema.location = place;


    schema.startDate = new Date('2025-12-01T20:00:00.000Z');
    schema.endDate = new Date('2025-12-01T22:00:00.000Z');

    const organizer:OrganizationSchema = new OrganizationSchema();
    organizer.name = 'Event Organizer';

    schema.organizer = organizer;

    return schema;
  }
}
