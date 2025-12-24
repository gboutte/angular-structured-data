import { Component, inject } from '@angular/core';
import {
  StructuredDataComponent
} from '../../../../../angular-structured-data/src/lib/structured-data/structured-data.component';
import {
  ArticleSchema, Organization, OrganizationSchema, PersonSchema,
  SchemaInterface,
  SearchActionSchema,
  WebSiteSchema,
} from '@gboutte/schema.org-classes';
import {
  AngularStructuredDataService
} from '../../../../../angular-structured-data/src/lib/angular-structured-data.service';

@Component({
  selector: 'sd-article-example',
  imports: [StructuredDataComponent],
  templateUrl: './article-example.component.html',
  styleUrl: './article-example.component.scss',
  providers: [AngularStructuredDataService],
})
export class ArticleExampleComponent {

  protected schemaJsonString!: string;
  protected schemas: SchemaInterface[] = [];

  private structuredDataService:AngularStructuredDataService = inject(AngularStructuredDataService);

  constructor() {

    const schema:SchemaInterface = this.getSchema();

    const jsonString: string = this.structuredDataService.getStructuredDataJsonString(schema);

    this.schemas.push(schema);
    this.schemaJsonString = jsonString;
  }

  private getSchema():SchemaInterface{

    const schema :ArticleSchema= new ArticleSchema();
    schema.headline = 'Article headline';
    schema.image = ['https://www.example.com/image.jpg'];

    const author:PersonSchema = new PersonSchema();
    author.name = 'John Doe';
    author.url = 'https://www.example.com/johndoe';

    schema.author = author;

    const publisher : Organization = new OrganizationSchema();

    publisher.name = 'Example Publisher';
    publisher.logo = 'https://www.example.com/logo.png';

    schema.publisher = publisher;

    schema.datePublished = new Date('2021-01-01');
    schema.dateModified = new Date('2021-01-02');

    return schema;
  }
}
