import React, { useContext } from "react";
import { QuizProvider, QuizContext } from "./QuizContext";
import QuizCard from "./components/QuizCard";
import Result from "./components/Result";
import questions from "./components/QuestionData";
import "./App.css";

function QuizFlow() {
  const { currentCard } = useContext(QuizContext);

  return (
    <section id="hero">
      {currentCard < questions.length ? <QuizCard /> : <Result />}
    </section>
  );
}

function App() {
  return (
    <QuizProvider>
      <QuizFlow />
    </QuizProvider>
  );
}

export default App;
