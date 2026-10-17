
const cards = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language."
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets."
    },
    {
        question: "What is JavaScript used for?",
        answer: "Adding interactivity and dynamic behavior to web pages."
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        answer: "The <a> tag, using the href attribute."
    },
    {
        question: "Which CSS property changes text color?",
        answer: "The color property."
    },
    {
        question: "Which keyword declares a block-scoped variable?",
        answer: "let and const both declare block-scoped variables."
    },
    {
        question: "What is an array in JavaScript?",
        answer: "An ordered collection of values."
    },
    {
        question: "Which method adds an item to an array's end?",
        answer: "The push() method."
    },
    {
        question: "What does DOM stand for?",
        answer: "Document Object Model."
    },
    {
        question: "Which CSS property creates a 3D flip effect?",
        answer: "The transform property, using rotateY(180deg)."
    }
];

let currentIndex = 0;
let isFlipped = false;

const flashcard = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");

// Display the current card
function showCard() {
    const card = cards[currentIndex];

    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;

    progressText.textContent =
        `Card ${currentIndex + 1} of ${cards.length}`;

    progressBar.style.width =
        `${((currentIndex + 1) / cards.length) * 100}%`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;

    flashcard.setAttribute("aria-pressed", String(isFlipped));
    flashcard.setAttribute(
        "aria-label",
        isFlipped ? "Answer shown. Click to see question"
                  : "Question shown. Click to reveal answer"
    );
}

// Flip between question and answer
function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle("flipped", isFlipped);
    showCard();
}

// Navigate to the previous card
function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        resetAndShowCard();
    }
}

// Navigate to the next card
function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        resetAndShowCard();
    }
}

// Always show the question on a new card
function resetAndShowCard() {
    isFlipped = false;
    flashcard.classList.remove("flipped");
    showCard();
}

// Event listeners
flashcard.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
prevBtn.addEventListener("click", previousCard);
nextBtn.addEventListener("click", nextCard);

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        previousCard();
    } else if (event.key === "ArrowRight") {
        nextCard();
    } else if (
        (event.key === "Enter" || event.key === " ") &&
        document.activeElement === flashcard
    ) {
        event.preventDefault();
        flipCard();
    }
});

// Initial display
showCard();
