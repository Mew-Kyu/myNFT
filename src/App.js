// import logo from './logo.svg';
import Home from 'containers/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'containers/404';
import Login from 'containers/Login';
import About from 'containers/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<Login />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
