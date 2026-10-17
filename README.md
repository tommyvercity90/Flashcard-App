# 📚 Flashcard App (Static Deck)

A simple, interactive, and responsive Flashcard App built using **HTML5, CSS3, and JavaScript**. The app helps users learn and revise concepts using question-and-answer cards with a smooth 3D flip animation.

## ✨ Features

- 🗂️ **10 Predefined Flashcards** — Includes questions and answers about HTML, CSS, and JavaScript.
- 🔄 **3D Flip Animation** — Click a card to reveal its answer.
- ⬅️➡️ **Previous and Next Navigation** — Move between flashcards easily.
- 📊 **Progress Indicator** — Displays the current card number and progress bar.
- ⌨️ **Keyboard Navigation** — Use the left and right arrow keys to navigate.
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile screens.
- 🎨 **Modern UI** — Gradient background, rounded cards, and smooth transitions.
- 🚫 **Boundary Controls** — Navigation buttons are disabled at the beginning and end of the deck.
- ⚡ **No External Dependencies** — Runs directly in your browser without APIs or libraries.

## 🛠️ Technologies Used

- **HTML5** — Structures the application.
- **CSS3** — Provides styling, responsive layouts, and 3D animations.
- **JavaScript** — Handles card data, flipping, navigation, and progress tracking.

## 📂 Project Structure

```
flashcard-app/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and flip animations
├── script.js       # Card data and application logic
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser and a code editor, such as Visual Studio Code.

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/flashcard-app.git
   ```
2. Navigate to the project folder:
   ```
   cd flashcard-app
   ```
3. Open `index.html` in your browser.

   Alternatively, use the **Live Server** extension in Visual Studio Code for a convenient development experience.

> Replace `your-username` with your GitHub username and update the repository URL to match your project.

## 🎮 How to Use

1. Open the application in your browser.
2. Read the question displayed on the flashcard.
3. Click the card or the **Flip Card** button to reveal the answer.
4. Click **Next** to move to the next flashcard.
5. Click **Previous** to revisit an earlier card.
6. Watch the progress bar to track your position in the deck.
7. Use the keyboard's left and right arrow keys to navigate.

## 📖 Flashcard Topics

The default deck contains 10 cards covering:

- HTML basics and hyperlinks
- CSS basics and text colors
- JavaScript fundamentals
- Variables and arrays
- Array methods
- Document Object Model (DOM)
- CSS 3D transforms

## 🧠 Concepts Practiced

This project demonstrates several important front-end development concepts:

- DOM manipulation
- JavaScript arrays and objects
- State tracking using variables
- Event listeners and event handling
- CSS `transform` and `rotateY()`
- CSS `backface-visibility`
- CSS 3D perspective
- Dynamic progress calculations
- Conditional logic
- Responsive web design
- Keyboard accessibility

## 🎨 Customization

### Add More Flashcards

Open `script.js` and add another object to the `cards` array:

```
{
    question: "What is a JavaScript function?",
    answer: "A reusable block of code designed to perform a task."
}
```

The progress indicator automatically adjusts to the updated number of cards.

### Change the Background

Open `style.css` and modify the `body` background:

```
background: linear-gradient(135deg, #667eea, #764ba2);
```

### Customize the Flip Animation

Modify the transition duration in `style.css`:

```
transition: transform 0.65s ease;
```

Increase the duration for a slower animation or decrease it for a faster flip.


### Question Side



### Answer Side



## 🔮 Future Improvements

- Add a shuffle feature for random card order.
- Add category-based flashcard decks.
- Add a restart button.
- Track cards marked as learned.
- Allow users to create their own flashcards.
- Save custom cards using `localStorage`.
- Add dark mode.
- Add a quiz mode with scoring.

## 📚 Learning Resources

- [MDN Web Docs — CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN Web Docs — JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs — DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN Web Docs — Event Handling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

