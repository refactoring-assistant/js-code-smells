export default addAnswerToQuestion = (
  qid,
  aid,
  answerText,
  answeredBy,
  answerDate,
  upvotes,
  downvotes,
  flagged
) => {
  let newAnswer = {
    aid: aid,
    text: answerText,
    ansBy: answeredBy,
    ansDate: answerDate,
    upvotes: upvotes,
    downvotes: downvotes,
    flagged: flagged,
  };

  const question = this.getQuestionById(qid);
  if (question) {
    question.addAnswer(aid, newAnswer);
  }
};
