# AngularStructuredData

## Structured Data Service

You can add the structured data by using the `StructuredDataService` service.

By using the `StructuredDataService` you can add structured data to the page, remove structured data from the page and remove all structured data from the page.

If you use this approach, you have to remove the structured data from the page manually, otherwise, the structured data will stay on the page even if you navigate to another page.

Available methods:

| Method                    | Description                              | Input                                                       | Output                                                                                         |
|---------------------------|------------------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `addStructuredData`       | Add structured data to the page          | `Schema` : Any child of schema class                        | `string`: The id of the structured data, can be used to delete the structured data of the page |
| `removeStructuredData`    | Remove structured data from the page     | `string` : the id of the structured data you want to delete | `void`                                                                                         |
| `removeAllStructuredData` | Remove all structured data from the page | `void`                                                      | `void`                                                                                         |

Example:

```typescript
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

  constructor(structuredDataService: StructuredDataService) {
    this.structuredDataService = structuredDataService;

    const schema = new WebsiteSchema();

    schema.name = 'My Website';
    schema.url = 'https://www.example.com';
    schema.search_url = 'https://www.example.com/search?q=';

    this.structuredDataService.addStructuredData(schema);
  }
}

```

## Structured Data Component

You can add the structured data by using the `StructuredDataComponent` component.

This will allow you to add structured data to the page and remove structured data from the page automatically when the component is destroyed.

Example:

```typescript
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
```

```html

<sd-structured-data [schema]="schema"/>
```

## Article
Example:
```typescript
const schema = new ArticleSchema();
schema.type = 'Article';
schema.headline = 'Article headline';
schema.image = ['https://www.example.com/image.jpg'];
schema.author_name = 'John Doe';
schema.author_url = 'https://www.example.com/johndoe';
schema.author_type = 'Person';
schema.publisher_name = 'My Website';
schema.publisher_url = 'https://www.example.com';
schema.date_published = new Date('2021-01-01');
schema.date_modified = new Date('2021-01-02');
```

| Property         | Type                                    | Description                              |
|------------------|-----------------------------------------|------------------------------------------|
| `type`           | `Article`\|`NewsArticle`\|`BlogPosting` | The type of the schema                   |
| `headline`       | `string`                                | The headline of the article              |
| `image`          | `string`[]                              | The URL of the images of the article     |
| `author_name`    | `string`                                | The name of the author of the article    |
| `author_url`     | `string`                                | The URL of the author of the article     |
| `author_type`    | 'Person' \| 'Organization'              | The type of the author of the article    |
| `publisher_name` | `string`                                | The name of the publisher of the article |
| `publisher_url`  | `string`                                | The URL of the publisher of the article  |
| `date_published` | `Date`\|`null`                          | The date the article was published       |
| `date_modified`  | `Date`\|`null`                          | The date the article was modified        |


## Website SearchBox

Example:
```typescript
const schema = new WebsiteSchema();

schema.name = 'My Website';
schema.url = 'https://www.example.com';
schema.search_url = 'https://www.example.com/search?q=';
schema.search_url_suffix = '&source=structured_data';
```

| Property           | Type      | Description                              |
|--------------------|-----------|------------------------------------------|
| `name`             | `string`  | The name of the website                  |
| `url`              | `string`  | The URL of the website                   |
| `search_url`       | `string`  | The URL of the search page               |
| `search_url_suffix`| `string`  | The suffix of the search URL             |

## FAQPage

Example:
```typescript
const schema = new FaqSchema();

schema.questions = [
  {
    question: 'What is the best thing about structured data?',
    answer: 'The best thing about structured data is that it helps search engines understand the content of the page.'
  },
  {
    question: 'What is the best thing about structured data?',
    answer: 'The best thing about structured data is that it helps search engines understand the content of the page.'
  }
];
```

| Property      | Type      | Description                          |
|---------------|-----------|--------------------------------------|
| `questions`  | `Question[]`   | The list of the Question of the page |


