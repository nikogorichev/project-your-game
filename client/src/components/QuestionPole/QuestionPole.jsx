import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAnswer from "../FormAnswer/FormAnswer";
import Modal from "../Modal/Modal";
import style from "./QuestionPole.module.css"


const QuestionPole = ({ card }) => {
  const [modalActive, setModalActive] = useState(false);
  const [status, setStatus] = useState(false);
  const { users } = useSelector((store) => store.users);

  const dispatch = useDispatch();

  const addAnswer = (event) => {
    event.preventDefault();
    if (card.answer === event.target.answer.value) {
      dispatch({type: 'PLUS_POINTS', payload:card.price})
    }
    else {
      dispatch({type: 'MINUS_POINTS', payload:card.price })
    }
    
  };

  const changeStatus = (event) => {
    setStatus(true);
    
  };

  return (
    <div>

      {status ? <button disabled
        className={status ? style.first : style.second}
        onClick={() => changeStatus(setModalActive(true))}
      >
        {card.price}
      </button> : 

      <button 
        className={status ? style.first : style.second}
        onClick={() => changeStatus(setModalActive(true))}
      >
        {card.price}
      </button>}
      
      <Modal active={modalActive} setActive={setModalActive}>
        {card.question}
        <FormAnswer addAnswer={addAnswer}/>
      </Modal>

    </div>
  );
};

export default QuestionPole;
