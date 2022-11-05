import React from 'react';
import Tour from './Tour';

const Tours = ({toursProp, removeTourProp}) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {toursProp.map((tour) => {
                    // tüm tour özelliklerini(id, name, info, image, price) erişmek için {...tour} spread operatorunu kullanırız.
                    // her bir tour'u Tour adındaki componente atıp orada html kodlarını yazarız. Kodumuz dinamikleşmiş olur.
                    return <Tour key={tour.id} {...tour} removeTour={removeTourProp}/>;
                })}
            </div>
        </section>
    );
};

export default Tours;
