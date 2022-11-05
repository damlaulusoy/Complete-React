import React from 'react';

const ErrorExample = () => {
    let title = 'random title';

    // Butona basıldığında bu metot çalışacak, console log'daki güncel title yazılacak. Ancak 'title' değeri güncellenmeyecek.
    // Bunu çözmek için useState kullanmalıyız. title değiştirildikten(güya) sonra Render edilmediği için değeri güncellenmez.
    const handleClick = () => {
        title = 'hello world';
        console.log(title); 
    };

    return (
        // React.Fragment div yerine kullanılmalıdır. Div kullanılırsa sonuç hatalı olacak.
        // Bir componentin birden çok element return etmesi için gereklidir.
        // Div'in altındaki element'leri child olarak gruplayabiliyorduk, burada da öyledir. ChildA, ChildB, vs ..
        // Bu linke kesinlikle bakılmalı: https://www.muratoner.net/react/react-fragment-nedir-ornekli-nasil-kullanilir
        <React.Fragment>
            <h2>{title}</h2>  {/* ChildA */}
            <button type='button' className='btn' onClick={handleClick}>Change Title</button>  {/* ChildB */}
        </React.Fragment>
    );
};

export default ErrorExample;
