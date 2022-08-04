const homeScoreEl = document.getElementById("homeScore-el");
const guestScoreEl = document.getElementById("guestScore-el");
const resetEl = document.getElementById("reset");

let homeScore = 0;
let guestScore = 0;

function addOneGuest() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function addOneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function addThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function resetAll() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}
