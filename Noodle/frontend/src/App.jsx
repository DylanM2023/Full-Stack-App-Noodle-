import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home";

function App() {

  return(
    <Router>
      <Routes>

        <Route exact path = '/' element={<Home/>}/>

        <Route path="*" element={<div>404 Wrong Page Bozos</div>}/>

      </Routes>
    </Router>



  )
}

export default App;