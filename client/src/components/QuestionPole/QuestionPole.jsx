import React from 'react';

const QuestionPole = ({card}) => {
  // console.log(card);
  return (
    <div className="col s12 m6" >
    <div className="card brown lighten-4">
        <div className="card-content black-text">
          <span className="card-title">Phase №{card.id}</span>
          <p>Name :{card.question}</p>
        </div>
      </div>
     
    </div>
  );
}

export default QuestionPole;

