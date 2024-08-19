class QuestionManager {
  constructor() {
    this.questions = [];
  }

  createNewQuestion(title, text, authorId) {
    const question = {
      id: this.questions.length + 1,
      title: title,
      text: text,
      authorId: authorId,
      answers: [],
      views: 0,
    };
    this.questions.push(question);
    return question;
  }

  getQuestions() {
    return this.questions;
  }
}

class AnswerManager {
  constructor() {
    this.answers = [];
  }

  addAnswer(answer) {
    this.answers.push(answer);
  }

  getAllAnswers() {
    return this.answers;
  }
}

export { QuestionManager, AnswerManager };
