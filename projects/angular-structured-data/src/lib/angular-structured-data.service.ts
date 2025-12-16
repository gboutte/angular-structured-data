import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { SchemaInterface,StructuredDataService as SdService } from '@gboutte/schema.org-classes';

@Injectable()
export class AngularStructuredDataService {
  private _renderer2;
  private sdService:SdService = new SdService();
  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document,
  ) {
    this._renderer2 = rendererFactory.createRenderer(null, null);
  }

  public addStructuredData(schema: SchemaInterface): string {
    //Generate an id for the schema
    const id = `schema-${Math.random().toString(36).substr(2, 9)}`;

    const script = this._renderer2.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.className = 'structured-data';
    script.text = this.sdService.getStructuredDataJsonString(schema);
    this._renderer2.appendChild(this._document.body, script);
    return id;
  }

  public removeStructuredData(id: string) {
    const script = this._document.getElementById(id);
    if (script) {
      this._renderer2.removeChild(this._document.body, script);
    }
  }

  public removeAllStructuredData() {
    const scripts = this._document.querySelectorAll('.structured-data');
    for (let i = 0; i < scripts.length; i++) {
      this._renderer2.removeChild(this._document.body, scripts[i]);
    }
  }
}
