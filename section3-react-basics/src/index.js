import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import {data} from './books'; //books.js demeye gerek yok. Aynı dizinde olduğu için ./ koyarız
import SpesificBook from './Book';

//1-Bu bir function component. Mutlaka function ismi Büyük harfle başlamalı.
function BookList() {
    return ( //2-Bir function component her zaman return dönmeli.
        <section className='bookList'>
        {
            data.map((book) => {
                return (
                    // img, title, author isimlerine sahip değişken ya da attribute normalde yok.
                    // Ancak Props ile çağırmak, erişebilmek için istediğimiz isimleri oluşturabiliriz..
                    // <Book img={img} title={title} author={author}>
                    //     <p>Lorem ipsum dolar sit amet consectetur adipisicing elit.</p>
                    // </Book>
                    // <Book key={book.id} bookProp={book}></Book> //burada bookprop adında bir prop property'si oluşturuyoruz.

                    //... => bu spread operatorudur, onemlidir, dikkatli kullanılmalıdır.
                    // Spread operatoru kullanarak book nesnesini yukarıdaki gibi
                    // backprop isminde bir prop olarak tanımlamaya gerek olmadan
                    // istenilen metotlarda direkt kullanılmasını sağlar.
                    <SpesificBook key={book.id} {...book}></SpesificBook>
                );
            })
        }
        </section>);
}



//3-Elementi ilgili html içerisindeki ilgili div içerisinde işlemek/render etmek için aşağıdaki komut kullanılır.
ReactDom.render(<BookList/>, document.getElementById('root'));
