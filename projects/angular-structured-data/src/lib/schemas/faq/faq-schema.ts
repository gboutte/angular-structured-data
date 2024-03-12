import { Schema } from '../../schema';
import { Question } from './question';

export class FaqSchema extends Schema {
  questions: Question[] = [];

  constructor() {
    super();

    this.addProperty('@type', 'FAQPage');
  }

  build() {
    const questionsList = [];
    for (let question of this.questions) {
      const questionSchema = {
        '@type': 'Question',
        name: question.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.answer,
        },
      };
      questionsList.push(questionSchema);
    }
    this.addProperty('mainEntity', questionsList);
  }
}
