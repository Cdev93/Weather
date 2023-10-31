import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home";
import CityDetailsDisplay from "./screens/CityDetails";
import './styles/globalStyleSheet.css';
import NotFoundResult from "./screens/NotFound";


function App() {
 
 
  
  return (
  <Router>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/CityDetails/:cityName" Component={CityDetailsDisplay}></Route>
        <Route path="/NotFound" Component={NotFoundResult}></Route>
      </Routes>
  </Router>
   
  )
}

export default App
