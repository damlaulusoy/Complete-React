import React, {useState, useEffect} from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {/*butona basılınca show false ise true olacak, show true ise false olacak.*/}
            <button className='btn' onClick={() => setShow(!show)}> show/hide </button>

            {/*show true ise Item componenti çalışacaktır.*/}

            {show && <Item/>}
        </>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => { //useEffect return dönebiliyordu isteğe bağlı.
            window.removeEventListener('resize', checkSize); //event ekledikten sonra bellekten temizlesin.
        };
    }, []);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    return (
        <div style={{marginTop: '2rem'}}>
            <h1>Window</h1>
            <h2>size: {size}</h2>
        </div>
    );
};

export default ShowHide;
