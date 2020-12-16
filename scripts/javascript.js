const results = document.getElementById('results');
const enterName = document.getElementById('enterName');
const enterEnemyName = document.getElementById('enterEnemyName');
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
const questionOne = document.getElementById('q-1');
const questionTwo = document.getElementById('q-2');
const questionThree = document.getElementById('q-3');
const questionFour = document.getElementById('q-4');
const paragraphOne = document.getElementById('p-1');
const paragraphTwo = document.getElementById('p-2');
const paragraphThree = document.getElementById('p-3');
const paragraphFour = document.getElementById('p-4');
const btnName = document.getElementById('btnName');
const nameInput = document.getElementById('nameInput');
const name2Input = document.getElementById('name2Input');
const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');

const actionResults = () => {
    checkAnswers();
};

const checkAnswers = () => {
    let count = 0;

    if (questionOne.value === '1') {
        count++;
    }
    
    if (questionTwo.value === '1') {
        count++;
    }

    if (questionThree.value === '1') {
        count++;
    }

    if (questionFour.value === '1') {
        count++;
    }

    if (count === 1) {
        message = "You lose! Looks like you bite off more than you can chew. Keep training.";
        image = "<img src='graphics/disapointment-1.jpg' alt='Disapointment' />";
    } else if (count === 2) {
        message = "Draw! You both fought with honour and courage. We need a rematch.";
        image = "<img src='graphics/scales-1.jpg' alt='Scales' />";
    } else if (count === 3) {
        message = "Winner! You won a tactical 12 round battle. Good job.";
        image = "<img src='graphics/12rounds-1.jpg' alt='12 rounds' />";
    } else if (count === 4) {
        message = "Winner! " + name2Input.value + " is no match for you, there's no coming back from this. You're the champ.";
        image = "<img src='graphics/champ-belt-1.jpg' alt='Champ belt' />";
    } else {
        message = "You lose! Fighting is not for you, here's your prize.";
        image = "<img src='graphics/wooden-spoon-1.jpg' alt='Wooden spoon' />";
    }

    results.style.display = "block";
    results.innerHTML = "<p>" + message + "</p>" + image;

};

const resetHandler = () => {

    questionOne.value = "Select";
    questionTwo.value = "Select";
    questionThree.value = "Select";
    questionFour.value = "Select";
    sectionOne.style.display = "block";
    results.style.display = "none";
    sectionTwo.style.display = "none";
    enterName.style.display = "none";
    enterEnemyName.style.display = "none";
    nameInput.value = '';
    name2Input.value = '';

};

const nameHandler = () => {

    if (nameInput.value != '' && name2Input.value != '' && isNaN(nameInput.value) && isNaN(name2Input.value)) {
        sectionTwo.style.display = "block";
        sectionOne.style.display = "none";
        paragraphHandler();
    } else {
        
        if (nameInput.value === '' || !isNaN(nameInput.value)) {
            enterEnemyName.style.display = "none";
            enterName.style.display = "block";
            enterName.innerHTML = "Please enter your name.";    
        } else if (name2Input.value === '' || !isNaN(name2Input.value)) {
            enterName.style.display = "none";
            enterEnemyName.style.display = "block";
            enterEnemyName.innerHTML = "Please enter your enemies name.";    
        }

        sectionTwo.style.display = "none";
    }

};

const paragraphHandler = () => {
    
    const list = ['Are you bigger than ', 'Are you smarter than ', 'Are you faster than ', 'Are you stronger than '];

    for (let i = 0; i < list.length; i++) {
        paragraphOne.innerHTML = list[0] + name2Input.value + "?";
        paragraphTwo.innerHTML = list[1] + name2Input.value + "?";
        paragraphThree.innerHTML = list[2] + name2Input.value + "?";
        paragraphFour.innerHTML = list[3] + name2Input.value + "?";
    }

};

btnName.addEventListener('click', nameHandler);
btn.addEventListener('click', actionResults);
reset.addEventListener('click', resetHandler);
