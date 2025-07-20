import React, { useState } from "react";
import "./FlashCard.css";
import { questions } from "../constant";

const FlashCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }
  return (
    <div className="body-class flashcard">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FlashCard;
