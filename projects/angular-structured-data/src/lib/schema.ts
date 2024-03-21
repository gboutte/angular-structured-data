export abstract class Schema {
  private data: any = {};

  constructor(schemaType: string | false = 'https://schema.org') {
    if (schemaType) {
      this.data['@context'] = schemaType;
    }
  }

  protected addProperty(key: string, value: any) {
    this.data[key] = value;
  }

  protected setProperty(key: string, value: any) {
    this.data[key] = value;
  }

  protected removeProperty(key: string) {
    delete this.data[key];
  }

  getData() {
    return this.data;
  }

  abstract build(): void;

  toString() {
    this.build();
    return JSON.stringify(this.data, null, 2);
  }
}
