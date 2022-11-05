import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false); //isError = false => hata yok demek
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch(url).then((resp) => {
            if (resp.status >= 200 && resp.status <= 299) { //veri getirme işlemi başarılı.
                return resp.json();
            } else { //status 400, 404 ya da 500 ise => test etmek için url'in sonuna bir harf konulabilir. QuincyLarsonS
                setIsLoading(false);
                setIsError(true);
                throw new Error(resp.statusText); //throw new Error => yeni bir hata fırlat dedik.
            }
        })
        .then((user) => {
            console.log(user); //user'ın logindeki değeri çağıracağız. Bu değer isme karşılık geliyor.
            const loginName = user.login;
            setUser(loginName); //kullanıcı adını güncelliyorum.
            setIsLoading(false); //datayı aldığımıza göre loading(sayfa yükleniyor) yazısını kaldırabiliriz.
        })
        .catch((error) => console.log(error));
    }, []); //dependencies=deps=bağımlılık => tek bir istek atmak istiyorum. o yüzden []

    //eğer isLoading true ise yükleme işlemi devam ediyor demektir. Başlıkta bunu belirtiriz.
    //Bu noktada doğal olarak user gösterilmez.
    if (isLoading) //isLoading => isLoading === true
    {
        return (
            <div>
                <h1>Sayfa yükleniyor...</h1>
            </div>
        );
    }

    //eğer yükleme işlemini bittikten sonra bir hata varsa başlıkta bunu belirtiriz.
    //Bu noktada doğal olarak user gösterilmez.
    if (isError) {
        return (
            <div>
                <h1>Bir hata var...</h1>
            </div>
        );
    }
    //Eğer isLoading = false ve isError = false ise yani yükleme işlemi ve error yok ise kullanıcıyı gösterebiliriz.
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default MultipleReturns;
