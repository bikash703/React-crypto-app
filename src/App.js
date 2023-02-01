import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Componets/Header'
import Home from './Componets/Home'
import Coins from './Componets/Coins'
import Exchanges from './Componets/Exchanges'
import CoinDetails from "./Componets/CoinDetails";
import Footer from './Componets/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/coins/:id" element={<CoinDetails />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
