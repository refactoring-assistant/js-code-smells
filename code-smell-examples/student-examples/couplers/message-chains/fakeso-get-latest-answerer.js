import Question from './question.js';
import Tag from './tag.js';
import Answer from './answer.js';

export default class Application {
  constructor({ questions, tags, answers }) {
    this.questions = [];
    this.tags = [];
    this.answers = [];

    questions.forEach((q) => {
      this.questions.push(new Question(q));
    });

    tags.forEach((t) => {
      this.tags.push(new Tag(t));
    });

    answers.forEach((a) => {
      this.answers.push(new Answer(a));
    });
  }

  getMostRecentAnswerer() {
    return this.questions
      .getLatestAnsweredQuestion()
      .getLatestAnswer()
      .getAuthor()
      .getName();
  }
}
