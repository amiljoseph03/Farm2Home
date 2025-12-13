import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeSection from './components/HomeSection';
import Searchbar from './components/Searchbar';

import './App.css';
import FeaturedSection from './components/FeaturedSection';




function App() {
  return (
    <Router>
      <HomeSection />
      <Searchbar/>
      <FeaturedSection/>
      <Routes>
        {/* <Route path="/" element={<HomeSection />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
