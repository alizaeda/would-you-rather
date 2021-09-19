import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import PageNotFound from "./PageNotFound";

const AnsQuestions = ({ question, author, authedUser }) => {
  if (question === null) {
    return <PageNotFound />;
  }

  const { optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="card m-3 shadow">
          <div className="card-header">
            <img
              src={avatarURL}
              alt="user-avatar"
              className="mr-2 avatar-icon"
            />
            {name} asks:
          </div>

          <div className="card-body d-flex justify-content-center">
            <ul>
              <li>
                {optionOne.votes.includes(authedUser) ? (
                  <span className="text-danger mr-2 badge">Your Selection</span>
                ) : null}
                <br />
                {optionOne.text}
              </li>
              <ProgressBar
                now={optionOnePercent}
                label={`${optionOnePercent}%`}
                variant="info"
              />
              <div className="card-text text-muted">
                Selected By {optionOne.votes.length} out of {totalVotes} Users
              </div>
              <li>
                {optionTwo.votes.includes(authedUser) ? (
                  <span className="text-danger mr-2 badge">Your Selection</span>
                ) : null}
                <br />
                {optionTwo.text}
              </li>
              <ProgressBar
                now={optionTwoPercent}
                label={`${optionTwoPercent}%`}
                variant="info"
              />
              <div className="card-text text-muted">
                Selected By {optionTwo.votes.length} out of {totalVotes} Users
              </div>
            </ul>
          </div>
          <div className="card-footer">
            <small className="text-muted">{formatDate(timestamp)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnsQuestions);
