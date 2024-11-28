import React, {useState, useEffect} from 'react';

const Navigation = () => {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth])

    return (
        <nav>
            {isAuth ? <a href='/'>Home</a>: null}
            {isAuth ? <a href='/logout'>Logout</a> :<a href='/login'>Login</a>}
            <a href="/forum">Forum</a>
        </nav>
    )
}

export default Navigation;