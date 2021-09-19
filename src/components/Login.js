import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    err: "",
  };
  // const [err, setErr] = useState();

  handleOnSubmit = (e) => {
    const user = this.user.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (user !== "") {
      dispatch(setAuthedUser(user));
    } else {
      this.setState({ err: "You must pick a username" });
    }
  };

  render() {
    const { user } = this.props;

    return (
      <div className="container mt-5">
        <div className="row m-auto w-100 justify-content-center text-center">
          <div className="col-6">
            <div className="card bg-light shadow">
              <div className="card-body">
                <h4 className="card-title mb-4 text-decoration-underline ">
                  Login
                </h4>

                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group my-3">
                    {this.state.err && (
                      <p className="text-danger">{this.state.err}</p>
                    )}

                    <select
                      className="form-control"
                      ref={(id) => (this.user = id)}
                    >
                      <option value="">Pick Username</option>
                      {user.map((user) => (
                        <option value={user.value} key={user.value}>
                          {user.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn d-block w-100 btn-success"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    user: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  };
}

export default connect(mapStateToProps)(Login);
