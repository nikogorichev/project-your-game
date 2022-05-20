import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CARD } from "../../redux/actionTypes/cardsAT";
import QuestionPole from "../QuestionPole/QuestionPole";

const GamePole = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((store) => store.cards);
  useEffect(() => {
    fetch("/card")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ADD_CARD, payload: data }));
  }, []);
  return (
    <div className="row">
      {cards.map(el => {
        return <QuestionPole key={el.id} card={el} />;
      })}
    </div>
  );
};

export default GamePole;
