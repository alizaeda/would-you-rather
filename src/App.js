import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return <Fragment>{!authedUser ? <Login /> : <PrivateRoutes />}</Fragment>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
