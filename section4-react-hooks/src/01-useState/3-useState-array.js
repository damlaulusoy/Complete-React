import React from 'react';
import {data} from '../../data';

const UseStateArray = () => {
    //yukarıda import etmek yerine böyle React.useState şeklinde de kullanabiliriz
    const [people, setPeople] = React.useState(data); //people değişkenin varsayılan/default değeri olarak data arrayi'ni atıyoruz.

    const removeItem = (id) => {
        //silinmesi istenen id'ye sahip personu silmek diye bir şey yok, o id'ye sahip person'u dahil ETMEMEK diye bir şey var. :)
        let newPeople = people.filter((insan) => insan.id !== id);
        setPeople(newPeople);
        //2. yontem:
        // setPeople((oldPeople)=> {
        //     let newPeople = oldPeople.filter((person) => person.id !== id);
        //     return newPeople;
        // });
    };
    return (
        // <> => React.Fragment ve div ile aynı anlama geliyor. Ancak production'da fragment tercih edilmeli. <> geliştiriliyor hala.
        <>
            {
                people.map((person) =>
                {
                    const {id, name} = person;
                    return (
                        <div key={id} className='item'>
                            <h4>{id}</h4>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>remove</button> {/*spesifik bir kişiyi silmek için*/}
                        </div>
                    );
                })
            }
        {/* Inline functionda, onClick={setPeople([])} diye eklersek hata verir. Çünkü argüman kullandık ve parametre değeri [] girdik.
            eğer parametre, diğer deyimle argument gireceksek, ilgili function'un başına "() => " arrow fonksiyonunu eklemeliyiz.
            Böylece, uygulama çalıştığında bu metot çalışmaz, yalnızca butona basıldığında bu metot çalışır. => This is GOOD
            2. yontem olarak onClick={handleClick} şeklinde kullanılır. handleClick fonksiyonu içinde setPeople([]) yazılır.
            2. yontem "2-useState-basics" bölümünde yapıldı.*/}
            <button className='btn' onClick={() => setPeople([])}> {/*tüm milleti silmek için.*/}
                clear items
            </button>
        </>
    );
};

export default UseStateArray;
