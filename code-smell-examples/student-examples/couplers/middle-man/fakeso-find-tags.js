export default ContentFunctions = ({ questions, tags, answers }) => {
  const getQuestionById = (qid) => {
    return questions.find((q) => q.qid == qid);
  };

  const getTagById = (qid) => {
    return tags.find((t) => t.tid == tid);
  };

  const getAnswerById = (aid) => {
    return answers.find((a) => a.aid == a.aid);
  };

  const getQuestionsCount = () => {
    return questions.length;
  };

  const getTagCount = () => {
    return tags.length;
  };

  const getAnswerCount = () => {
    return answers.length;
  };

  const getQuestions = () => {
    return questions;
  };

  const getTags = () => {
    return tags;
  };

  const getAnswers = () => {
    return answers;
  };
};
