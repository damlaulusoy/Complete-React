import React, {useState, useEffect} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth); //sayfanın genişliğini default değer olarak verdik.

    //size değerini güncelleyen fonksiyon.
    const checkSize = () => {
        setSize(window.innerWidth); //setSize => hem size önce renderi tetikler, sonra size değişkenini günceller.
    };

    // sayfanın her boyutunu değiştirdiğimde bellekte tutulan bir sürü eventlistener'ımız olacak.
    // belleke yük binmemesi için bu useEffect'in 1 kere çalışması gerekiyor.
    useEffect(() => {
        console.log('useEffect');
        //her sayfa boyutu değiştiğinde(resize olduğunda), checkSize fonksiyonu çalışacak.
        window.addEventListener('resize', checkSize);
        return () => { //useEffect kullanıyorsak, İSTEĞE BAĞLI return ile fonksiyon döndürebiliriz! :)
            console.log('cleanup');
            window.removeEventListener('resize', checkSize); //eventleri işimiz bitince bellekten temizleriz! :)
        };
    }, []); //yukarıdaki cleanup yerine, soldaki gibi yalnızca boş bir array dependency ekleyebiliriz.
    console.log('render');
    return (
        <>
            <h1>window</h1>
            <h2>{size} PX</h2>
        </>
    );
};

export default UseEffectCleanup;
