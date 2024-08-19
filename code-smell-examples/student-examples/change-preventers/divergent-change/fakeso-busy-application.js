export default class Application {
  constructor({ questions, tags, answers }) {
    this.questions = questions.map((q) => new Question(q));
    this.tags = tags.map((t) => new Tag(t));
    this.answers = answers.map((a) => new Answer(a));
  }

  addQuestion(question) {
    const newQuestion = new Question(question);
    this.questions.push(newQuestion);
  }

  updateQuestion(qid, updatedQuestion) {
    const question = this.getQuestionById(qid);
    if (question) {
      question.title = updatedQuestion.title;
      question.text = updatedQuestion.text;
      question.askedBy = updatedQuestion.askedBy;
    }
  }

  getQuestionById(qid) {
    return this.questions.find((q) => q.qid === qid);
  }

  addAnswer(qid, answer) {
    const newAnswer = new Answer(answer);
    this.answers.push(newAnswer);
    const question = this.getQuestionById(qid);
    if (question) {
      question.addAnswer(newAnswer);
    }
  }

  updateAnswer(aid, updatedAnswer) {
    const answer = this.answers.find((a) => a.aid === aid);
    if (answer) {
      answer.text = updatedAnswer.text;
      answer.ansBy = updatedAnswer.ansBy;
    }
  }

  addTag(tagname) {
    let tag = this.tags.find((t) => t.name === tagname);
    if (!tag) {
      tag = new Tag({ tid: 't' + (this.tags.length + 1), name: tagname });
      this.tags.push(tag);
    }
    return tag.tid;
  }

  updateTag(tid, updatedTag) {
    const tag = this.tags.find((t) => t.tid === tid);
    if (tag) {
      tag.name = updatedTag.name;
    }
  }
}
