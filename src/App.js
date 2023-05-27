import Home from 'containers/Home';
import './App.css';
import NotFound from 'containers/404';
import Login from 'containers/Login';
import { useRoutes } from 'react-router-dom';
import Market from 'containers/Market';
import Bids from 'containers/Bids';
import Portfolio from 'containers/Portfolio';
import Wallet from 'containers/Wallet';
import Favourite from 'containers/Favourite';
import History from 'containers/History';
import Set from 'containers/Set';

function App() {
  return useRoutes([
    { path: "/", element: <Home />,},
    { path: "login", element: <Login /> },
    { path: "market", element: <Market /> },
    { path: "active-bids", element: <Bids /> },
    { path: "portfolio", element: <Portfolio /> },
    { path: "wallet", element: <Wallet /> },
    { path: "favourite", element: <Favourite /> },
    { path: "history", element: <History /> },
    { path: "setting", element: <Set /> },
    { path: "*", element: <NotFound /> },
  ]);
}

export default App;
