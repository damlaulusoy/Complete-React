import React, {useState} from 'react';

//prop'lar bir componentde kullanılan bir veriyi, kendisi bağlı başka component'de de kullabilmek için gerekli harika öğelerdir.
//Tourse dosyasında 15. satırda: return <Tour key={tour.id} {...tour} removeTour={removeTourProp}/>;
//yukarıdaki kodda, {...tour} aldığımız için id, image, info, name, price tüm bilgiler prop olarak aşağıda çağırılır.
//ayrıca "removeTour" adına sahip prop'unu aldığı için onu da aşağıda eklenir.
const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false); //başlangıçta readMore butonuna basılmamış kabul edilecek.
    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {/* Eğer ki readMore true(readMore butonuna basılınca true olabilir) ise => api'den gelen tüm info gözükür.*/}
                    {/* Eğer readMore false ise => api'den gelen infonun ilk 200 karakteri gözükür.*/}
                    {readMore ? info : `${info.substring(0, 200)}...`}

                    {/* setReadMore(!readMore) => Eğer readMore false ise true, true ise false yapar.*/}
                    {/* Buton yazısı => Eğer readMore true ise show less yazacak, false ise read more yazacaktır.*/}
                    <button onClick={() => setReadMore(!readMore)}> {readMore ? 'show less' : '  read more'} </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}> not interested</button>
            </footer>
        </article>
    );
};

export default Tour;
