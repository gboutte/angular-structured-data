import {
  Component,
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

  constructor(structuredDataService: StructuredDataService) {
    this.structuredDataService = structuredDataService;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id !== undefined) {
      this.structuredDataService.removeStructuredData(this.id);
    }
    this.structuredDataService.addStructuredData(this.schema);
  }

  ngOnDestroy(): void {
    if (this.id !== undefined) {
      this.structuredDataService.removeStructuredData(this.id);
    }
  }
}
