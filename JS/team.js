const worker = document.querySelectorAll('.svg-wrapper-team');
import {
  workingPeople
} from './arbeiter.js'
const dataOfWorkers = workingPeople[0];

let quote = document.getElementsByClassName('quote');
let nameOfWorker = document.getElementsByClassName('nameOfWorker');
let jobDescription = document.getElementsByClassName('jobDescription');
let picture = document.getElementsByClassName('pictureOfWorker');

// !Replays the css animations
function play() {
  document.querySelector(".quote").className = "quote";
  document.querySelector('.nameOfWorker').className = "nameOfWorker";
  document.querySelector('.jobDescription').className = "jobDescription";
  document.querySelector('.pictureOfWorker').className = "pictureOfWorker";

  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".quote").classList.add("typewriterForQuote");
      document.querySelector('.nameOfWorker').classList.add("typewriter");
      document.querySelector('.jobDescription').classList.add("typewriter");
      document.querySelector('.pictureOfWorker').classList.add("pictureFadeIn");
    });
  });
}

function changingTeamDescription(dude) {
  const id = parseInt(dude.id);
  quote[0].textContent = dataOfWorkers[id][0].quote;
  nameOfWorker[0].textContent = dataOfWorkers[id][0].firstName;
  jobDescription[0].textContent = dataOfWorkers[id][0].jobDescription;
  picture[0].src = dataOfWorkers[id][0].picture;
  play();
}

for (let i = 0; i < worker.length; ++i) {
  worker[i].addEventListener('click', () => {
    changingTeamDescription(worker[i]);
  });
}