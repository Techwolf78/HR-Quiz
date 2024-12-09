import { useState } from 'react';

// First question details (permanent question)
const firstQuestion = {
  question: "How many years of experience do you have?",
  options: ["5-10 years", "10-15 years", "15-20 years", "20+ years"],
};

// Pool of 20 second questions (randomized HR-related questions)
const secondQuestions = [
  { question: "What’s your secret weapon in HR?", options: ["Excel spreadsheets", "Coffee, lots of it", "Empathy", "Pretending to understand legal jargon"] },
  { question: "How do you handle awkward interviews?", options: ["I turn the awkwardness into a joke", "I just nod and smile", "I keep a straight face and hope for the best", "I let the candidate do all the talking"] },
  { question: "What do you consider the hardest part of being an HR professional?", options: ["Reading through 500 resumes", "Trying to make small talk with candidates", "Handling office drama", "Answering the same question for the 50th time"] },
  { question: "How do you feel when an employee asks for a raise?", options: ["Here we go again", "I try to hold back my excitement", "I’m secretly calculating how much coffee I can buy with that budget", "I just hope they bring doughnuts to the meeting"] },
  { question: "What’s the best HR hack you’ve ever learned?", options: ["Knowing where to hide the office snacks", "How to avoid HR memes on company email", "Mastering the ‘let me check with my manager’ response", "Making meetings look productive without saying much"] },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question index
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [showModal, setShowModal] = useState(false); // Show the modal after both questions

  // Function to handle answer selection
  const handleAnswer = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer); // Store the selected answer

    // After answering the first question, move to the second question
    if (currentQuestion === 0) {
      setCurrentQuestion(1); // Go to the second question (randomized)
    } else {
      // Show the modal after answering the second question
      setShowModal(true);

      // Hide the modal after 3 seconds and reset the quiz
      setTimeout(() => {
        setShowModal(false); // Hide the modal
        setCurrentQuestion(0); // Reset to the first question
        setSelectedAnswer(null); // Clear the selected answer
      }, 3000); // Wait for 3 seconds before restarting the quiz
    }
  };

  // Get the current question based on `currentQuestion` index
  const getQuestion = currentQuestion === 0 ? firstQuestion : secondQuestions[Math.floor(Math.random() * secondQuestions.length)];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      {/* Content Box */}
      {!showModal && (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full sm:max-w-lg max-w-xs">
          {/* Question Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-800">{getQuestion.question}</h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {getQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full py-4 sm:py-5 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 focus:outline-none"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Full-screen Modal Popup */}
      {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-80 z-50">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-xl text-center w-full sm:max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-semibold text-gray-800">Thank You for Your Time. Enjoy your evening!</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
