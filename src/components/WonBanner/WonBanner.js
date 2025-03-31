import React from "react";

function WonBanner({ numOfGuess }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuess === 1 ? "1 guess" : `${numOfGuess} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

export default WonBanner;
