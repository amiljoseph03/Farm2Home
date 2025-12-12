import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import HomeSection from '../components/HomeSection';
import HomeSection from './components/HomeSection';
import Searchbar from './components/Searchbar';

import './App.css';



// import Shop from './pages/Shop';
// import Rent from './pages/Rent';

function App() {
  return (
    <Router>
      <HomeSection />
      <Searchbar/>
      <Routes>
        {/* <Route path="/" element={<HomeSection />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/rent" element={<Rent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
