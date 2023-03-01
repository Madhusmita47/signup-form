
import Header from './Components/Header';
import Signup from './Components/Signup';
import Login from './Components/Login'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  const heading="Mern"
  return (
    <Router>
      <Header title={heading} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
     
      
    </Router>
  );
}

export default App;
