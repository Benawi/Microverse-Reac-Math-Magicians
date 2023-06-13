import './index';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/calculator';
import GetQuotes from './components/displayQuoate';
import Home from './components/home';
import NavigationLinks from './components/navBar';
import Footer from './components/footer';

const App = () => (
  <BrowserRouter>
    <NavigationLinks />
    <div className="cal-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<GetQuotes />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
