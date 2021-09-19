import React, { Fragment } from "react";
import { connect } from "react-redux";
import UnAnsQuestions from "./UnAnsQuestions";
import AnsQuestions from "./AnsQuestions";

const QuestionPage = ({ autherUserAnsweres, match }) => {
  const id = match.params.id;
  const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center my-3">
          <small>Would You Rather ?</small>
        </h2>
        {answered ? <AnsQuestions id={id} /> : <UnAnsQuestions id={id} />}
      </div>
    </Fragment>
  );
};

function mapStateToProps({ authedUser, users }) {
  const autherUserAnsweres = users[authedUser].answers;

  return {
    autherUserAnsweres,
  };
}

export default connect(mapStateToProps)(QuestionPage);
