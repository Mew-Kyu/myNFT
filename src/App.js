import Home from 'containers/Home';
import './App.css';
import NotFound from 'containers/404';
import Login from 'containers/Login';
import About from 'containers/About';
import { useRoutes } from 'react-router-dom';

function App() {
  return useRoutes([
    { path: "/", element: <Home />,},
    { path: "login", element: <Login /> },
    { path: "about", element: <About /> },
    { path: "*", element: <NotFound /> },
  ]);
}

export default App;
