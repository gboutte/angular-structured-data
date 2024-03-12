import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Schema } from './schema';

@Injectable()
export class StructuredDataService {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  public addStructuredData(schema: Schema): string {
    //Generate an id for the schema
    const id = `schema-${Math.random().toString(36).substr(2, 9)}`;

    const script = this._renderer2.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.className = 'structured-data';
    schema.build();
    script.text = JSON.stringify(schema.getData());
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
