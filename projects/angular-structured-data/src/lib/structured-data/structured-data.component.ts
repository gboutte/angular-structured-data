import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Schema } from '../schema';
import { StructuredDataService } from '../structured-data.service';

@Component({
  selector: 'sd-structured-data',
  standalone: true,
  imports: [],
  templateUrl: './structured-data.component.html',
  styleUrl: './structured-data.component.scss',
})
export class StructuredDataComponent implements OnChanges, OnDestroy {
  @Input() schema!: Schema;
  private id!: string;
  private structuredDataService: StructuredDataService;
  private elRef: ElementRef;

  constructor(structuredDataService: StructuredDataService, elRef: ElementRef) {
    this.structuredDataService = structuredDataService;
    this.elRef = elRef;
    const dataId = this.elRef.nativeElement.getAttribute('data-id-sd');
    if (dataId !== null) {
      this.id = dataId;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id !== undefined) {
      this.structuredDataService.removeStructuredData(this.id);
    }
    this.id = this.structuredDataService.addStructuredData(this.schema);
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
