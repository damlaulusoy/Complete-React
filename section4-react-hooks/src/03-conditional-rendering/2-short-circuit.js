import React, {useState} from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false); //başlangıçta isError=false => yani error yok.

    return (
        <>
            {/***************************** Short-circuit Evaluation ******************************/}

            {/*Aşağıda ya text'i göster, ya da eğer text boşsa john doe'yu göster deriz.*/}
            <h1>{text || 'john doe'}</h1>

            {/*text dolu olduğunda h3 basılır.*/}
            {text && <h3>"text" değişkeni dolu olduğu koşulunda: bu yazıyı hep göreceksin...</h3>}

            {/*text dolu değilse h3 basılır.*/}
            {!text && <h3>"text" değişkeni boş olduğu koşulunda: bu yazıyı hep göreceksin...</h3>}

            {/***************************** Short-circuit Evaluation ******************************/}

            {/***************************** Ternary (Üçlü) Operator *******************************/}

            {/*setIsError(!isError) => buradaki !isError => isError true ise false, false ise true yapar.*/}

            <button className='btn' onClick={() => setIsError(!isError) }>toggle error</button>

            {/*Hata varsa yani isError=true ise <h1>in içerisindeki yazı görüntülenecek.*/}
            {isError && <h1>Hata</h1>}

            {/*Üçlü operator (ternancy) Burada ? if yani hata var ise, : => else => değilse, hata yoksa anlamı taşır.*/}
            {
                isError ? (<h2>hatasız kul olmaz...</h2>) :
                (
                <div>
                    <h2>hata yok</h2>
                </div>
                )
            }

            {/***************************** Ternary Operator **************************************/}

        </>
    );
};

export default ShortCircuit;
