import React, {useState, useEffect} from 'react';
// by default runs after every re-render/ useEffect default olarak her render işleminden sonra çalışır.
// cleanup function
// second parameter

//öNEMLİ:
// useEffect componentlerin dışında yapılan bir çalışmadır.
// Sayfadaki görsel arayüz yüklendikten sonra, kullanıcı hareketleriyle oluşan,
// Veri getirmek, event(olay) dinlemek, youtubeda bir kanala abone olmak, birini takip etmek, sepete eklemek vb.
// yukarıdaki örnek işlemler her daim render işleminden sonra çalışır.


const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    // her render işleminden sonra bu işlem gerçekleşecek.
    // useEffect fonksiyonu TÜM KOD ÇALIŞTIKTAN SONRA çalışacak.
    // Önce altta olmasına rağmen console.log('1- Bu RENDER); print eder. Çünkü useEffect foksiyonunun içerisinde değildir.
    useEffect(() => {
        console.log('2- useEffect fonksiyonu render işlemi bittikten sonra BUTONA BASILARAK çalıştı.');
        if (value > 0) { //sayfa ilk yüklendiğinde de useEffect çalışacak. Ancak başlık butona basılana kadar değişmeyecek.
            document.title = `New Messages(${value})`; //sayfanın başlığında civcili bir useEffect yaratmış olalım.
        }
    }); //eğer useEffecte 2. parametre olarak [] eklersekyani "}, []);"
    // o zaman yalnızca useEffect ne olursa olsun 1 kere çalışacaktır.
    // çünkü [] içerisinde herhangi bir değer olmadığı için useEffect hiçbir değere bağımlı değildir. Bir daha çalışmaz.
    // eğer 2. paramtre olarak [value] eklenirse, useEffect artık value değerine bağımlıdır.
    // value değiştikçe useEffect çalışır

    console.log('1- Bu RENDER componenti içerisindeki bir log dur.');
    return (
        <>
            <h1>{value}</h1>

            {/*useState'in çalışma mantığından birisi RENDER'ı tetiklemek.*/}
            {/*her render tetiklendikten hemen sonra useEffect metotu çalışır. */}
            {/*Dolayısıyla console'da bir log akışı olur.*/}
            <button className='btn' onClick={() => setValue(value + 1)}> {/*butona tıklanınca değer 1 artsın.*/}

                click me
            </button>
        </>
    );
};

export default UseEffectBasics;
