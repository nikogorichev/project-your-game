import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CARD } from "../../redux/actionTypes/cardsAT";
import QuestionPole from "../QuestionPole/QuestionPole";
import styles from "./GamePole.module.css";
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

    <div className={styles.vse}>
    <div className= {styles.all}>
    <div>Phase3</div>
    <div>Ерунда</div>
    <div>Elbrus name</div>
    <div>!Типаа смешно</div>
    <div>Животные</div>
    </div>
    <div className={styles.qu}>
    <div className={styles.theme} >

      {cards.filter(el => el.id_theme === 1).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className={styles.theme}>
     
      {cards.filter(el => el.id_theme === 2).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className={styles.theme}>
      
      {cards.filter(el => el.id_theme === 3).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className={styles.theme}>
     
      {cards.filter(el => el.id_theme === 4).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    <div className={styles.theme}>
       
      {cards.filter(el => el.id_theme === 5).map(el => <QuestionPole key={el.id} card={el} />)}
    </div>
    </div>
    </div>
    </>
 
  );
};

export default GamePole;
