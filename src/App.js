// Import Stylesheet
import './styles/App.css';

// Import Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import NavBar from './components/NavBar';

// Import Pages
import Home from './pages/Home';
import FoodNearYou from './pages/FoodNearYou'; 
import Form from './pages/Form';
import FormCompletion from './pages/FormCompletion'
import NotFound from './pages/NotFound';

// -----------------
// React App
// -----------------

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar /> {/* Navbar is always going to show as it's not under Switch component. This is here for every single route. */}
        <div className="content">
          <Routes> {/* Switch component make sures only one route shows at any one time. */}
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/food-near-you" element={<FoodNearYou />}> </Route>
            <Route path="/form" element={<Form />}> </Route>
            <Route path="/formComplete" element={<FormCompletion />}> </Route>
            <Route path="*" element={<NotFound />}> </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
