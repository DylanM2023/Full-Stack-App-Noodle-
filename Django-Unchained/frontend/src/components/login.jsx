import axios from 'axios'
import {useState} from "react"

const Login = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const submit = async e => {

        e.preventDefault();

        const user = {
            username : username,
            password : password
        };

        const {data} = await
                        axios.post('http://localhost:8000/token/',
                        user, {headers:
                            {'Content-Type': 'application/json'}},
                            {withCredentials: true});
        
        localStorage.clear();

        localStorage.setItem('access_token', data.access);

        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

        window.location.href='/'
    }

    return(
        <div className='flex flex-col'>
            <form  className=' justify-items-center object-center py-28' onSubmit={submit}>
                <div >
                    <h3 className='p-2 text-3xl'>Sign in</h3>
                    <div>
                        <h1>Username: Dylan Password: 1234</h1>
                        <label>Username</label>
                        <input placeholder='Enter Username' name='username' type='text' value={username} required onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input placeholder='Enter Password' name='password' type='text' value={password} required onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type = 'submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;