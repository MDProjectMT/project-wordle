import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessInput(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess];
    setGuesses(nextGuess);
  }
  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleGuessInput={handleGuessInput} />
    </>
  );
}

export default Game;
