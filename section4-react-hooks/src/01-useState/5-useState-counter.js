import React, {useState} from 'react';

const UseStateCounter = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const reset = () => {
        setValue1(0);
    };

    const complexIncrease = () => {
        setTimeout(() => {
             setValue2(value2 + 1);
            // setValue((prevState) => { //ard arda basınca olması için güncel önceki değeri tutmak gerekir.
            //     return prevState + 1;
            // });
        }, 2000);
    };

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value1}</h1>
                <button className='btn' onClick={() => setValue1(value1 - 1)}>
                    decrease
                </button>
                <button className='btn' onClick={reset}>
                    reset
                </button>
                <button className='btn' onClick={() => setValue1(value1 + 2)}>
                    increase
                </button>
            </section>

            <section style={{margin: '4rem 0'}}>
                <h2>more complex counter</h2>
                <h1>{value2}</h1>
                <button className='btn' onClick={complexIncrease}>
                    increase later
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
