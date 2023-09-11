import React from "react";
function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  console.log(percentage);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "👌";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤢";
  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} Your
        Percentage is {Math.ceil(percentage)}%
      </p>
      <div className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </div>
    </>
  );
}

export default FinishScreen;
