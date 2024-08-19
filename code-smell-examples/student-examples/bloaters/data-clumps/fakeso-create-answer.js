export default addAnswer = (
  currentAnswers,
  aid,
  text,
  answeredBy,
  answerDate
) => {
  let newAnswer = {
    aid: aid,
    text: text,
    ansBy: answeredBy,
    ansDate: answerDate,
  };
  currentAnswers.push(newAnswer);
};
