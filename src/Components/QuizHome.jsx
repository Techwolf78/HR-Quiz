import { useState } from "react";

const firstQuestion = {
  questionId: "Q1",  // Unique ID for the first question
  question: "Would you hire a fresher for a critical role in your company?",
  options: ["Yes, they bring fresh ideas!", "No, we need experience for this role.", "Maybe, but only with proper training."],
};
 

const secondQuestions = [
  {
    questionId: "Q2",  // Unique ID for the first question
    question: "What is the most common reason you hesitate to hire freshers?",
    options: [
      "Lack of practical skills",
      "Poor communication abilities",
      "Inadequate problem-solving skills",
      "Limited industry knowledge",
    ],
  },
  {
    questionId: "Q3",  // Unique ID for the first question
    question: "Which skill do you prioritize most when hiring a fresher?",
    options: [
      "Technical expertise",
      "Team collaboration",
      "Adaptability to new challenges",
      "Critical thinking",
    ],
  },
  {
    questionId: "Q4",  // Unique ID for the first question
    question:
      "If you had to choose one area for freshers to improve, what would it be?",
    options: [
      "Confidence during interviews",
      "Domain-specific knowledge",
      "Workplace professionalism",
      "Time management",
    ],
  },
  {
    questionId: "Q5",  // Unique ID for the first question
    question: "Which training method do you think works best for freshers?",
    options: [
      "Hands-on workshops and projects",
      "Online courses with certifications",
      "Role-plays and simulations",
      "On-the-job training",
    ],
  },
  {
    questionId: "Q6",  // Unique ID for the first question
    question:
      "When hiring freshers, what do you expect their level of preparedness to be?",
    options: [
      "Ready to perform with minimal guidance",
      "Basic knowledge with willingness to learn",
      "Intermediate skills but needs company-specific training",
      "Freshers are a clean slate for us to mold",
    ],
  },
  {
    questionId: "Q7",  // Unique ID for the first question
    question: "Which soft skill do you find missing most often in freshers?",
    options: [
      "Effective communication",
      "Leadership potential",
      "Conflict resolution",
      "Empathy and emotional intelligence",
    ],
  },
  {
    questionId: "Q8",  // Unique ID for the first question
    question:
      "What technical skill gap do you observe most in freshers from your domain?",
    options: [
      "In-depth understanding of tools/software",
      "Application of theoretical knowledge to real-world problems",
      "Lack of coding/data analysis skills (if applicable)",
      "Research and analytical abilities",
    ],
  },
  {
    questionId: "Q9",  // Unique ID for the first question
    question:
      "How do you assess a fresher's ability to fit into your team culture?",
    options: [
      "Through behavioral questions during interviews",
      "Observing their responses in group discussions",
      "Trial periods or internships",
      "We don’t specifically assess for this",
    ],
  },
  {
    questionId: "Q10",  // Unique ID for the first question
    question:
      "What training technique would you recommend to improve fresher placements?",
    options: [
      "Case studies and live projects",
      "Mentorship by industry professionals",
      "Gamified learning or competitions",
      "Regular mock interviews and feedback",
    ],
  },
  {
    questionId: "Q11",  // Unique ID for the first question
    question:
      "What motivates you to prefer freshers over experienced candidates?",
    options: [
      "They bring fresh perspectives",
      "They are more adaptable to company culture",
      "They are cost-effective for the company",
      "They are eager to learn and grow",
    ],
  },
  {
    questionId: "Q12",  // Unique ID for the first question
    question:
      "What do you believe is the ideal duration for a training program to prepare freshers for placements?",
    options: [
      "2-4 weeks",
      "1-2 months",
      "3-6 months",
      "Ongoing, even post-placement",
    ],
  },
  {
    questionId: "Q13",  // Unique ID for the first question
    question:
      "How important is certification in influencing your decision to hire a fresher?",
    options: [
      "Extremely important, it validates their skills",
      "Somewhat important, but experience matters more",
      "Not very important, practical knowledge is key",
      "It depends on the industry",
    ],
  },
  {
    questionId: "Q14",  // Unique ID for the first question
    question:
      "Which area of training do you think is most critical for freshers in your domain?",
    options: [
      "Technical expertise (e.g., software, tools)",
      "Industry-specific knowledge (e.g., processes, regulations)",
      "Soft skills (e.g., communication, leadership)",
      "Business acumen (e.g., understanding organizational goals)",
    ],
  },
  {
    questionId: "Q15",  // Unique ID for the first question
    question:
      "How do you rate the importance of fresher placement readiness programs?",
    options: [
      "Essential for ensuring employability",
      "Helpful but not mandatory",
      "Neutral, hiring depends on other factors",
      "Not relevant for my industry",
    ],
  },
  {
    questionId: "Q16",  // Unique ID for the first question
    question:
      "If you could suggest one thing to improve fresher training programs, what would it be?",
    options: [
      "More hands-on, practical exposure",
      "Personalized career counseling and mentoring",
      "Industry-led certification programs",
      "Better alignment with industry needs and expectations",
    ],
  },
  {
    questionId: "Q17",  // Unique ID for the first question
    question:
      "Imagine you’re on a hiring spree. Which “superpower” would you want freshers to have?",
    options: [
      "Instant problem-solving",
      "Unstoppable communication",
      "Adaptability to any team",
      "The ability to learn and apply fast",
    ],
  },
  {
    questionId: "Q18",  // Unique ID for the first question
    question:
      "If freshers came with a user manual, what would the first page say?",
    options: [
      "“Ready to learn, just needs a push!”",
      "“Handle with care, but packed with potential!”",
      "“Update required: Needs a bit of training.”",
      "“Plug-and-play: Ready to deliver!”",
    ],
  },
  {
    questionId: "Q19",  // Unique ID for the first question
    question:
      "You’re on a hiring panel for freshers. What’s the first question you’d ask them?",
    options: [
      "“What makes you stand out?”",
      "“Can you tell me about a time you solved a problem creatively?”",
      "“What’s your dream role and why?”",
      "“What do you bring to a team?”",
    ],
  },
  {
    questionId: "Q20",  // Unique ID for the first question
    question:
      "If a fresher were a movie character, which quality would make them a blockbuster hire?",
    options: [
      "Courage like Harry Potter",
      "Quick thinking like Sherlock Holmes",
      "Team spirit like the Avengers",
      "Creativity like Iron Man",
    ],
  },
  {
    questionId: "Q21",  // Unique ID for the first question
    question: "What’s your biggest “wow” moment when interviewing freshers?",
    options: [
      "They share a unique idea or perspective",
      "They solve a challenge in a creative way",
      "They connect well and seem team-friendly",
      "They show eagerness to learn and grow",
    ],
  },
  {
    questionId: "Q22",  // Unique ID for the first question
    question:
      "If you had to give a fresher a nickname, what would it be based on their skill gaps?",
    options: [
      "“The Raw Diamond” – Needs polishing but valuable",
      "“The Quick Learner” – Picks up skills on the fly",
      "“The Improviser” – Great at figuring things out",
      "“The Enthusiast” – Full of energy, just needs focus",
    ],
  },
  {
    questionId: "Q23",  // Unique ID for the first question
    question:
      "Imagine a fresher enters with an empty “skills basket.” What’s the first thing you’d fill it with?",
    options: [
      "Industry-specific tools and techniques",
      "Leadership and teamwork strategies",
      "Real-world problem-solving scenarios",
      "Confidence and communication skills",
    ],
  },
  {
    questionId: "Q24",  // Unique ID for the first question
    question: "What’s your ideal fresher’s learning style?",
    options: [
      "Hands-on, with real-time practice",
      "Story-driven, with examples from industry experts",
      "Trial and error, learning through challenges",
      "Step-by-step, guided learning",
    ],
  },
  {
    questionId: "Q25",  // Unique ID for the first question
    question:
      "If you were to send one fresher to represent your company at a global event, what quality would you look for?",
    options: [
      "Sharp technical skills",
      "Inspiring confidence and charisma",
      "Problem-solving abilities under pressure",
      "Creativity and adaptability",
    ],
  },
  {
    questionId: "Q26",  // Unique ID for the first question
    question:
      "What would make you say, “This is the perfect fresher for our team”?",
    options: [
      "They have practical skills ready to go",
      "They’re eager and adaptable",
      "They demonstrate teamwork and emotional intelligence",
      "They show growth potential during the interview",
    ],
  },
  {
    questionId: "Q27",  // Unique ID for the first question
    question:
      "If you could design a crash course for freshers, what would the first module be?",
    options: [
      "Industry tools and technologies",
      "Navigating workplace dynamics",
      "Problem-solving 101",
      "Effective communication and presentation",
    ],
  },
  {
    questionId: "Q28",  // Unique ID for the first question
    question:
      "Picture this: You hire a fresher today. What’s the one thing they should NOT do on Day 1?",
    options: [
      "Avoid asking questions",
      "Show overconfidence without substance",
      "Ignore teamwork and go solo",
      "Overlook deadlines and priorities",
    ],
  },
  {
    questionId: "Q29",  // Unique ID for the first question
    question:
      "If a fresher aces one round of an interview, which round do you wish it was?",
    options: [
      "Technical test – They’re skilled",
      "Group discussion – They’re team-ready",
      "HR interview – They fit the culture",
      "Final interview – They’re prepared to contribute",
    ],
  },
  {
    questionId: "Q30",  // Unique ID for the first question
    question:
      "If you could give every fresher one piece of advice, what would it be?",
    options: [
      "Always keep learning",
      "Be confident and professional",
      "Embrace feedback as a gift",
      "Build strong connections",
    ],
  },
  {
    questionId: "Q31",  // Unique ID for the first question
    question: "What would make a fresher your dream candidate?",
    options: [
      "Solving a real-world problem in the interview",
      "Communicating their ideas clearly and confidently",
      "Showing eagerness to adapt to your company",
      "Demonstrating leadership in a group setting",
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [showModal, setShowModal] = useState(false); // Show completion modal

  const handleAnswer = async (selectedAnswer) => {
    const currentQuestionData =
      currentQuestion === 0 ? firstQuestion : secondQuestions[currentQuestion];

    setIsLoading(true);
    setSelectedOption(selectedAnswer); // Set selected option when clicked

    setTimeout(() => {
      setIsLoading(false);
      setSelectedOption(null); // Reset selected option after delay

      if (currentQuestion === 0) {
        setCurrentQuestion(1); // Move to next question
      } else {
        setShowModal(true); // Show completion modal after all questions
        setTimeout(() => {
          setShowModal(false);
          setCurrentQuestion(0); // Reset to first question after modal
        }, 3000);
      }
    }, 300);

    const googleSheetUrl =
      "https://script.google.com/macros/s/AKfycbwnfgBXjKYvRinqN1JUq7QjEN5ieOq55bAbxOuM5kQ_xhbsUFUWMINXrlzHpxW7LyM/exec";

    try {
      const response = await fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          questionId: currentQuestionData.questionId, // Send questionId
          answer: selectedAnswer, // Send selected answer
        }),
      });
      const data = await response.json();
      console.log("API Response:", data.result);
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  };

  const getQuestion =
    currentQuestion === 0
      ? firstQuestion
      : secondQuestions[Math.floor(Math.random() * secondQuestions.length)];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r ${isLoading ? "from-blue-800 to-blue-900" : "from-blue-500 to-blue-600"
      } relative px-4 sm:px-6 md:px-8`}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">
          Synergy Sphere 2024
        </h1>
        <p
          className="text-lg sm:text-xl mt-1"
          style={{ fontFamily: "Cookie, cursive", color: "#ffffff" }}
        >
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
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      )}

      {!showModal && (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-xs md:max-w-2xl mt-6">
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {getQuestion.question}
            </h2>
          </div>
          <div className="space-y-3">
            {getQuestion.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={isLoading}
                className={`w-full py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 focus:outline-none flex items-center justify-start ${
                  selectedOption === option ? "border-4 border-yellow-400" : ""
                }`}
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
                <svg
                  className="w-12 h-12 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Thank You for Your Time!
            </h3>
            <p className="text-lg sm:text-xl text-white opacity-80 mb-6">
              We appreciate your participation. Have a fantastic evening!
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;