import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CARD } from "../../redux/actionTypes/cardsAT";
import QuestionPole from "../QuestionPole/QuestionPole";

const GamePole = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((store) => store.cards);

  const {users} = useSelector((store) => store.users);
 
  const {points} = useSelector((store) => store.points);
  

  useEffect(() => {
    fetch("/card")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ADD_CARD, payload: data }));
  }, []);
  
  return (

    <>
    <h3>{users.name}, Ваш счет: {points}</h3>
    <div className="theme1">
      <h3>Phase3</h3>
      {cards.filter(el => el.id_theme === 1).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className="theme2">
      <h3>Ерунда</h3>
      {cards.filter(el => el.id_theme === 2).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className="theme3">
      <h3>Elbrus name</h3>
      {cards.filter(el => el.id_theme === 3).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className="theme4">
      <h3>!Типаа смешно</h3>
      {cards.filter(el => el.id_theme === 4).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className="theme5">
      <h3>Животные</h3>
      {cards.filter(el => el.id_theme === 5).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    
    </>
 
  );
};

export default GamePole;
