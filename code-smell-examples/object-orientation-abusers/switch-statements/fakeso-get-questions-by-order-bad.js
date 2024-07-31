const getQuestionsByOrder = async (order) => {
  try {
    let questions = await Question.find().populate('answers').populate('tags');

    switch (order.toLowerCase()) {
      case 'unanswered':
        questions = sortQuestionsByUnanswered(questions);
        break;

      case 'active':
        questions = sortQuestionsByActive(questions);
        break;

      case 'newest':
        questions = sortQuestionsByNewest(questions);
        break;

      default:
        throw new Error('Invalid order');
    }
    return questions;
  } catch (err) {
    console.error(`Error getting questions by order: ${order}`, err);
    throw err;
  }
};
