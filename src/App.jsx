import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeSection from './components/HomeSection';
import Searchbar from './components/Searchbar';

import './App.css';
import FeaturedSection from './components/FeaturedSection';
import Categories from './components/Categories';
import Category2 from './components/Category2';
import About from './components/About';
import RentalEquipment from './components/RentalEquipment';
import PriceList from './components/PriceList';
import AgriTips from './components/AgriTips';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Delivary from './components/Delivery';

function App() {
  return (
    <Router>
      <HomeSection />
      <Searchbar/>
      <FeaturedSection/>
      <About/>
      {/* <Categories/> */}
      <Category2/>
    <RentalEquipment/>
    <PriceList/>
    <AgriTips/>
    <Testimonials/>
    <WhyChooseUs/>
    <Delivary/>
      <Routes>
        {/* <Route path="/" element={<HomeSection />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
