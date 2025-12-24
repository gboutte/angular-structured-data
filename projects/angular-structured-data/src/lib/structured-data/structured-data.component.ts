import {
  Component,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { SchemaInterface } from '@gboutte/schema.org-classes';
import { AngularStructuredDataService } from '../angular-structured-data.service';

@Component({
  selector: 'sd-structured-data',
  imports: [],
  templateUrl: './structured-data.component.html',
  styleUrl: './structured-data.component.scss',
  providers: [AngularStructuredDataService],
})
export class StructuredDataComponent implements OnChanges, OnDestroy {
  readonly schema: InputSignal<SchemaInterface> =
    input.required<SchemaInterface>();
  private id!: string;
  private structuredDataService: AngularStructuredDataService = inject(
    AngularStructuredDataService,
  );
  private elRef: ElementRef = inject(ElementRef);

  constructor() {
    const dataId = this.elRef.nativeElement.getAttribute('data-id-sd');
    if (dataId !== null) {
      this.id = dataId;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id !== undefined) {
      this.structuredDataService.removeStructuredData(this.id);
    }
    this.id = this.structuredDataService.addStructuredData(this.schema());
    this.updateId(this.id);
  }

  ngOnDestroy(): void {
    if (this.id !== undefined) {
      this.structuredDataService.removeStructuredData(this.id);
    }
  }

  updateId(id: string): void {
    this.elRef.nativeElement.setAttribute('data-id-sd', id);
  }
}
