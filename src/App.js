import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { Food } from './pages/food';
import { Login } from './pages/login';
import { About } from './pages/about';
import { Profile } from './pages/profile';
import { Footer } from './components/footer';
import { Error } from './pages/error';

function App() {
  return (
    <div className="App bg-dark p-2">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/food">
            <Route default path="" element={<Food type="all" />} />
            <Route path="breakfast" element={<Food type="breakfast" />} />
            <Route path="lunch" element={<Food type="lunch" />} />
            <Route path="dinner" element={<Food type="dinner" />} />
            <Route path="veg" element={<Food type="veg" />} />
            <Route path="nonveg" element={<Food type="nonveg" />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ HashRouter>
    </div>
  );
}

export default App;
