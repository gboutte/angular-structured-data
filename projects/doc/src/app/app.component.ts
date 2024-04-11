import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Schema } from '../../../angular-structured-data/src/lib/schema';
import { OfflineEventAttendanceModeSchema } from '../../../angular-structured-data/src/lib/schemas/event/attendance-mode/offline-event-attendance-mode-schema';
import { EventSchema } from '../../../angular-structured-data/src/lib/schemas/event/event-schema';
import { OfferSchema } from '../../../angular-structured-data/src/lib/schemas/offer-schema';
import { PostalAddressSchema } from '../../../angular-structured-data/src/lib/schemas/postal-address-schema';
import { StructuredDataService } from '../../../angular-structured-data/src/lib/structured-data.service';
import { StructuredDataComponent } from '../../../angular-structured-data/src/lib/structured-data/structured-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuredDataComponent, NgForOf],
  providers: [StructuredDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  schema!: Schema;

  schemas: Schema[] = [];

  constructor() {
    const schema = new EventSchema();

    schema.name = 'Event Name';
    schema.perfomer_name = 'Performer Name';
    schema.description = 'Event Description';
    schema.image_url = 'https://example.com/image.jpg';
    schema.eventStatus = 'Scheduled';

    const offer = new OfferSchema();
    offer.price = 100;

    schema.offers = [offer];

    const attendanceMode = new OfflineEventAttendanceModeSchema();
    attendanceMode.name = 'Offline Event';
    attendanceMode.postalAddress = new PostalAddressSchema();
    attendanceMode.postalAddress.streetAddress = '123 Main St';
    attendanceMode.postalAddress.addressLocality = 'Springfield';
    attendanceMode.postalAddress.addressRegion = 'IL';
    attendanceMode.postalAddress.postalCode = '62701';
    attendanceMode.postalAddress.addressCountry = 'US';

    schema.attendanceMode = attendanceMode;

    this.schemas.push(schema);

    this.schema = schema;
    this.schema.build();
  }
}
