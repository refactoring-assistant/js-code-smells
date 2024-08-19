const Tag = require('../mongoose-models/tags');
const Question = require('../mongoose-models/questions');

const sortQuestionsByActive = (questions) => {
  return questions.sort((a, b) => {
    const aLatestAnswerTime =
      a.answers.length > 0
        ? Math.max(
            ...a.answers.map((ans) => new Date(ans.ans_date_time).getTime())
          )
        : 0;
    const bLatestAnswerTime =
      b.answers.length > 0
        ? Math.max(
            ...b.answers.map((ans) => new Date(ans.ans_date_time).getTime())
          )
        : 0;

    if (aLatestAnswerTime !== bLatestAnswerTime) {
      return bLatestAnswerTime - aLatestAnswerTime;
    }

    return (
      new Date(b.ask_date_time).getTime() - new Date(a.ask_date_time).getTime()
    );
  });
};

module.exports = { sortQuestionsByActive };
