import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]); //başlangıçta boş array atanır. hiç user yok.

    const getUsers = async () => {
        const response = await fetch(url);
        const responseUsers = await response.json();
        setUsers(responseUsers);
        console.log(responseUsers);
    };
    useEffect(() => {
        getUsers(); //sayfa UI'ı hazır, verileri bu UI renderı işleminden sonra çekerim.
    }, []); //[] ile useEffect 1 kez çalışmalı. Yoksa sonsuz döngüye girer.
    // UseEffect => getUsers => setUsers => render => useEffect => getUsers bla bla.
    return (
        <>
            <h3>github users</h3>
            <ul className='users'>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectFetchData;
