import Question from './question.js';
import Tag from './tag.js';
import Answer from './answer.js';

let instance;

export default class Application {
  constructor({ questions, tags, answers }) {
    if (!instance) {
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
      instance = this;
    }
    return instance;
  }

  #generateNewId = (type) => {
    const maxId = this.getMaxId(type);

    return `${type}${maxId + 1}`;
  };

  getMaxId = (type) => {
    const allIds = {
      answer: [...this.answers],
      question: [...this.questions],
      tag: [...this.tags],
    };

    allIds[type].reduce((max, item) => {
      const idValue = item[type + 'id'];
      const currentIdNumber = parseInt(idValue.substring(1));
      return Math.max(max, currentIdNumber);
    }, 0);
  };

  addAnswer = (answer) => {
    answer.aid = this.#generateNewId('answer');
    const newAnswer = new Answer(answer);
    this.answers.unshift(newAnswer);
  };

  addQuestion = (question) => {
    question.qid = this.#generateNewId('question');
    const newQuestion = new Question(question);
    this.questions.unshift(newQuestion);
  };

  addTag = (tagname) => {
    const newTag = new Tag({ tid: this.#generateNewId('tag'), name: tagname });
    this.tags.unshift(newTag);
    return newTag.tid;
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

  getQuestionsByFilter = (order = 'newest', search = '') => {
    let searchResults = [...this.questions];
    if (search.trim() !== '') {
      searchResults = this.searchQuestionsFor([...this.questions], search);
    }
    let orderedResults = this.orderQuestionsBy(searchResults, order);
    searchResults = orderedResults;
    return searchResults;
  };

  searchQuestionsFor = (allQuestions, search = '') => {
    const searchTerms = search.toLowerCase().match(/\[.+?\]|[\w']+/g) || [];

    const tagTerms = searchTerms
      .filter((term) => term.startsWith('[') && term.endsWith(']'))
      .map((term) => term.slice(1, -1).toLowerCase());

    const textTerms = searchTerms
      .filter((term) => !term.startsWith('[') && !term.endsWith(']'))
      .map((term) => term.toLowerCase());

    let searchResults = allQuestions.filter((question) => {
      const questionText = question.text.toLowerCase();
      const questionTitle = question.title.toLowerCase();

      const questionTags = question.tagIds.map((tagId) => {
        const tag = this.tags.find((t) => t.tid === tagId);
        return tag ? tag.name.toLowerCase() : '';
      });

      const hasTagMatch = tagTerms.some((tagTerm) =>
        questionTags.some((questionTag) => questionTag.includes(tagTerm))
      );

      const hasTextMatch = textTerms.some(
        (term) => questionText.includes(term) || questionTitle.includes(term)
      );

      return hasTagMatch || hasTextMatch;
    });

    return searchResults;
  };

  orderQuestionsBy = (allQuestions, order = 'newest') => {
    if (!Array.isArray(allQuestions)) {
      allQuestions = [...this.questions];
    }

    let results;
    switch (order) {
      case 'active':
        results = allQuestions.sort((a, b) => {
          const allAnswers = [...this.answers];
          const recentAnsA = allAnswers.find(
            (answerA) => answerA.aid === a.getMostRecentAnswerId()
          );
          const recentAnsB = allAnswers.find(
            (answerB) => answerB.aid === b.getMostRecentAnswerId()
          );

          const latestA = Math.max(a.askDate, recentAnsA.ansDate);
          const latestB = Math.max(b.askDate, recentAnsB.ansDate);

          return latestB - latestA;
        });
        break;
      case 'unanswered':
        results = allQuestions.filter((q) => q.getAnswerCount() === 0);
        break;
      default:
        results = allQuestions.sort((a, b) => b.askDate - a.askDate);
        break;
    }
    return results;
  };

  getQuestionById = (qid) => {
    return this.questions.find((q) => q.qid === qid);
  };

  getQuestionAnswer = (question) => {
    let ansIds = question.ansIds;
    let allAnswers = [...this.answers];
    let questionAnswers = allAnswers.filter((answer) =>
      ansIds.includes(answer.aid)
    );

    return questionAnswers;
  };

  getQuestionAnswerById = (qid) => {
    let question = this.questions.find((q) => q.qid === qid);
    return question.ansIds;
  };

  getAnswerById = (answer) => {
    return this.questions.find((a) => a.aid === answer);
  };

  getTagCount = () => {
    return this.tags.length;
  };

  getTags = () => {
    return this.tags;
  };

  getTagById = (id) => {
    for (let t of this.tags) {
      if (t.tid == id) {
        return t;
      }
    }

    return null;
  };
}
