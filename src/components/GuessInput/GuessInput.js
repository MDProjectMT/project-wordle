import React from "react";

function GuessInput({ statusGame, handleGuessInput }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    setTentativeGuess(tentativeGuess);
    console.log({ tentativeGuess });
    handleGuessInput(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={statusGame !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        onChange={(ev) => {
          const nextGuess = ev.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
