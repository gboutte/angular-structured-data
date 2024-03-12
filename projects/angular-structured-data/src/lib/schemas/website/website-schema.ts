import { Schema } from '../../schema';

export class WebsiteSchema extends Schema {
  name: string = '';
  url: string = '';
  search_url: string = '';
  search_url_suffix: string = '';
  constructor() {
    super();

    this.addProperty('@type', 'WebSite');
  }

  build() {
    this.addProperty('name', this.name);
    this.addProperty('url', this.url);

    if (this.search_url.length > 0) {
      this.addProperty('potentialAction', {
        '@type': 'SearchAction',
        target: `${this.search_url}{search_term_string}${this.search_url_suffix}`,
        'query-input': 'required name=search_term_string',
      });
    }
  }
}
