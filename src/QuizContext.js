import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentCard(currentCard + 1);
  };

  const restart = () => {
    setCurrentCard(0);
    setScore(0);
  };

  return (
    <QuizContext.Provider value={{ currentCard, score, nextQuestion, restart }}>
      {children}
    </QuizContext.Provider>
  );
};
