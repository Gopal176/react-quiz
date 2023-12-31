import React from "react";

function Progress({ index, numQuestions, points, answer, maxPossiblePoints }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Quesxtion <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
