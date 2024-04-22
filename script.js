let answersChecked = false; 

function markSelectedAnswer(questionId, selectedAnswerId) {
    if (answersChecked) return; 

    // Remove 'selected' class from all answer options for the given question
    let answerOptions = document.querySelectorAll(`#${questionId} .answer-option`);
    answerOptions.forEach(option => option.classList.remove('selected'));
    // Add 'selected' class to the chosen answer option
    let selectedOption = document.querySelector(`#${questionId} #${selectedAnswerId}`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

function allQuestionsAnswered() {
    let answeredQuestions = document.querySelectorAll('.answer-option.selected').length;
    return answeredQuestions === 5; 
}


function calculateScore() {
    let score = document.getElementById('result');

    if (!allQuestionsAnswered()) {
        score.innerText = ('Please answer all questions before submitting!');
        return;
    }

    answersChecked = true;

    // Count total Score
    let correctAnswers = 0;

    if (document.querySelector('#paris').classList.contains('selected')) {
        correctAnswers++;
    }
    if (document.querySelector('#seven').classList.contains('selected')) {
        correctAnswers++;
    }
    if (document.querySelector('#mars').classList.contains('selected')) {
        correctAnswers++;
    }
    if (document.querySelector('#dioxide').classList.contains('selected')) {
        correctAnswers++;
    }
    if (document.querySelector('#whale').classList.contains('selected')) {
        correctAnswers++;
    }

    if (correctAnswers === 5) {
        score.innerHTML += "<br><span style='color: #ea226c; font-size: 20px;'>Congratulations! You answered all questions correctly! 🥳</span>";
    } else {
        score.innerText = `Your Score: ${correctAnswers} out of 5. You can do better! 😓`
    }

    //--------------------------------Display correct answers---------------------------------------------
    // 1 question
    let select1 = document.querySelector('#paris');
    let select2 = document.querySelector('#london');
    let select3 = document.querySelector('#berlin');

    let displayAnswerOne = document.querySelector('#displayCorrectAnswer1');
    if (document.querySelector('#paris').classList.contains('selected')) {
        displayAnswerOne.innerText = `You are right! 👏`;
        displayAnswerOne.style.color = '#309a53d2'; 
        select1.classList.add('selectedCorrect');
    }else if (document.querySelector('#london').classList.contains('selected')) {
        select2.classList.add('selectedWrong');
        displayAnswerOne.innerText = `Correct Answer: C)! 😢`;
    }
    else if (document.querySelector('#berlin').classList.contains('selected')) {
        select3.classList.add('selectedWrong');
        displayAnswerOne.innerText = `Correct Answer: C)! 😢`;
    }else {
        displayAnswerOne.innerText = `Correct answer was C)! 😢`;
    }
                        
    // 2 question
    let select11 = document.querySelector('#five');
    let select22 = document.querySelector('#seven');
    let select33 = document.querySelector('#six');

    let displayAnswerTwo = document.querySelector('#displayCorrectAnswer2');
    if (document.querySelector('#seven').classList.contains('selected')) {
        displayAnswerTwo.innerText = `You are right! 👏`;
        displayAnswerTwo.style.color = '#309a53d2'; 
        select22.classList.add('selectedCorrect');
    }else if (document.querySelector('#five').classList.contains('selected')) {
        select11.classList.add('selectedWrong');
        displayAnswerTwo.innerText = `Correct Answer: B)! 😢`;
    }
    else if (document.querySelector('#six').classList.contains('selected')) {
        select33.classList.add('selectedWrong');
        displayAnswerTwo.innerText = `Correct Answer: B)! 😢`;
    }else {
        displayAnswerTwo.innerText = `Correct answer was B)! 😢`;
    }

    // 3 question
    let select111 = document.querySelector('#mars');
    let select222 = document.querySelector('#jupiter');
    let select333 = document.querySelector('#saturn');

    let displayAnswerThree = document.querySelector('#displayCorrectAnswer3');
    if (document.querySelector('#mars').classList.contains('selected')) {
        displayAnswerThree.innerText = `You are right! 👏`;
        displayAnswerThree.style.color = '#309a53d2'; 
        select111.classList.add('selectedCorrect');
    }else if (document.querySelector('#jupiter').classList.contains('selected')) {
        select222.classList.add('selectedWrong');
        displayAnswerThree.innerText = `Correct Answer: A)! 😢`;
    }
    else if (document.querySelector('#saturn').classList.contains('selected')) {
        select333.classList.add('selectedWrong');
        displayAnswerThree.innerText = `Correct Answer: A)! 😢`;
    }else {
        displayAnswerThree.innerText = `Correct answer was A)! 😢`;
    }

    // 4 question
    let select1111 = document.querySelector('#oxygen');
    let select2222 = document.querySelector('#dioxide');
    let select3333 = document.querySelector('#nitrogen');

    let displayAnswerFour = document.querySelector('#displayCorrectAnswer4');
    if (document.querySelector('#dioxide').classList.contains('selected')) {
        displayAnswerFour.innerText = `You are right! 👏`;
        displayAnswerFour.style.color = '#309a53d2'; 
        select2222.classList.add('selectedCorrect');
    }else if (document.querySelector('#oxygen').classList.contains('selected')) {
        select1111.classList.add('selectedWrong');
        displayAnswerFour.innerText = `Correct Answer: B)! 😢`;
    }
    else if (document.querySelector('#nitrogen').classList.contains('selected')) {
        select3333.classList.add('selectedWrong');
        displayAnswerFour.innerText = `Correct Answer: B)! 😢`;
    }else {
        displayAnswerFour.innerText = `Correct answer was B)! 😢`;
    }

    // 5 question
    let select11111 = document.querySelector('#elephant');
    let select22222 = document.querySelector('#whale');
    let select33333 = document.querySelector('#giraffe');

    let displayAnswerFive = document.querySelector('#displayCorrectAnswer5');
    if (document.querySelector('#whale').classList.contains('selected')) {
        displayAnswerFive.innerText = `You are right! 👏`;
        displayAnswerFive.style.color = '#309a53d2'; 
        select22222.classList.add('selectedCorrect');
    }else if (document.querySelector('#elephant').classList.contains('selected')) {
        select11111.classList.add('selectedWrong');
        displayAnswerFive.innerText = `Correct Answer: B)! 😢`;
    }
    else if (document.querySelector('#giraffe').classList.contains('selected')) {
        select33333.classList.add('selectedWrong');
        displayAnswerFive.innerText = `Correct Answer: B)! 😢`;
    }else {
        displayAnswerFive.innerText = `Correct answer was B)! 😢`;
    }

    document.querySelector('#checkButton').onclick = playAgain;
    document.querySelector('#checkButton').innerHTML = 'Try Again!';
}

function playAgain() {
    location.reload();
  }


  