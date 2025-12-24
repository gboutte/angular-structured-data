import { Component, inject } from '@angular/core';
import {
  AnswerSchema,
  FAQPageSchema,
  QuestionSchema,
  SchemaInterface,
} from '@gboutte/schema.org-classes';
import { AngularStructuredDataService } from '../../../../../angular-structured-data/src/lib/angular-structured-data.service';
import { StructuredDataComponent } from '../../../../../angular-structured-data/src/lib/structured-data/structured-data.component';

@Component({
  selector: 'sd-faq-example',
  imports: [StructuredDataComponent],
  templateUrl: './faq-example.component.html',
  styleUrl: './faq-example.component.scss',
  providers: [AngularStructuredDataService],
})
export class FaqExampleComponent {
  protected schemaJsonString!: string;
  protected schemas: SchemaInterface[] = [];

  private structuredDataService: AngularStructuredDataService = inject(
    AngularStructuredDataService,
  );

  constructor() {
    const schema: SchemaInterface = this.getSchema();

    const jsonString: string =
      this.structuredDataService.getStructuredDataJsonString(schema);

    this.schemas.push(schema);
    this.schemaJsonString = jsonString;
  }

  private getSchema(): SchemaInterface {
    const schema: FAQPageSchema = new FAQPageSchema();

    const question1: QuestionSchema = new QuestionSchema();
    question1.name = 'My question 1 ?';

    const answer1: AnswerSchema = new AnswerSchema();
    answer1.text = 'My answer 1.';

    question1.acceptedAnswer = answer1;
    schema.mainEntity = [question1];

    const question2: QuestionSchema = new QuestionSchema();
    question2.name = 'My question 2 ?';
    const answer2: AnswerSchema = new AnswerSchema();
    answer2.text = 'My answer 2.';
    question2.acceptedAnswer = answer2;
    schema.mainEntity.push(question2);

    return schema;
  }
}
