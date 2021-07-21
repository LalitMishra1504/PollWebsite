import './App.css';
import Home from './Components/Home';
import UserData from './Components/UserData';
import {Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route path="/userdata">
      <UserData/>
     </Route>
    </>
  );
}

export default App;
