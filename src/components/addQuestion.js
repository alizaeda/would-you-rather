import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class addQuestion extends Component {
  state = {
    redirectHome: false,
    optionOne: "",
    optionTwo: "",
  };

  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    e.preventDefault();

    this.setState(
      {
        redirectHome: true,
        optionOne: "",
        optionTwo: "",
      },
      () => dispatch(handleAddQuestion(optionOne, optionTwo))
    );
  };

  render() {
    const { redirectHome, optionOne, optionTwo } = this.state;

    if (redirectHome) return <Redirect to="/" />;

    return (
      <Fragment>
        <h2 className="text-center my-3">
          <small>Would You Rather ?</small>
        </h2>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card bg-light m-3 text-center shadow">
              <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label className="form-label">Option One</label>
                    <input
                      className="form-control"
                      type="text"
                      name="optionOne"
                      value={optionOne}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Option Two</label>
                    <input
                      className="form-control"
                      type="text"
                      name="optionTwo"
                      value={optionTwo}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-success mt-3"
                    disabled={optionOne === "" || optionTwo === ""}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(addQuestion);
