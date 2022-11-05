import React, {useState} from 'react';
import data from './data';

function App()
{
    const [count, setCount] = useState(0); //count => paragraph count(paragraf sayısı)
    const [text, setText] = useState([]);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // console.log(`count: ${count}`)
        // console.log(`typeofcount: ${typeof(count)}`)
        let amount = count;
        if (count <= 0) { //paragraf sayısı negatif bir sayı seçilirse onu default olarak 1 seçsin.
            amount = 1;
        }
        if (count > 8) {
            amount = 8;
        }
        // console.log(data);

        //{a,b,c,d,e} arrayi için:
        // 0 => a'yı ilk indexi işaret eder, amount=1 ise => (0,1) => output = {'a'}
        // amount=2 ise => (0,2) => output = {'a', 'b'}
        // amount=3 ise => (0,3) => output = {'a', 'b', 'c'}
        // amount=4 ise => (1,4) => output = {'b', 'c', 'd'}
        //0,amount => amount'un olduğu index dahil değil. amount'un olduğu indexe kadar olan veriler alınır.
        setText(data.slice(0, amount));
    };

    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>paragraphs:</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))} //e.target.value türü stringdir. setCount int
                />
                <button className='btn'>generate</button>
            </form>
            <article className='lorem-text'>
            {
                text.map((item, index) =>
                {
                    return <p key={index}>{item}</p>;
                })
            }
            </article>
        </section>
    );
}

export default App;
