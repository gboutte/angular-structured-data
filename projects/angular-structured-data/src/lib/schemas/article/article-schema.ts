import { Schema } from '../../schema';

export class ArticleSchema extends Schema {
  type: 'Article' | 'NewsArticle' | 'BlogPosting' = 'Article';
  headline: string = '';
  image: string[] = [];
  author_name: string = '';
  author_url: string = '';
  author_type: 'Person' | 'Organization' = 'Person';
  publisher_name: string = '';
  publisher_image: string = '';
  date_published: Date | null = null;
  date_modified: Date | null = null;

  constructor() {
    super();
  }

  build() {
    this.addProperty('@type', this.type);
    this.addProperty('headline', this.headline);
    if (this.image.length > 0) {
      if (this.image.length > 1) {
        this.addProperty('image', this.image);
      } else {
        this.addProperty('image', this.image[0]);
      }
    }
    if (this.author_name.length > 0) {
      const author: any = {
        '@type': this.author_type,
        name: this.author_name,
      };

      if (this.author_url.length > 0) {
        author['url'] = this.author_url;
      }
      this.addProperty('author', author);
    }

    if (this.publisher_name.length > 0) {
      const publisher: any = {
        '@type': 'Organization',
        name: this.publisher_name,
      };

      if (this.publisher_image.length > 0) {
        publisher['logo'] = {
          '@type': 'ImageObject',
          url: this.publisher_image,
        };
      }
      this.addProperty('publisher', publisher);
    }

    if (this.date_published) {
      //format date to Y-m-d
      const dateString = this.date_published.toISOString().split('T')[0];
      this.addProperty('datePublished', dateString);
    }
    if (this.date_modified) {
      //format date to Y-m-d
      const dateString = this.date_modified.toISOString().split('T')[0];
      this.addProperty('datePublished', dateString);
    }
  }
}
