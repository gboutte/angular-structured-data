import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Schema} from '../../../angular-structured-data/src/lib/schema';
import {WebsiteSchema} from '../../../angular-structured-data/src/lib/schemas/website/website-schema';
import {
  StructuredDataComponent
} from '../../../angular-structured-data/src/lib/structured-data/structured-data.component';
import {StructuredDataService} from "../../../angular-structured-data/src/lib/structured-data.service";
import {BreadcrumbSchema} from "../../../angular-structured-data/src/lib/schemas/breadcrumb/breadcrumb-schema";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuredDataComponent],
  providers: [StructuredDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  schema!: Schema;

  constructor() {
    const schema = new BreadcrumbSchema();

    schema.items.push({
        name: 'Home',
        url: 'https://example.com',
        position: 2,
      },
      {
        name: 'Home',
        url: 'https://example.com',
        position: 4,
      });


    this.schema = schema;
  }
}
