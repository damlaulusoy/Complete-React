import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

// App.js'de {...question} props'unu yolluyoruz. {...question} da id, title, info değerlerini içerir.
// Aşağıda title ve info'yu alırız.
const Question = ({title, info}) =>
{
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>

                {/*butona basılınca showInfo true ise false, false ise true yapar.*/}
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>

                    {/*showInfo true ise buton olarak - iconu, else durumunda (:) yani false ise + iconu gözüksün.*/}
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {/*+ butonuna basılınca showInfo=true olur.*/}
            {/*showInfo true ise info verisini p tagi içerisinde gösteririz.*/}
            {showInfo && <p>{info}</p>}
        </article>
    );
};

export default Question;
