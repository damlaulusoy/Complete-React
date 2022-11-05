import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];
let allCategories = items.map((item) => item.category); //tüm menu kategorileri getirildi.
console.log(allCategories);

// Tutulan tüm menu kategorileri unique hale getirildi.
// Set benzersiz değerleri tutan bir JavaScript nesnesidir. Türkçe anlamı Matematikteki kümedir.
allCategories = new Set(allCategories); // {'breakfast', 'lunch', 'shakes'}
console.log(allCategories);

//tüm categoriler ... ile kopyalanır ve 'all' string'inin devamına eklenir.
allCategories = ['all', ...allCategories]; //['all', 'breakfast', 'lunch', 'shakes']
console.log(allCategories);

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all')
        {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">

                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>

                <Categories categories={categories} filterItems={filterItems}/>  {/*Categories component*/}
                <Menu items={menuItems}/> {/*Menu component*/}
            </section>
        </main>
    );
}

export default App;
