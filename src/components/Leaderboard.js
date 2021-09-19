import React, { Fragment } from "react";
import { connect } from "react-redux";
import UserDetails from "./UserDetails";

const Leaderboard = ({ userIDs }) => {
  return (
    <Fragment>
      <h2 className="text-center my-3">
        <small>LeaderBoard</small>
      </h2>
      {userIDs.map((id) => (
        <UserDetails key={id} id={id} />
      ))}
    </Fragment>
  );
};

function mapStateToProps({ users }) {
  const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
    const scoreA =
      Object.keys(users[idA].answers).length + users[idA].questions.length;
    const scoreB =
      Object.keys(users[idB].answers).length + users[idB].questions.length;

    return scoreB - scoreA;
  });

  return {
    userIDs: sortedUserIDs,
  };
}

export default connect(mapStateToProps)(Leaderboard);
