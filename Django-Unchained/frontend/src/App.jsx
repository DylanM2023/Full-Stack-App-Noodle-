import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/login';
import Home from './components/home';
import Forum from './components/forum';
import Logout from './components/logout';

function App () {

    return(
    <>
    <Router>
        <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route exact path = '/login' element = {<Login/>}/>
            <Route exact path = '/logout' element = {<Logout/>}/>
            <Route exact path = '/forum' element = {<Forum/>}/>
            <Route path = '*' element={<div>404 ERROR</div>}/>
        </Routes>
    </Router>
    </>
    )
}

export default App;