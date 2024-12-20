import {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "./navigation";


const Home = () => {
     const [message, setMessage] = useState('');
     useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
         (async () => {
           try {
             const {data} = await axios.get(   
                            'http://localhost:8000/home/', {
                             headers: {
                                'Content-Type': 'application/json'
                             }}
                           );
             setMessage(data.message);
          } catch (e) {
            console.log('not auth')
          }
         })()};
     }, []);
     return (
          <>
          <Navigation/>
          <div className="form-signin mt-5 text-center">
            <h3>Hi {message}</h3>
          </div>
          </>
      )
}

export default Home;