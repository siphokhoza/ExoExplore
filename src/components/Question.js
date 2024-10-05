import React from 'react';

const Question = ({ question, onAnswer }) => {
    return (
        <div>
            <h3>{question.question}</h3>
            {question.answers.map((answer, index) => (
                <button key={index} onClick={() => onAnswer(index)}>
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;


