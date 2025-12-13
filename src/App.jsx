import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeSection from './components/HomeSection';
import Searchbar from './components/Searchbar';

import './App.css';
import FeaturedSection from './components/FeaturedSection';
import Categories from './components/Categories';
import Category2 from './components/Category2';




function App() {
  return (
    <Router>
      <HomeSection />
      <Searchbar/>
      <FeaturedSection/>
      {/* <Categories/> */}
      <Category2/>
      <Routes>
        {/* <Route path="/" element={<HomeSection />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
