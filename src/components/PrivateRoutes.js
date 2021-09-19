import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import addQuestion from "./addQuestion";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import PageNotFound from "./PageNotFound";

const PrivateRoutes = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/questions/:id" component={QuestionPage} />
            <Route path="/add" component={addQuestion} />
            <Route path="/Leaderboard" component={Leaderboard} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default PrivateRoutes;
