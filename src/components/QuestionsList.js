import React, { Fragment } from "react";
import Questions from "./Questions";

const QuestionsList = ({ idsList, isEmpty }) => {
  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center my-3">
          <small>Would You Rather ?</small>
        </h2>
        {idsList.length ? (
          idsList.map((id) => <Questions key={id} id={id} />)
        ) : (
          <p className="text-center">{isEmpty}</p>
        )}
      </div>
    </Fragment>
  );
};

export default QuestionsList;
