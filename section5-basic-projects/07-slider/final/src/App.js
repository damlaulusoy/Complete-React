import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App()
{
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0); //belirli indexteki kişiyi göstermek istiyoruz.

    useEffect(() =>
    {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() =>
    {
        let slider = setInterval(() =>
        {
            setIndex(index + 1);
        }, 5000);

        return () =>
        {
            clearInterval(slider);
        };
    }, [index]);

    //javascriptten sonra html yazmak için return ile başlanır.
    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className="section-center">
            {
                people.map((person, personIndex) =>
                {
                    const {id, image, name, title, quote} = person;

                    let position = 'nextSlide'; //for css slide
                    if (personIndex === index)
                    {
                        position = 'activeSlide';
                    }
                    //akttif slayt 0. index ise, sol tarafta bir şey görülmeyecek.
                    // Bağlamak için index = 0 ise, soldaki slaytı sonuncu indekse sahip kişiyi atarız.
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1))
                    {
                        position = 'lastSlide';
                    }

                    //inner javascriptten sonra inner html yazmak için yine return ile başlanır.
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img"/>
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon"/>
                        </article>
                    );
                })
            } {/*const {id, image, name, title, quote} buradaki değerlerle işim bittiği için kıvırcığı kapattım*/}

                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    );
}
export default App;
