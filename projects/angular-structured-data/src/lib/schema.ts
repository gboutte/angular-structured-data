export abstract class Schema {
  private data: any = {};

  constructor() {
    this.data['@context'] = 'https://schema.org';
  }

  addProperty(key: string, value: any) {
    this.data[key] = value;
  }

  setProperty(key: string, value: any) {
    this.data[key] = value;
  }

  removeProperty(key: string) {
    delete this.data[key];
  }

  getData() {
    return this.data;
  }

  abstract build(): void;
}
