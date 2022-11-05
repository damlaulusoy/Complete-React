import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () =>
{
    // name,email,age gibi değişkenler çoğaldıkça en temiz yol olarak aşağıdaki gibi person objesi tanımlamalıyız.
    // Yoksa ÇORBA olur. [name, setName], [mail, setMail], [age,setAge] => ÇORBA
    const [person, setPerson] = useState({firstName: '', email: '', age: ''});
    const [people, setPeople] = useState([]);

    const handleChange = (e) =>
    {
        //aşağıdaki <input type id name value> vardı. Oradaki name'i e.target.name ile çağırıyoruz.
        //her bir inputun bir ismi olmalı, ona ne isim verdiysem öyle çağırmalıyım best practise'de ! :)
        const inputName = e.target.name;
        const inputValue = e.target.value;

        // Spread operatoru ile ... state içerisindeki person değerleri kopyalanır.
        // Sonra da girilen input ismi ne ise, [key: value] şeklinde, girilen value birlikte yazılarak güncellenir.
        setPerson({...person, [inputName]: inputValue});
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (person.firstName && person.email && person.age)
        {
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople([...people, newPerson]); //state'deki mevcut people arrayini kopyalayarak yeni insan ekliyoruz.
            setPerson({firstName: '', email: '', age: ''}); //listeye ekledikten sonra temizliyoruz.
        }
    };
    return (
        <>
            <article className='form'>
                <form>  {/*artık submit butonunu form içerisinden kaldırıyoruz.*/}
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name : </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={person.firstName}
                            onChange={handleChange} // bu satırda setPerson yazmıyoruz. mis gibi handleChange metotu var
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email : </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={person.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>Age : </label>
                        <input
                            type='number'
                            id='age'
                            name='age'
                            value={person.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmit}> {/*butona onClick geldi*/}
                        add person
                    </button>
                </form>
            </article>
            <article>
                {people.map((person) => {
                    const {id, firstName, email, age} = person;
                    return (
                        <div key={id} className='item'>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    );
                })}
            </article>
        </>
    );
};

export default ControlledInputs;
