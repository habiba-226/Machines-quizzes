function playVideo(videoId) {
  let video = document.getElementById(videoId);
  if (video.paused) {
    video.play(); 
  } else {
    video.pause(); 
  }
}

// Function to handle quiz submission and reset for any quiz form
function handleQuizSubmit(quizFormId, resultId, tryAgainBtnId, answers) {
  document.getElementById(quizFormId).addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let resultHTML = '';

    // Loop through all the questions and check the answers
    for (let q in answers) {
      const userAnswer = document.querySelector(`input[name="${q}"]:checked`); // Get selected radio button
      const correctAnswer = answers[q];

      if (userAnswer) {
        if (userAnswer.value === correctAnswer) {
          resultHTML += `<p class="correct">Question ${q.charAt(1)}: Correct! You got it right.</p>`;
        } else {
          resultHTML += `<p class="incorrect">Question ${q.charAt(1)}: Incorrect. The correct answer is ${correctAnswer}.</p>`;
        }
      } else {
        resultHTML += `<p class="incorrect">Question ${q.charAt(1)}: You didn’t answer this question.</p>`;
      }
    }

    // Display the results
    document.getElementById(resultId).innerHTML = resultHTML;

    // Show the Try Again button
    document.getElementById(tryAgainBtnId).classList.remove('hidden');
    // Hide the submit button after submission
    document.querySelector(`#${quizFormId} button[type="submit"]`).classList.add('hidden');
  });

  // Reset the quiz when the Try Again button is clicked
  document.getElementById(tryAgainBtnId).addEventListener('click', function() {
    // Reset all radio buttons
    const radios = document.querySelectorAll(`#${quizFormId} input[type="radio"]`);
    radios.forEach(radio => radio.checked = false);

    // Clear the results
    document.getElementById(resultId).innerHTML = '';

    // Hide the Try Again button and show the Submit button
    document.getElementById(tryAgainBtnId).classList.add('hidden');
    document.querySelector(`#${quizFormId} button[type="submit"]`).classList.remove('hidden');
  });
}

// Call the handleQuizSubmit function for quiz 1
handleQuizSubmit('quiz-form-1', 'result-1', 'try-again-1', {
  q1: 'true',
  q2: 'false',
  q3: 'false'
})
handleQuizSubmit('quiz-form-2', 'result-2', 'try-again-2', {
  q1: 'true',
  q2: 'false',
  q3: 'true'
});