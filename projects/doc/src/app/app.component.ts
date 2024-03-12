import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsiteSchema } from '../../../angular-structured-data/src/lib/schemas/website/website-schema';
import { StructuredDataService } from '../../../angular-structured-data/src/lib/structured-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [StructuredDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private structuredDataService: StructuredDataService;

  data!: any;
  constructor(structuredDataService: StructuredDataService) {
    this.structuredDataService = structuredDataService;

    const schema = new WebsiteSchema();

    schema.name = 'My Website';
    schema.url = 'https://www.example.com';
    schema.search_url = 'https://www.example.com/search?q=';

    const id = this.structuredDataService.addStructuredData(schema);

    this.structuredDataService.removeAllStructuredData();
  }
}
