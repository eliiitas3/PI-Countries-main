import './App.css';
import Home from './Components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/landingpage';
import CreateAct from './Components/Create/CreateActivity';
import CountryDetails from './Components/Home/Cards/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/countries' element={<Home/>}/>
        <Route exact path='/create' element={<CreateAct/>}/>
        <Route exact path='*' element={<h1>Error route not found</h1>}/>
        <Route exact path='/countries/:id' element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
