const words = ["apple", "banana", "grape", "peach", "kiwi", "orange"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;
let gameOver = false;

document.getElementById("hint").textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;

console.log("Secret Word (for testing):", secretWord);

function checkGuess() {
  if (gameOver) return;

  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  let guess = input.value.trim().toLowerCase();

  if (guess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    document.body.style.backgroundColor = "#c8e6c9"; 
    gameOver = true;
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      message.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    } else {
      message.textContent = `Game over! The secret word was '${secretWord}'.`;
      document.body.style.backgroundColor = "#ffcdd2"; 
      gameOver = true;
    }
  }

  input.value = "";
  input.focus();
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attemptsLeft = 5;
  gameOver = false;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.body.style.backgroundColor = "white";
  document.getElementById("hint").textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
  console.clear();
  console.log("New Secret Word (for testing):", secretWord);
}

document.getElementById("guessInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});