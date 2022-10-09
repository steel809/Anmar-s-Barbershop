import {
    workingPeople
} from './arbeiter.js'
const dataOfWorkers = workingPeople[0];
const worker = document.querySelectorAll('.barbers');

let nameOfWorker = document.querySelector(".nameOfWorker");
let jobDescription = document.querySelector(".jobDescription");
let pictureOfWorker = document.querySelector(".barber-picture");

// Standard
var quote = dataOfWorkers[1][0].quote;
nameOfWorker.textContent = dataOfWorkers[1][0].firstName;
jobDescription.textContent = dataOfWorkers[1][0].jobDescription;
pictureOfWorker.src = dataOfWorkers[1][0].picture;

// set up text to print, each item in array is new line

var writingSpeed = 30; // time delay of print out
var iIndex = 0; // start printing array at this posision
var ArrLength = quote[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    while (iRow < iIndex) {
        sContents += quote[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + quote[iIndex].substring(0, iTextPos);

    if (iTextPos++ == ArrLength) {
        iTextPos = 0;

        iIndex++;
        if (iIndex < quote.length) {
            ArrLength = quote[iIndex].length;
            // next line
            setTimeout(typewriter, 10)
        }
    } else if (iIndex < quote.length) {
        ArrLength = quote[iIndex].length;
        setTimeout(typewriter, writingSpeed)
    }
}


typewriter();

function changingTeamDescription(dude) {
    const id = parseInt(dude.id);

    nameOfWorker.textContent = dataOfWorkers[id][0].firstName;
    jobDescription.textContent = dataOfWorkers[id][0].jobDescription;
    pictureOfWorker.src = dataOfWorkers[id][0].picture;

    quote = dataOfWorkers[id][0].quote;
    iIndex = 0;
    typewriter();
}

for (let i = 0; i < worker.length; ++i) {
    worker[i].addEventListener('click', () => {
        changingTeamDescription(worker[i]);
    });
}