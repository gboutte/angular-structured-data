import { Injectable, RendererFactory2, DOCUMENT, inject, Renderer2 } from '@angular/core';
import { SchemaInterface,StructuredDataService as SdService } from '@gboutte/schema.org-classes';

@Injectable()
export class AngularStructuredDataService {
  private _document:Document = inject<Document>(DOCUMENT);

  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private _renderer2:Renderer2;
  private sdService:SdService = new SdService();
  constructor() {
    this._renderer2 = this.rendererFactory.createRenderer(null, null);
  }

  public getStructuredDataJsonString(schema: SchemaInterface): string {
    return this.sdService.getStructuredDataJsonString(schema);
  }

  public addStructuredData(schema: SchemaInterface): string {
    //Generate an id for the schema
    const id = `schema-${Math.random().toString(36).substr(2, 9)}`;

    const script = this._renderer2.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.className = 'structured-data';
    script.text = this.getStructuredDataJsonString(schema);
    this._renderer2.appendChild(this._document.body, script);
    return id;
  }

  public removeStructuredData(id: string) {
    const script:HTMLElement|null = this._document.getElementById(id);
    if (script) {
      this._renderer2.removeChild(this._document.body, script);
    }
  }

  public removeAllStructuredData() {
    const scripts: NodeListOf<Element> = this._document.querySelectorAll('.structured-data');
    for (let i = 0; i < scripts.length; i++) {
      this._renderer2.removeChild(this._document.body, scripts[i]);
    }
  }
}
