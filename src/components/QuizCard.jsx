import React, { useContext, useState } from "react";
import { QuizContext } from "../QuizContext";
import questions from "./QuestionData";

const QuizCard = () => {
  const { currentCard, nextQuestion } = useContext(QuizContext);
  const question = questions[currentCard];
  const [selected, setSelected] = useState("");
  const handleSubmit=()=>{
    if(!selected){
      alert("Select an option")
      return
    }
    const correct=selected===question.correct
    nextQuestion(correct)
  }
  return (
    <div className="card">
      <div className="main">
        <div className="heading">{question.question}</div>
        <div className="radio-btn">
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={question.name}
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="bton" onClick={handleSubmit}>
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default QuizCard;
