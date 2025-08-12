import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import questions from "./QuestionData";

const Result = () => {
  const { score, restart } = useContext(QuizContext);

  return (
    <div className="card">
      <div className="main" style={{ padding: "3%" }}>
        <div className="heading">
          You answered <span id="correct">{score}</span>/{questions.length} questions correctly
        </div>
      </div>
      <div className="bton" onClick={restart}>
        <div className="submit">Reload</div>
      </div>
    </div>
  );
};

export default Result;
