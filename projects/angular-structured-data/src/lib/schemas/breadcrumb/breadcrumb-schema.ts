import { Schema } from '../../schema';
import {BreadcrumbItem} from "./breadcrumb-item";
export class BreadcrumbSchema extends Schema {
  items: BreadcrumbItem[] = [];

  constructor() {
    super();
    this.addProperty('@type', 'BreadcrumbList');
  }

  build() {
    const itemsList = [];
    for (let item of this.items.sort((a, b) => a.position - b.position)) {
      const itemSchema = {
        '@type': 'ListItem',
        name: item.name,
        item: item.url,
        position: item.position
      };
      itemsList.push(itemSchema);
    }
    this.addProperty('itemListElement', itemsList);
  }
}
