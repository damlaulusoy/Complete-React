import React from 'react';
//TRICK: rsf ile function component oluşturabiliriz.

// Book COMPONENT
const Book = (props) => { //3. props kullanmama yontemi: const Book = ({ img, title, author}) => {
    // const { img, title, author, children} = props; //2. props kullanma yontemi => this is bad idea :|
    const {img, title, author} = props; // yukarıda {...book} olarak buraya prop olarak gonderdik.

    const clickHandler = (author) => {
        alert(author);
    }

    return (<article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {/* 1-Eğer onClick metotu PARAMETRE ALMAYACAKSA
            onClick={clickHandler} şeklinde yazarsak tıklanınca çalışacaktır. Bir problem olmayacaktır.

            2-Eğer onClick metotu PARAMETRE ALACAKSA,
            onClick={clickHandler(author)} şeklinde yazarsak uygulama İLK ÇALIŞTIĞINDA bu fonksiyon çalışacaktır.
            Bizim istediğimiz yalnızca TIKLANINCA bu fonksiyon çalışsın. O yüzden aşağıdaki gibi yazılması gerekmektedir.

            onClick  yerine onMouseOver yazarsak mouse ile üzerine geldiğimizde ilgili metot çalışır.
            */}
        <button type="button" onClick={() => clickHandler(author)}>Click me!</button>


        {/*BookList içerisinde bir child var p tagiyle başlayan. Ona erişmek için props.children yazılır.*/}
        {/*{props.children}*/}

        {/*console.log html içerisinde bu şekilde çağırılır.*/}
        {/*{console.log(props)}*/}

        {/*aynı şekilde html içerisinde matematik işlemleri bu şekilde gerçekleştirilebilir.*/}
        {/*<p>{5 + 10}</p>*/}
    </article>)
}

export default Book;
