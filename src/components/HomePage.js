import React, { Fragment } from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import QuestionsList from "./QuestionsList";

const HomePage = ({ answeredQuestionIds, unansweredQuestionIds }) => {
  return (
    <Fragment>
      <div className="container mt-4">
        <Tabs>
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <QuestionsList
              idsList={unansweredQuestionIds}
              isEmpty="No More UnAnswered Question, Create Now!"
            />
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <QuestionsList
              idsList={answeredQuestionIds}
              isEmpty="No More Answered Question, Create Now!"
            />
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};

function mapStateToProps({ authedUser, questions, users }) {
  const answeredQuestionIds = Object.keys(questions)
    .filter((id) => users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestionIds = Object.keys(questions)
    .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(HomePage);
