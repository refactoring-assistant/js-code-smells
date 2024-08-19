const Tag = require("../models/tags");
const Question = require("../models/questions");

const addTag = async (tname) => {
  const tagName = tname.toLowerCase();
  try {
    let tag = await Tag.findOne({ name: tagName });

    if (tag) {
      return tag._id;
    } else {
      tag = await new Tag({ name: tagName }).save();
      return tag._id;
    }
  } catch (err) {
    console.error(`Error adding new tag: [${tname}]: `, err);
    throw err;
  }
};

const getQuestionsByOrder = async (order) => {
  try {
    let questions = await Question.find().populate("answers").populate("tags");

    switch (order.toLowerCase()) {
      case "unanswered":
        questions = sortQuestionsByUnanswered(questions);
        break;

      case "active":
        questions = sortQuestionsByActive(questions);
        break;

      case "newest":
        questions = sortQuestionsByNewest(questions);
        break;

      default:
        throw new Error("Invalid order");
    }
    return questions;
  } catch (err) {
    console.error(`Error getting questions by order: ${order}`, err);
    throw err;
  }
};

const sortQuestionsByActive = (questions) => {
  return questions.sort((a, b) => {
    // find the most recent answer date
    const aLatestAnswerTime =
      a.answers.length > 0
        ? Math.max(
            ...a.answers.map((ans) => new Date(ans.ans_date_time).getTime())
          )
        : 0; // or compute 0 if there are no answers
    const bLatestAnswerTime =
      b.answers.length > 0
        ? Math.max(
            ...b.answers.map((ans) => new Date(ans.ans_date_time).getTime())
          )
        : 0;

    // if one question was recently answered, rank it higher
    if (aLatestAnswerTime !== bLatestAnswerTime) {
      return bLatestAnswerTime - aLatestAnswerTime;
    }

    // if both questions are unanswered, or were recently answered at the same time,
    // sort based on the ask_date_time, so recent questions answers are ranked higher
    return (
      new Date(b.ask_date_time).getTime() - new Date(a.ask_date_time).getTime()
    );
  });
};

const sortQuestionsByNewest = (questions) => {
  return questions.sort(
    (a, b) => new Date(b.ask_date_time) - new Date(a.ask_date_time)
  );
};

const sortQuestionsByUnanswered = (questions) => {
  return questions
    .filter((q) => q.answers.length === 0)
    .sort((a, b) => new Date(b.ask_date_time) - new Date(a.ask_date_time));
};

const filterQuestionsBySearch = (qlist, search = "") => {
  if (!search) {
    return qlist;
  }
  const tags = search.match(/\[([^\]]+)\]/g) || [];
  const keywords =
    search
      .replace(/\[([^\]]+)\]/g, "")
      .trim()
      .match(/\b\w+\b/g) || [];

  const tagTerms = tags.map((tag) => tag.slice(1, -1).toLowerCase());
  const searchTerms = keywords.map((keyword) => keyword.toLowerCase());

  return qlist.filter((question) => {
    const matchesKeyword =
      searchTerms.length > 0 && searchQuestionForKeyword(question, searchTerms);
    const matchesTag =
      tagTerms.length > 0 && searchQuestionForTag(question, tagTerms);
    return matchesKeyword || matchesTag;
  });
};

const searchQuestionForKeyword = (question, keywords) => {
  return keywords.some(
    (keyword) =>
      question.title.toLowerCase().includes(keyword) ||
      question.text.toLowerCase().includes(keyword)
  );
};

const searchQuestionForTag = (question, tagList) => {
  return question.tags.some((tag) => tagList.includes(tag.name.toLowerCase()));
};

module.exports = { addTag, getQuestionsByOrder, filterQuestionsBySearch };
