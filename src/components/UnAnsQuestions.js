import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { formatDate } from "../utils/helpers";
import PageNotFound from "./PageNotFound";

class UnAnsQuestions extends Component {
  state = {
    err: "",
  };

  handleOnSubmit = (id, e) => {
    const answer = this.form.answer.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (answer !== "") {
      dispatch(handleAddAnswer(id, answer));
    } else {
      this.setState({ err: "You must Select an Option" });
    }
  };

  render() {
    const { question, author } = this.props;

    if (question === null) {
      return <PageNotFound />;
    }

    const { optionOne, optionTwo, timestamp, id } = question;
    const { name, avatarURL } = author;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card m-3 shadow">
              <div className="card-header">
                <img
                  src={avatarURL}
                  alt="user-avatar"
                  className="avatar-icon mr-2"
                />
                {name} asks:
              </div>

              <div className="card-body d-flex justify-content-center">
                <form
                  onSubmit={(e) => this.handleOnSubmit(id, e)}
                  ref={(form) => (this.form = form)}
                >
                  {this.state.err && (
                    <p className="text-danger">{this.state.err}</p>
                  )}
                  <input
                    type="radio"
                    id="optionOne"
                    label={optionOne.text}
                    value="optionOne"
                    name="answer"
                    className="mb-2 mx-2"
                  />
                  <label htmlFor="optionTwo" class="form-label ml-2">
                    {optionTwo.text}
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="optionTwo"
                    value="optionTwo"
                    name="answer"
                    className="mb-2 mx-2"
                  />
                  <label htmlFor="optionOne" class="form-label ml-2">
                    {optionOne.text}
                  </label>
                  <br />

                  <button
                    type="submit"
                    className="btn btn-outline-success mt-3 d-block w-100"
                  >
                    Vote
                  </button>
                </form>
              </div>
              <div className="card-footer">
                <small className="text-muted">{formatDate(timestamp)}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(UnAnsQuestions);
