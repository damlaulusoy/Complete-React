import React, {useState} from 'react'; //ilk hooks'umuz useState

// starts with use / Hooks'ların hepsi use ile başlıyor. useState, useEffect vs.
// component must be uppercase / component ismi büyük harfle başlamalı => 'UseStateBasics': OK, 'useStateBasics': NO
// invoke inside function/component body / useState fonksiyon içinde çağırılmalı.
// don't call hooks conditonally
// useState bir function'dır.

const UseStateBasics = () => {
     console.log("useState:", useState(5)); // useState(5) => 2 değer döndürür. İlki value = 5, ikincisi handler function = f
     const value = useState(5)[0];   //value: başlangıçtaki değerini(örnek olarak 5 sayısını girdik) tutar.
     const handler = useState(5)[1]; //handler: değeri kontrol eden, DEĞİŞTİREN, GÜNCELLEYEN bir function. setText şeklinde bir ismi olacak.
     console.log(`value: ${value}`);
     console.log(`handler: ${handler}`);

    //yukarıdaki value ve handler'ı şu şekilde kısaca tanımlayabiliriz. [value, handler]
    //ancak bir çok hooks olabileceği için isimleri anlamlı olmalıdır.
    // istenilen isim olabilir ancak value => color ise, handler fonksiyonunun adı => setColor olmalı.
    //text => value, setText => text'i güncelleyen function, useState => text'in başlangıç/default/varsayılan değeri
    const [text, setText] = useState('random title'); //ilk hooks useState

    const handleClick = () => {
        if (text === 'random title') { //text value'sunu kontrol ederiz.
            setText('hello world'); //setText, text değerini anında otomatik render ederek günceller.
        } else {
            setText('random title'); //default değere günceller.
        }
    };
    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type='button' className='btn' onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
