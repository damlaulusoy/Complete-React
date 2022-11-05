import React from 'react';

//bu List adında bir component ve App.js'den people prop'unu parametre olarak aldı.
const List = ({people}) =>
{
    return (
        <>
        {
            //prop'dan gelen tüm datayı dolaşırız, her bir data objesi, person olarak isimlendirildi.
            people.map((person) =>
            {
                //her yeni person dolaşıldığında, her seferinde id, name, age, image değişkenleri tanımlanır
                // ve ilgili personun bilgileri bu değişkenlere eşitlenir.
                const {id, name, age, image} = person;
                return (
                    // console'da warning vermemesi için en üst html parçasına key={id} eklenir.
                    <article key={id} className='person'>

                        {/*name, image ve age'in article'daki konumu bize bağlı.*/}
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })
        }
        </>
    );
};

export default List;
