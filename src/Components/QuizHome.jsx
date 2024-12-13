import { useState } from 'react';

const firstQuestion = {
  question: "How many years of experience do you have?",
  options: ["5-10 years", "10-15 years", "15-20 years", "20+ years"],
};

const secondQuestions = [
  { question: "What’s your favorite way to announce a new policy?", options: ["Long email no one reads", "A meme in the company chat", "Mandatory team meeting", "Post-it note on the coffee machine"] },
  { question: "How do you handle a no-show interview?", options: ["Reschedule immediately", "Send a polite email", "Secretly celebrate the extra free time", "Blame technology"] },
  { question: "What’s your go-to response to 'Can I speak to HR?'?", options: ["‘Of course, come in.’", "‘Uh oh, what happened?’", "‘Sure, just give me a second.’", "‘What did you do now?’"] },
  { question: "What’s the biggest perk of being in HR?", options: ["Free coffee", "Knowing everyone’s secrets", "Being the company therapist", "The ability to work from anywhere"] },
  { question: "How do you deal with difficult coworkers?", options: ["Direct confrontation", "Passive-aggressive emails", "Meditation", "Avoidance at all costs"] },
  { question: "What’s the weirdest resume you’ve ever received?", options: ["Blank with a smiley face", "Written in Comic Sans", "A poem about their skills", "No name, just emojis"] },
  { question: "What’s the best way to celebrate a workplace anniversary?", options: ["Cake in the break room", "A heartfelt email", "Company swag", "Pretending to forget"] },
  { question: "How do you motivate employees during a slump?", options: ["Motivational quotes", "Pizza parties", "Team-building exercises", "Threats of team-building exercises"] },
  { question: "What’s your go-to excuse for leaving a boring meeting?", options: ["‘I need to take this call.’", "‘HR emergency!’", "‘Bathroom break.’", "‘Oh look, a fire drill.’"] },
  { question: "What’s the most awkward part of onboarding?", options: ["Forgetting their name", "Explaining company jargon", "Answering awkward questions", "Finding a clean desk"] },
  { question: "How do you handle an HR crisis?", options: ["Panic, then plan", "Take a deep breath and dive in", "Blame the system", "Ask Google for advice"] },
  { question: "What’s your favorite icebreaker question for meetings?", options: ["What’s your superpower?", "What’s your guilty pleasure snack?", "What’s your dream job?", "Why are we here?"] },
  { question: "What’s the biggest HR faux pas you’ve witnessed?", options: ["Sending a ‘Reply All’ email", "Forgetting to mute during a Zoom call", "Misspelling someone’s name", "Showing up to the wrong meeting"] },
  { question: "What’s the best way to defuse office drama?", options: ["One-on-one chats", "Group mediation", "Distracting everyone with snacks", "Letting it fizzle out on its own"] },
  { question: "How do you deal with conflicting leave requests?", options: ["First come, first served", "A game of rock-paper-scissors", "Priority based on projects", "Random draw"] },
  { question: "What’s the most overused phrase in HR emails?", options: ["‘Let’s circle back.’", "‘Just checking in.’", "‘As discussed.’", "‘Per my last email.’"] },
  { question: "What’s your go-to stress reliever?", options: ["Coffee breaks", "Walks outside", "Vent to a coworker", "Hiding in the breakroom"] },
  { question: "What’s the hardest thing about planning a company event?", options: ["Budget constraints", "Pleasing everyone", "Finding a date that works", "Coming up with creative ideas"] },
  { question: "How do you keep up with HR trends?", options: ["Read blogs", "Listen to podcasts", "Attend webinars", "Ask younger colleagues"] },
  { question: "What’s your favorite part about exit interviews?", options: ["The honesty", "Getting closure", "Finding ways to improve", "Knowing it’s not your problem anymore"] },
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const handleAnswer = async (selectedAnswer) => {
    if (currentQuestion === 0) {
      setIsLoading(true);
      setSelectedOption(selectedAnswer); // Set selected option when clicked

      setTimeout(() => {
        setIsLoading(false);
        setCurrentQuestion(1);
        setSelectedOption(null); // Reset selected option after moving to next question
      }, 300);

      const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwnfgBXjKYvRinqN1JUq7QjEN5ieOq55bAbxOuM5kQ_xhbsUFUWMINXrlzHpxW7LyM/exec";

      try {
        const response = await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ experience: selectedAnswer }),
        });
        const data = await response.json();
        console.log("API Response:", data.result);
      } catch (error) {
        console.error("Error sending data to Google Sheets:", error);
      }
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setCurrentQuestion(0);
      }, 3000);
    }
  };

  const getQuestion = currentQuestion === 0 ? firstQuestion : secondQuestions[Math.floor(Math.random() * secondQuestions.length)];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r ${isDarkMode ? 'from-blue-800 to-blue-900' : 'from-blue-500 to-blue-600'} relative px-4 sm:px-6 md:px-8`}>
      
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">Synergy Sphere 2024</h1>
        <p className="text-lg sm:text-xl mt-1" style={{ fontFamily: 'Cookie, cursive', color: '#ffffff' }}>
          &quot;Unison of Industry & Academia&quot;
        </p>
      </div>

      <div className="w-full flex justify-center items-center bg-black bg-opacity-0 h-16 mb-4">
        <img 
          src="/association.png" 
          alt="Welcome to the HR Experience Quiz" 
          className="w-full h-auto object-contain max-h-32" 
        />
      </div>

      <div className="w-full flex items-center justify-between py-2 px-6 md:px-12 absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <img src="/NewLogo.png" alt="Company Logo" className="w-28 h-auto" />
        </div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
      )}

      {!showModal && (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-xs md:max-w-2xl mt-6">
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{getQuestion.question}</h2>
          </div>
          <div className="space-y-3">
            {getQuestion.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={isLoading}
                className={`w-full py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 focus:outline-none flex items-center justify-start ${selectedOption === option ? 'border-4 border-yellow-400' : ''}`}
              >
                {/* Square with option letter (A, B, C, D) */}
                <div className="w-8 h-8 bg-white rounded-full text-center text-gray-700 font-semibold mr-4 mx-2 flex items-center justify-center">
                  {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                </div>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
{showModal && (
  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-80 z-50 animate-fade-in">
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8 rounded-xl shadow-xl text-center w-full sm:max-w-2xl">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Thank You for Your Time!</h3>
      <p className="text-lg sm:text-xl text-white opacity-80 mb-6">We appreciate your participation. Have a fantastic evening!</p>
      <div className="flex justify-center">
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
