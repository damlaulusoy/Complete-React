import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
    //kaçıncı indexteki kişi olacak? Başlangıçta 0. indexteki kişi gelir. yani "susan smith"
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index]; //belirli indexteki kişinin özelliklerini tanımlarım.

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) { //butona basıldığında mevcut indexe eşit değer gelirse bir sonrakini çağırsın.
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    const checkNumber = (number) => {
        if (number > people.length - 1) { //next person toplam kişi sayısından büyükse başlangıç indexe döndürür.
            return 0;
        }
        if (number < 0) { //prev person'un indexi 0'dan küçükse(olamaz böyle bir şey) sonuncu sıradaki indexi döndürsün.
            return people.length - 1;
        }
        return number;
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight/> {/*resmin sol üst tarafına civcivli bir icon ekledik.*/}
                </span>
            </div>

            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
