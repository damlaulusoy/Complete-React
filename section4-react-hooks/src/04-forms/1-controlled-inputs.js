import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () =>
{
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        // submit butonuna basıldığında varsayılan davranış neyse onu engeller. Bu form
        // verileriyle kendimiz ilgileneceğiz.
        // yoksa butona basınca sayfa yenilenir(F5'e basılmış gibi), bizim işlem gerçekleşmez.
        // butona basınca artık sayfa yenilenmeyecek.
        e.preventDefault();

        // eklenecek kişiyi people listesinde tutmak istiyoruz. Ancak boş firstName veya boş email varsa eklemesin.
        if (firstName && email) // if (firstName !== '' && email !== '') => hiçbir fark yok.
        {
            // JS6 ile birlikte aşağıdaki object içerisine {firstName: firstName, email: email} yazmamıza gerek kalmadı.
            // Oluşturulacak objenin soldaki KEYinin ismi, :'dan sonra firstName ismi neyse onunla aynı otomatik oluşur.
            // aşağıda unique bir id oluşturmak için şu an ki tarih ve saat bilgisini id olarak kullandık.
            const person = {id: new Date().getTime().toString(), firstName, email};
            console.log(person);

            //setPeople((people) parametresi, mevcut olan people'u elimizde tutuyoruz, mevcut people datasını koruyoruz.
            //ancak aşağıdakini yapmak yerine setPeople([...people, person]) dememiz de yeterli olacaktı.
            //onun yerine bunu yapma sebebimiz aşağıdaki bu farklı yoğurt yiyişe aşina olmak.
            setPeople((people) =>
            {
                return [...people, person];
            });
            //ekledikten sonra people harici firstName ve email değişkenleri temizlemek önemli :)
            setFirstName('');
            setEmail('');
        }
        else
        {
            console.log('empty values');
        }
    };
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name : </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={firstName} //kambersiz düğün, "onChange"siz "value" olmaz.
                            onChange={(e) => setFirstName(e.target.value)}
                            //input'ta değişiklik olduğunda firstName'e e.target.value yani yazılan değer atanır.
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email : </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit'>add person</button>
                </form>

                {/*Html kodu altında JS kullanmak için {} açılır.*/}
                {
                    people.map((person, index) =>
                    {
                        const {id, firstName, email} = person;
                        return (
                            <div className='item' key={id}>
                                <h4>{firstName}</h4>
                                <p>{email}</p>
                            </div>
                        );
                    })
                }
            </article>
        </>
    );
};

export default ControlledInputs;
