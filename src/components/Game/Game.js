import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [statusGame, setStatusGame] = React.useState("running");

  function handleGuessInput(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess];
    setGuesses(nextGuess);

    if (tentativeGuess === answer) {
      setStatusGame("win");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatusGame("lose");
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput statusGame={statusGame} handleGuessInput={handleGuessInput} />
      {statusGame === "win" && (
        <WonBanner numOfGuess={guesses.length} status="happy" />
      )}
      {statusGame === "lose" && <LostBanner answer={answer} status="sad" />}
    </>
  );
}

export default Game;
