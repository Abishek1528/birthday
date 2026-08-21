import React from 'react';
import './NextButton.css';

const NextButton = ({ onClick, label = 'Next', disabled = false }) => {
  return (
    <button
      className="next-button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default NextButton;
