import React from "react";
import { useQuiz } from "../context/QuizContext";

function Progress() {
  const{ index, numQuestions, points, maxPossiblePoints,answer }=useQuiz();
  return (
    <header className="progress">
        {/* value for the beginning must be empty */}
      <progress max={numQuestions} value={index+Number(answer !== null)} />
      <p>
        Question <strong> {index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong> {points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
