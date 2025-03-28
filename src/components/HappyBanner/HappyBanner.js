import React from "react";

function HappyBanner({ guesses }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {
            (guesses.length = 1
              ? `${guesses.length} guess`
              : `${guesses.length} guesses`)
          }
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
