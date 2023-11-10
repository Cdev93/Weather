import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import './styles/globalStyleSheet.css';



function App() {
 
 
  
  return (
  <Router>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
      </Routes>
  </Router>
   
  )
}

export default App
