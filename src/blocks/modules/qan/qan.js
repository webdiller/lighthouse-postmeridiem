const questionsDesktop = document.querySelectorAll(".js-qan-desktop [data-question]");
const answersDesktop = document.querySelectorAll(".js-qan-desktop [data-answer]");

const resetClasses = (selector) => {
    selector.forEach(el=>el.classList.remove('active'))
}

if (questionsDesktop.length > 0) {
    questionsDesktop.forEach((question) => {
      question.addEventListener('click', function(e){
        const questionId = question.dataset.question;
        resetClasses(questionsDesktop)
        resetClasses(answersDesktop)
        e.target.classList.add('active');
        document.querySelector(`.js-qan-desktop [data-answer='${questionId}']`).classList.add('active');
      })
  });
}
