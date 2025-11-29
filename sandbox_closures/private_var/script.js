function Score(team) {
  this.team = team;
  let score = 0;
  
  this.printScore = function() {
    console.log(score);
  }
  this.updateScore = function() {
    score++;
  }
}

Score.prototype.getScore = function() {
  Score.score++;
}

function Child(name) {
  this.name = name;
}

Object.setPrototypeOf(Child.prototype, Score.prototype);