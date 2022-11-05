import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
    // başlangıçta verileri okumadan önce loading true(sayfa yükleniyor yazısı) olmalı.
    // Veriyi arka planda okuduktan sonra loading false olmalı
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([]) //apiden gelen verilerle bu tours arrayi doldurulacak.

    useEffect(() => {
        fetchTours();
    }, [])

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            setLoading(false); //verileri aldığımıza göre loading yazısını yazdırmayı iptal edebiliriz.
            setTours(responseData); //apiden gelen datayı/verileri tours arrayine eşitleriz.
        } catch (error) {
            setLoading(false); //hata olursa loading yazısını kaldır, yerine console'da hata yazdırt.
            console.log(error);
        }
    }

    const removeTour = (id) => {
        //silinecek belirli bir id'ye sahip tur HARİÇ, tüm tour'lar getirilir. Id'ye göre filtreleme yapıldı.
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    if (loading) {
        return (<main>
            <Loading/>
        </main>)
    }

    //hiç tur listelenmiyorsa
    if (tours.length === 0) {
        return (<main>
            <div className='title'>
                <h2>no tours left</h2>

                {/*Turları tekrar getirmek için api'ye istek atan ilgili metotu çağıran bir refresh butonu koyarız.*/}
                <button className='btn' onClick={() => fetchTours()}>
                    refresh
                </button>
            </div>
        </main>)
    }

    return (<main>
        <Tours toursProp={tours} removeTourProp={removeTour}/>
    </main>)
}

export default App
