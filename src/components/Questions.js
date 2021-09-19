import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const QuestionsList = ({ question, author }) => {
  const { optionOne, timestamp, id } = question;
  const { name, avatarURL } = author;

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <div className="card m-3 shadow">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <img
                src={avatarURL}
                alt="user-avatar"
                className="mx-2 avatar-icon"
              />
              {name} asks:
            </div>
            <h6 className="text-muted badge">{formatDate(timestamp)}</h6>
          </div>
          <div className="card-body text-center">
            <div className="card-text">{optionOne.text.slice(0, 50)}...?</div>
            <Link to={`/questions/${id}`}>
              <button className="btn btn-outline-success mt-3">
                View Question
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(QuestionsList);
