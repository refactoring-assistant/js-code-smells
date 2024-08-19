export default class Question {
  #views;
  constructor({
    qid,
    title,
    text,
    tagIds,
    askedBy,
    askDate,
    ansIds,
    community,
    likes,
    dislikes,
    views,
  }) {
    this.qid = qid;
    this.title = title;
    this.text = text;
    this.tagIds = tagIds;
    this.askedBy = askedBy;
    this.askDate = askDate;
    this.ansIds = ansIds;
    this.community = community;
    this.likes = likes;
    this.dislikes = dislikes;
    this.#views = views;
  }

  get views() {
    return this.#views;
  }

  getAnswerCount() {
    return this.ansIds.length;
  }

  addAnswer(aid) {
    this.ansIds.unshift(aid);
  }

  getAnswersId() {
    return this.ansIds;
  }

  getTagsId() {
    return this.tagIds;
  }

  calculateTimeElapsed() {
    return getMetaData(this.askDate);
  }

  getQuestionViews() {
    return this.#views;
  }

  addViewCount() {
    this.#views++;
  }

  setNewestAnswerDate(date) {
    if (this.newAnsDate == null || this.newAnsDate < date) {
      this.newAnsDate = date;
    }
  }

  getQuestionById = (qid) => {
    return this.questions.find((q) => q.qid == qid);
  };

  getQuestionCountByTag = (tid) => {
    let cnt = 0;
    this.questions.forEach((q) => {
      q.tagIds.forEach((t) => {
        if (t == tid) cnt++;
      });
    });

    return cnt;
  };

  getTagCount = () => {
    return this.tags.length;
  };
}
