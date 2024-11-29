import React, {useState, useEffect} from 'react';

const Navigation = () => {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth])

    return (
        <nav className='bg-black text-white flex h-20 justify-items-center items-center'>
            <h1 className='flex flex-grow text-5xl w-4/5'>Noodle</h1>
            <div className='w-1/5'>
                {isAuth ? <a className='text-3xl p-5 justify-items-center' href='/'>Home</a>: null}
                {isAuth ? <a className='text-3xl p-5 justify-items-center' href='/logout'>Logout</a> :<a href='/login'>Login</a>}
                          <a className='text-3xl p-5 justify-items-center' href="/forum">Forum</a>
            </div>
        </nav>
    )
}

export default Navigation;