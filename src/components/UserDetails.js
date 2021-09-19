import React from "react";
import { connect } from "react-redux";

const UserDetails = ({ user }) => {
  const { name, avatarURL, questions, answers } = user;

  return (
    <div className="containe">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card bg-light m-3 shadow">
            <div className="card-header justify-content-between d-flex align-items-center">
              <div>
                <img
                  src={avatarURL}
                  alt="user-avatar"
                  className="avatar-icon mr-2"
                />
                {name}
              </div>
              <h5 class="badge badge-success p-2">
                Score: {Object.keys(answers).length + questions.length}
              </h5>
            </div>
            <div className="card-body d-flex justify-content-center">
              <div className="card-text">
                Answered Questions: {Object.keys(answers).length}
                <br />
                Created Questions: {questions.length}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserDetails);
