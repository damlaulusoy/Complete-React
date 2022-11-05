import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  //people değişkeni, default/varsayılan değer olarak 'data'ya eşitlenir.
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        {/*data listesinde kaç kişi varsa onu gösteririz.*/}
        <h3>{people.length} birthdays today</h3>

        {/*people adında bir prop tanımlarız ve yukarıdaki people değişkenine eşitleriz*/}
        <List people={people} />

        {/*setPeople([]) metotu parametre aldığı için öncesinde inline spread function eklendi.*/}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
