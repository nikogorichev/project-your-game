import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const QuestionPole = ({ card }) => {
  const [modalActive, setModalActive] = useState(false);
  const [status, setStatus] = useState(false);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const addAnswer = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <a className="waves-effect waves-light btn">{card.price}</a>
    </>
  );
};

export default QuestionPole;
