import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const questions = [
    {
        question: "What is an exoplanet?",
        answers: [
            "A planet within our solar system",
            "Any planet beyond our solar system",
            "A planet that orbits a black hole",
            "A planet made of ice"
        ],
        correctAnswer: 1,
        image: require('../assets/Q1.jpeg')
    },
    {
        question: "How many exoplanets have been confirmed so far?",
        answers: [
            "About 1,000",
            "More than 5,600",
            "Over 10,000",
            "Around 2,500"
        ],
        correctAnswer: 1,
        image: require('../assets/Q2.jpeg')
    },
    {
        question: "What is the closest known exoplanet to Earth?",
        answers: [
            "K2-18b",
            "Proxima Centauri b",
            "Kepler-1649c",
            "WASP-18b"
        ],
        correctAnswer: 1,
        image: require('../assets/Q3.jpeg')
    },
    {
        question: "Which type of exoplanets are characterized by rocky surfaces?",
        answers: [
            "Gas giants",
            "Neptunians",
            "Super-Earths",
            "Terrestrial planets"
        ],
        correctAnswer: 3,
        image: require('../assets/Q4.jpeg')
    },
    {
        question: "What can exoplanets be dominated by?",
        answers: [
            "A. Water or ice",
            "B. Iron or carbon",
            "Both A and B",
            "None of the above"
        ],
        correctAnswer: 2,
        image: require('../assets/Q5.jpeg')
    },
    {
        question: "What are rogue planets?",
        answers: [
            "Planets that orbit stars",
            "Free-floating planets untethered to any star",
            "Planets that are habitable",
            "None of the above"
        ],
        correctAnswer: 1,
        image: require('../assets/Q6.jpeg')
    },
    {
        question: "Which technique has improved the discovery of exoplanets?",
        answers: [
            "Microlensing",
            "Gravitational wave detection",
            "Light curve analysis",
            "Spectroscopy"
        ],
        correctAnswer: 2,
        image: require('../assets/Q7.jpeg')
    },
    {
        question: "What are the primary types of exoplanets identified by scientists?",
        answers: [
            "Rogue, habitable, and gas giants",
            "Terrestrial, super-Earth, gas giant, and Neptunian",
            "Rocky, icy, and gaseous",
            "None of the above"
        ],
        correctAnswer: 1,
        image: require('../assets/Q8.jpeg')
    },
    {
        question: "What is another name for an exoplanet?",
        answers: [
            "Outer planet",
            "Extrasolar planet",
            "Rogue planet",
            "Binary planet"
        ],
        correctAnswer: 1,
        image: require('../assets/Q9.jpeg')
    },
    {
        question: "What significant question does the study of exoplanets help address?",
        answers: [
            "What is the nearest star to Earth?",
            "What is the composition of the Earth?",
            "Are we alone in the Universe?",
            "What are the largest planets in the Solar System?"
        ],
        correctAnswer: 2,
        image: require('../assets/Q10.jpeg')
    },
    {
        question: "When was the first exoplanet discovered orbiting a star like our Sun?",
        answers: [
            "1985",
            "1995",
            "2000",
            "2010"
        ],
        correctAnswer: 1,
        image: require('../assets/Q11.jpeg')
    },
    {
        question: "Which type of exoplanet is characterized by being larger than Earth but smaller than Jupiter?",
        answers: [
            "Super-Earth",
            "Hot Jupiter",
            "Mini-Neptune",
            "Gas Giant"
        ],
        correctAnswer: 0,
        image: require('../assets/Q12.jpg')
    },
    {
        question: "What are 'hot Jupiters'?",
        answers: [
            "Gas giants that orbit far from their stars",
            "Large exoplanets that orbit very close to their host stars",
            "Rocky planets with high temperatures",
            "Icy worlds far from their star"
        ],
        correctAnswer: 1,
        image: require('../assets/Q13.jpeg')
    },
    {
        question: "What does the study of exoplanets help scientists understand about our own Solar System?",
        answers: [
            "The exact age of the Sun",
            "How planets in our Solar System formed and evolved",
            "The possibility of colonizing Mars",
            "The future of the Earth"
        ],
        correctAnswer: 1,
        image: require('../assets/Q14.jpeg')
    },
    {
        question: "How many confirmed exoplanets have scientists discovered to date?",
        answers: [
            "Over 1,000",
            "More than 5,000",
            "Approximately 10,000",
            "About 15,000"
        ],
        correctAnswer: 1,
        image: require('../assets/Q15.jpeg')
    },
    {
        question: "Which type of planets may have conditions suitable for stable water?",
        answers: [
            "Super-Earths",
            "Hot Jupiters",
            "Rocky planets",
            "All of the above"
        ],
        correctAnswer: 3,
        image: require('../assets/Q16.jpeg')
    }
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleAnswer = (selectedAnswerIndex) => {
        if (selectedAnswerIndex === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect.");
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setIsFinished(true); // End of quiz
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsFinished(false);
        setFeedback(""); // Reset feedback
    };

    return (
        <div>
            {isFinished ? (
                <div>
                    <h2>Your Final Score: {score} out of {questions.length}</h2>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    {questions.length > 0 ? (
                        <>
                            {/* Display the current question's image */}
                            <div>
                                {questions[currentQuestionIndex].image && (
                                    <img
                                        src={questions[currentQuestionIndex].image}
                                        alt="Exoplanet"
                                        className="question-image" // This uses the updated class
                                    />
                                )}
                            </div>
                            <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
                            <Score score={score} />
                            {feedback && <p className="feedback">{feedback}</p>} {/* Display feedback */}
                        </>
                    ) : (
                        <p>Loading questions...</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Quiz;