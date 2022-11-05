import React, {useState} from 'react';

const UseStateObject = () => {
    //varsayılan/default "person" olarak peter adındaki, 24 yaşındaki adama eşitliyoruz.
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    });
    // EĞER ÇOK FAZLA GÜNCELLEME YAPILACAKSA yukarıdaki person objesi parçalara birçok hooks'a ayrılabilir.
    // const [name,setName] = useState('peter')
    // const [age,setAge] = useState(24)
    // const [message,setMessage] = useState('random message')

    const changeMessage = () => {
        // Yalnızca kişinin "message" özelliğini değiştirmek istersek varsayılan "name" ve "age" değerlerini korumalıyız.
        // Hızlıca yapmak için "...person" yazarız. Bu şu anlama gelir: useState'deki name, age ve message değerlerini kopyalar.
        // Ancak biz message değerini değiştirmek istiyoruz. O halde "...person," dan sonra message değişkenini ekleriz.

        // setPerson({...person, message: 'hello world'});
        // yukarıdaki bu anlama gelir. setPerson({name: 'peter', age: 24, message: 'random message', message: 'hello world'});

        // setMessage('hello world') // Adamın peter ismi, 24 yaşı uçtu yerine hello world stringi geldi. Hatalı kullanım.

        //Eğer personun tüm değerlerini/özelliklerini değiştirmek istersek:
        setPerson({name: 'insan', age: 60, message: 'Ölmüşüz haberimiz yok'});
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className='btn' onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
