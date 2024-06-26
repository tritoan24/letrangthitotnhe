// Array of literature exam questions
var questions = [
    "Vợ chồng A phủ",
    "Người lái đò sông Đà",
    "Ai đã đặt tên cho dòng sông",
    "Việt Bắc",
    "Tây Tiến",
    "Tiếng hát con tàu",
    "Đất Nước"
];

// Function to generate a random question
function generateRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// DOM elements
var questionContainer = document.getElementById('question');
var generateBtn = document.getElementById('generate-btn');

// Set initial text content for questionContainer
questionContainer.textContent = "Ấn vào nút dưới đây để biết đề văn nhé";

// Event listener for the button click to generate a new question
generateBtn.addEventListener('click', function() {
    questionContainer.textContent = "Đề thi ngày mai sẽ là: "+generateRandomQuestion();
});
