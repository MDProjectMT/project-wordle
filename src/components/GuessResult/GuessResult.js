import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses ? guesses[num] : undefined} />
      ))}
    </div>
  );
}

export default GuessResult;
// {guesses.map((guess, index) => (
//       <p key={index}>{guess}</p>
//   ))}
