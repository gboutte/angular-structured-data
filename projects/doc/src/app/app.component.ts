import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Schema } from '../../../angular-structured-data/src/lib/schema';
import { WebsiteSchema } from '../../../angular-structured-data/src/lib/schemas/website/website-schema';
import { StructuredDataComponent } from '../../../angular-structured-data/src/lib/structured-data/structured-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuredDataComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  schema!: Schema;

  constructor() {
    const schema = new WebsiteSchema();

    schema.name = 'My Website';
    schema.url = 'https://www.example.com';
    schema.search_url = 'https://www.example.com/search?q=';

    this.schema = schema;
  }
}
