class Shiritori {
  constructor() {
    this._words = [];
    this._gameOver = false;
    this._lastWordIndex = 0;
  }

  get words() {
    console.log(this._words);
  }

  play(word) {
    if (this._gameOver) {
      return;
    }

    word = word.toLowerCase();

    if (this._words.length === 0) {
      this._words.push(word);
      return;
    }

    if (this._words.length !== 1) {
      if (this._words.includes(word)) {
        this._gameOver = true;
        console.log("Game over!");
        return;
      }
    }

    if (this._words[this._lastWordIndex].slice(-1) === word.slice(0, 1)) {
      this._words.push(word);
      this._lastWordIndex += 1;
    } else {
      this._gameOver = true;
      console.log("Game over!");
    }
  }

  restart() {
    this._gameOver = false;
    this._words.length = 0;
    this._lastWordIndex = 0;
    console.log("Game restarted!");
  }
}

let shi = new Shiritori();

shi.play("Bear");
shi.play("Rabbit");
shi.words; // ["bear", "rabbit"]
shi.play("Wolf"); // Game over!
shi.play("Word"); // Nothing happend, game is over. Must restart.
shi.words; // ["bear", "rabbit"]
shi.restart(); // Game restarted!
shi.words; // []

shi.play("Moscow");
shi.play("Warsaw");
shi.words; // ["moscow", "warsaw"]
shi.play("Moscow"); // Game over! The word was spoken.
shi.words; // ["moscow", "warsaw"]
