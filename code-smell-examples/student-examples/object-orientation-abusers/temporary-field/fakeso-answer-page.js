const AnswerPage = ({
    qid,
    handleNewQuestion,
    handleNewAnswer,
    handleComments,
    loggedInUser,
    handleLogin,
  }) => {
    const [question, setQuestion] = useState({});
    const [questionReceivingAns, setQuestionReceivingAns] = useState();
    const [questionFlagged, setQuestionFlagged] = useState();
    const [loggedInUserRole, setLoggedInUserRole] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        let res = await getQuestionById(qid);
        setQuestion(res || {});
        setQuestionReceivingAns(res.receiving_answers);
      };
      fetchData().catch((e) => console.log(e));
      setLoggedInUserRole(loggedInUser.role);
    }, [qid, loggedInUser.role]);
  
    //Handling closing a question
    const handleCloseQuestion = async (qid) => {
      await closeQuestionById(qid);
      setQuestionReceivingAns(false);
    };
  
    //Handling opening a question
    const handleOpenQuestion = async (qid) => {
      await openQuestionById(qid);
      setQuestionReceivingAns(true);
    };
  
    //Handling flagging a question
    const handleFlagQuestion = async (qid) => {
      await flagQuestionById(qid);
      setQuestionFlagged(true);
    };
  
    //Handling unflagging a question
    const handleUnflagQuestion = async (qid) => {
      await unflagQuestionById(qid);
      setQuestionFlagged(false);
    };
  
    //Handling deleting a question
    const handleDeleteQuestion = async (qid) => {
      await deleteQuestionById(qid);
    };
};

export default AnswerPage;