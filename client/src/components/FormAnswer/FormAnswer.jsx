import React from 'react';


const FormAnswer = ({addAnswer}) => {
    return (
        <form onSubmit={addAnswer}>
            <input type="text" name="answer" placeholder="Введите ответ"/>
            <button type="submit">Проверить</button>
        </form>
    );
};

export default FormAnswer;
