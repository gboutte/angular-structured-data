import { Component, inject } from '@angular/core';
import {
  AngularStructuredDataService
} from '../../../../../angular-structured-data/src/lib/angular-structured-data.service';
import { BreadcrumbListSchema, ListItemSchema, SchemaInterface, ThingSchema } from '@gboutte/schema.org-classes';
import {
  StructuredDataComponent
} from '../../../../../angular-structured-data/src/lib/structured-data/structured-data.component';

@Component({
  selector: 'sd-breadcrumb-example',
  imports: [StructuredDataComponent],
  templateUrl: './breadcrumb-example.component.html',
  styleUrl: './breadcrumb-example.component.scss',
  providers: [AngularStructuredDataService],
})
export class BreadcrumbExampleComponent {
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

    const breadcrumbSchema: BreadcrumbListSchema = new BreadcrumbListSchema();

    const listItem1:ListItemSchema = new ListItemSchema();
    listItem1.position = 1;
    listItem1.name = 'Home';
    listItem1.item =  'https://www.example.com/';

    const listItem2:ListItemSchema = new ListItemSchema();
    listItem2.position = 2;
    listItem2.name = 'Books';
    listItem2.item ='https://www.example.com/books';

    breadcrumbSchema.itemListElement = [listItem1, listItem2];
    return breadcrumbSchema;


  }
}
