# AngularStructuredData

## Installation
You can install the package via npm:

```bash
npm install @gboutte/angular-structured-data @gboutte/schema.org-classes
```

## Structured Data Service

You can add the structured data by using the `AngularStructuredDataService` service.

By using the `AngularStructuredDataService` you can add structured data to the page, remove structured data from the page and remove all structured data from the page.

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
  providers: [AngularStructuredDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private structuredDataService: AngularStructuredDataService = inject(AngularStructuredDataService);

  constructor() {

    const schema = new WebsiteSchema();

    schema.name = 'My Website';
    schema.url = 'https://www.example.com';

    this.structuredDataService.addStructuredData(schema);
  }
}

```

## Structured Data Component

You can add the structured data by using the `StructuredDataComponent` component.

This will allow you to add structured data to the page and remove structured data from the page automatically when the component is destroyed.

In an SSR application it's recommended to use the `StructuredDataComponent` component, because it will avoid duplicate structured data on the page.


```html

<sd-structured-data [schema]="schema"/>
```

## Examples

You can find some examples in the [examples](projects/doc/src/app/examples) folder.

## Schema Classes

The schema classes used are from the library [@gboutte/schema.org-classes](https://github.com/gboutte/schema.org-classes).

Each schema from [schema.org](https://schema.org/docs/schemas.html) has its own class that can be used to create structured data.

For example, to create a `Person` schema, you can use the `PersonSchema` class.
