import { REACT_APP_API_URL, api } from './config';

const QUESTION_API_URL = `${REACT_APP_API_URL}/question`;

const getQuestionsByFilter = async (order = 'newest', search = '') => {
  const res = await api.get(
    `${QUESTION_API_URL}/getQuestion?order=${order}&search=${search}`
  );

  return res.data;
};

const closeQuestionById = async (qid) => {
  const res = await api.put(`${QUESTION_API_URL}/closeQuestionById/${qid}`);
  return res.data;
};

const openQuestionById = async (qid) => {
  const res = await api.put(`${QUESTION_API_URL}/openQuestionById/${qid}`);
  return res.data;
};

const flagQuestionById = async (qid) => {
  const res = await api.put(`${QUESTION_API_URL}/flagQuestionById/${qid}`);
  return res.data;
};

const unflagQuestionById = async (qid) => {
  const res = await api.put(`${QUESTION_API_URL}/flagQuestionById/${qid}`);
  return res.data;
};

const getQuestionById = async (qid) => {
  const res = await api.get(`${QUESTION_API_URL}/getQuestionById/${qid}`);

  return res.data;
};

const addQuestion = async (q) => {
  const res = await api.post(`${QUESTION_API_URL}/addQuestion`, q);

  return res.data;
};

const deleteQuestionById = async (qid) => {
  const res = await api.delete(`${QUESTION_API_URL}/deleteQuestionById/${qid}`);

  return res.data;
};

export {
  getQuestionsByFilter,
  getQuestionById,
  addQuestion,
  deleteQuestionById,
};
