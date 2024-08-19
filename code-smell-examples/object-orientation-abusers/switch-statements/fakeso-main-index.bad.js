switch (page) {
  case 'home': {
    selected = 'q';
    content = getQuestionPage(questionOrder.toLowerCase(), search);
    break;
  }
  case 'tag': {
    selected = 't';
    content = (
      <TagPage clickTag={clickTag} handleNewQuestion={handleNewQuestion} />
    );
    break;
  }
  case 'answer': {
    selected = '';
    content = (
      <AnswerPage
        qid={qid}
        handleNewQuestion={handleNewQuestion}
        handleNewAnswer={handleNewAnswer}
        handleComment={handleComment}
        loggedInUser={loggedInUser}
        handleLogin={handleLogin}
      />
    );
    break;
  }
  case 'newQuestion': {
    selected = '';
    content = <NewQuestion handleQuestions={handleQuestions} />;
    break;
  }
  case 'newAnswer': {
    selected = '';
    content = <NewAnswer qid={qid} handleAnswer={handleAnswer} />;
    break;
  }
  case 'register': {
    //selected: "";
    content = <RegisterPage handleLogin={handleLogin} />;
    break;
  }
  case 'login': {
    //selected: "";
    content = <LoginPage handleQuestions={handleQuestions} />;
    break;
  }
  case 'profile': {
    //selected: "";
    console.log('Testing userIdToProfile object', userIdToProfile);
    console.log('profile case for displaying content is reached');
    content = (
      <ProfilePage
        userIdToProfile={userIdToProfile}
        order={'newest'}
        search={''}
      />
    );
    break;
  }
  default:
    selected = 'q';
    content = getQuestionPage();
    break;
}
