const quizData = [
    { question: "1. Which one is true for password?", answers: ["A) Passwords are case sensitive", "B) Has fixed length", "C) Can contain letters, numbers and symbols", "D) All of the above"], correct: "D" },
    { question: "2. Which is not an operator?", answers: ["A) ;", "B) %", "C) /", "D) ,"], correct: "A" },
    { question: "3. The orientation of the page in which the printed lines run the width (81/2\") of the page is called...", answers: ["A) Landscape", "B) Inverted", "C) Normal", "D) Portrait"], correct: "A" },
    { question: "4. The labels defining in a worksheet structure", answers: ["A) Contain letters, numbers and symbols", "B) Are comprised of numbers and the equals sign", "C) Include function", "D) Begin with and equals sign"], correct: "A" },
    { question: "5. To move to the last column in a worksheet, press...", answers: ["A) Ctrl+Home", "B) Ctrl+End", "C) Alt+Right Arrow", "D) Alt+Down Arrow"], correct: "B" },
    { question: "6. What will happen when you click the border between two columns?", answers: ["A) Widen the column width as contents", "B) Widen the row height as contents", "C) Hide the row", "D) Both (A) and (C)"], correct: "A" },
    { question: "7. A worksheet contains approximately how many rows?", answers: ["A) 256", "B) 65535", "C) 65635", "D) 65536"], correct: "D" },
    { question: "8. To select multiple, non-adjacent worksheets in a workbook.", answers: ["A) Press Ctrl and click another tab", "B) Press Alt and click another tab", "C) Press Shift and click another tab", "D) Drag the mouse pointer through the tabs"], correct: "A" },
    { question: "9. By default, how is text horizontal aligned inside a cell in Excel?", answers: ["A) Left aligned", "B) Center", "C) Right aligned", "D) Justified"], correct: "A" },
    { question: "10. Which option restricts the values that can be entered into a cell?", answers: ["A) Data > Validation", "B) Data > Filter > Advanced Filter", "C) Format > Cells", "D) Format > Conditional Formatting"], correct: "A" },
    { question: "11. To display the heading as slanted text to save space...", answers: ["A) Select slanted Text on the font tab", "B) Select Text Orientation on the Alignment tab", "C) Superscript on the font tab", "D) Center Across selection on the Alignment tab"], correct: "B" },
    { question: "12. What will be the correct answer if user enters the 3 P into a cell?", answers: ["A) 3.00", "B) 3:00 PM", "C) 3 P", "D) None of above"], correct: "C" },
    { question: "13. The formula uses its own reference is called...", answers: ["A) Absolute reference", "B) Mixed reference", "C) External reference", "D) Circular reference"], correct: "D" },
    { question: "14. What is the function of text to column?", answers: ["A) Allows you to separate delimited text across the columns automatically.", "B) Converts the selected text to table.", "C) It automatically resizes the cell size whenever a large text is added in the cell", "D) None of the above"], correct: "A" },
    { question: "15. The maximum number of characters that can be stored in a cell is...", answers: ["A) 256", "B) 32000", "C) 65000", "D) None of the above"], correct: "D" },
    { question: "16. Goal Seek appears at the... Menu", answers: ["A) File", "B) Data", "C) Tools", "D) Format"], correct: "B" },
    { question: "17. Which shortcut key is used to hide column?", answers: ["A) Alt+9", "B) Ctrl+9", "C) Alt+0", "D) Ctrl+0"], correct: "B" },
    { question: "18. The maximum length of a formula is...", answers: ["A) 1024 characters", "B) 255 characters", "C) 2000 characters", "D) Depends upon internal memory"], correct: "D" },
    { question: "19. The shortcut key to define name is...", answers: ["A) Ctrl+F2", "B) Ctrl+F3", "C) Ctrl+F4", "D) Ctrl+F9"], correct: "B" },
    { question: "20. The maximum number of sheets within any workbook is...", answers: ["A) 100", "B) 200", "C) 255", "D) Unlimited"], correct: "D" },
    { question: "21. The format dddd in date will display...", answers: ["A) Sund", "B) Sun", "C) Sunday", "D) None of the above"], correct: "C" },
    { question: "22. The key press moves the cell pointer on pane of another pane in split window.", answers: ["A) F5", "B) F6", "C) F9", "D) F11"], correct: "B" },
    { question: "23. The referencing styles used in Excel...", answers: ["A) 1", "B) 2", "C) 3", "D) 4"], correct: "B" },
    { question: "24. To insert Auto sum function, one can press...", answers: ["A) Alt++", "B) Alt+=", "C) Alt+Enter", "D) Alt+;"], correct: "B" },
    { question: "25. The category axis is also called a...", answers: ["A) X-Axis", "B) Y-Axis", "C) Secondary Axis", "D) Value Axis"], correct: "A" },
    { question: "26. The shortcut key used to create default chart is...", answers: ["A) F11", "B) Alt+F1", "C) F10", "D) A & B"], correct: "D" },
    { question: "27. The file extension of workspace file is...", answers: ["A) .xls", "B) .xlt", "C) .xlw", "D) .xls"], correct: "C" },
    { question: "28. The shortcut key used to switch contents into edit mode is...", answers: ["A) F2", "B) F3", "C) F4", "D) F6"], correct: "A" },
    { question: "29. Which one of Excel window allows you to enter values in worksheet?", answers: ["A) Title Bar", "B) Menu Bar", "C) Formula Bar", "D) Standard Tool Bar"], correct: "C" },
    { question: "30. A typical worksheet has ... number of columns.", answers: ["A) 23", "B) 256", "C) 255", "D) 1024"], correct: "B" },
    { question: "31. Comments put in cells are called...", answers: ["A) Smart Tip", "B) Cell Tip", "C) Web Tip", "D) Soft Tip"], correct: "B" },
    { question: "32. Getting data from a cell located in a different sheet is called...", answers: ["A) Accessing", "B) Referencing", "C) Updating", "D) Functioning"], correct: "B" },
    { question: "33. Which of the following is not a valid data type in Excel?", answers: ["A) Number", "B) Hyperlink", "C) Label", "D) Date/Time"], correct: "B" },
    { question: "34. Which elements of a worksheet can be protected from accidental modification?", answers: ["A) Contents", "B) Object", "C) Scenarios", "D) All of the above"], correct: "D" },
    { question: "35. A numeric value can be treated as a label value if it is proceeded with...", answers: ["A) '", "B) !", "C) \"", "D) ~"], correct: "A" },
    { question: "36. Which is a text operator?", answers: ["A) Apostrophe (')", "B) Exclamation (!)", "C) Hash (#)", "D) Ampersand (&)"], correct: "D" },
    { question: "37. Which formula returns multiple results from a single formula?", answers: ["A) Standard Formula", "B) Array Formula", "C) Mixed Formula", "D) Smart Formula"], correct: "B" },
    { question: "38. Which is not a tool for what-if analysis?", answers: ["A) Table", "B) Goal Seek", "C) Pivot table", "D) Scenario"], correct: "C" },
    { question: "39. Data can be added from different sheet within a workbook using...", answers: ["A) Data outline", "B) Data consolidate", "C) Data Subtotal", "D) Scenario"], correct: "B" },
    { question: "40. The Edit > Delete command will delete...", answers: ["A) Delete sheet", "B) Clear contents", "C) Delete cell", "D) All of the above"], correct: "C" },
    { question: "41. Data of sheet can be printed on center of page using...", answers: ["A) Page setup / Margin", "B) Print / Center", "C) Page setup / Layout", "D) Page setup / Sheet"], correct: "A" },
    { question: "42. To import data for database in excel using...", answers: ["A) Data / Import external data", "B) Tools / Get external data", "C) Tools / Import external data", "D) None of the above"], correct: "A" },
    { question: "43. The mode of operations can be displayed at...", answers: ["A) Formula bar", "B) Status bar", "C) Display bar", "D) Scroll bar"], correct: "B" },
    { question: "44. AutoSum button appears at the ... toolbar.", answers: ["A) Standard", "B) Formula", "C) Formatting", "D) Border"], correct: "A" },
    { question: "45. You can enable auto save feature using...", answers: ["A) Add-ins", "B) Attachment", "C) Option", "D) None of the above"], correct: "C" },
    { question: "46. The insert function appears at the...", answers: ["A) Standard toolbar", "B) Formula palette", "C) Formatting toolbar", "D) None of the above"], correct: "B" },
    { question: "47. Which command will display the subset of data from list?", answers: ["A) Pivot Table", "B) Filter", "C) Goal Seek", "D) Scenario"], correct: "B" },
    { question: "48. Which one can you search by find command?", answers: ["A) Formula", "B) Value", "C) Comment", "D) All of the above"], correct: "D" },
    { question: "49. Which will affect the column width of entire worksheet?", answers: ["A) Column width", "B) Standard width", "C) Global width", "D) All of the above"], correct: "B" },
    { question: "50. Which symbol will display when your number is too large for column width?", answers: ["A) $", "B) #", "C) @", "D) *"], correct: "B" }
];

const quizContainer = document.getElementById('quizContainer');
const progressBar = document.getElementById('progressBar').firstElementChild;
const scoreDisplay = document.getElementById('score');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const timeoutSound = document.getElementById('timeoutSound');
let score = 0;
let questionIndex = 0;
let timerInterval;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuiz() {
    shuffleArray(quizData);
    renderQuestion();
}

function renderQuestion() {
    const currentQuestion = quizData[questionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question', 'mb-4');

    const questionText = document.createElement('h5');
    questionText.textContent = currentQuestion.question;
    questionElement.appendChild(questionText);

    const answersList = document.createElement('ul');
    answersList.classList.add('list-group', 'answers');

    currentQuestion.answers.forEach(answer => {
        const answerItem = document.createElement('li');
        answerItem.classList.add('list-group-item');

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'answer';
        answerInput.value = answer[0];
        answerItem.appendChild(answerInput);

        const answerLabel = document.createElement('label');
        answerLabel.innerHTML = `${answer}`;
        answerLabel.setAttribute('for', answer[0]);
        answerItem.appendChild(answerLabel);

        answersList.appendChild(answerItem);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('btn', 'btn-primary', 'mt-2');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', submitAnswer);

    questionElement.appendChild(answersList);
    questionElement.appendChild(submitButton);
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);

    startTimer();
    updateProgressBar();
}

function startTimer() {
    let timeLeft = 7; // Time in seconds
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    quizContainer.appendChild(timerElement);

    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timerElement.textContent = `Time left: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timeoutSound.play();
            submitAnswer();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressPercent = ((questionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) return;

    const currentQuestion = quizData[questionIndex];
    const userAnswer = selectedAnswer.value;

    clearInterval(timerInterval); // Clear timer when answer is submitted

    if (userAnswer === currentQuestion.correct) {
        score++;
        scoreDisplay.textContent = score;
        selectedAnswer.parentNode.classList.add('correct-answer');
        correctSound.play();
    } else {
        selectedAnswer.parentNode.classList.add('wrong-answer');
        const correctAnswer = document.querySelector(`input[value="${currentQuestion.correct}"]`);
        correctAnswer.parentNode.classList.add('correct-answer');
        wrongSound.play();
    }

    questionIndex++;

    setTimeout(() => {
        if (questionIndex < quizData.length) {
            renderQuestion();
        } else {
            showFinalScore();
        }
    }, 2000);
}

function showFinalScore() {
    const finalScoreElement = document.createElement('div');
    finalScoreElement.innerHTML = `<h3 class="mt-4">Final Score: ${score}/${quizData.length}</h3>`;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(finalScoreElement);
}

window.onload = loadQuiz;