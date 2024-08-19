class Content {
  constructor(id, text, authorId, dateCreated) {
    this.id = id;
    this.text = text;
    this.authorId = authorId;
    this.dateCreated = dateCreated;
  }

  editContent(newText) {
    this.text = newText;
  }

  getAuthorId() {
    return this.authorId;
  }

  getDateCreated() {
    return this.dateCreated;
  }
}

class Question extends Content {
  constructor(id, text, authorId, dateCreated, answers = []) {
    super(id, text, authorId, dateCreated);
    this.answers = answers;
  }

  addAnswer(answer) {
    this.answers.push(answer);
  }
}

class Tag extends Content {
  constructor(id, name) {
    super(id, null, null, null);
    this.name = name;
  }

  editContent() {
    console.log("Tags don't have content to edit");
  }
}

export { Content, Question, Tag };
