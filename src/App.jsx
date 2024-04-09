import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/NavBar/Navpages/Home';
import About from './pages/NavBar/Navpages/About';
import NotFound from './pages/NavBar/Navpages/NotFound';
import User from './pages/NavBar/Navpages/User';
import Header from './pages/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
