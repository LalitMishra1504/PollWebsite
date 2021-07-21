import './App.css';
import Home from './Components/Home';
import UserData from './Components/UserData';
import {Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import SinglePoll from './Components/SinglePoll';
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
     <Route exact path="/singlepoll/:_id">
     <SinglePoll/>
     </Route>
    </>
  );
}

export default App;
