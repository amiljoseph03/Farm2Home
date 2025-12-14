// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import HomeSection from './components/HomeSection';
// import Searchbar from './components/Searchbar';

// import './App.css';
// import FeaturedSection from './components/FeaturedSection';
// import Categories from './components/Categories';
// import Category2 from './components/Category2';
// import About from './components/About';
// import RentalEquipment from './components/RentalEquipment';
// import PriceList from './components/PriceList';
// import AgriTips from './components/AgriTips';
// import Testimonials from './components/Testimonials';
// import WhyChooseUs from './components/WhyChooseUs';
// import Delivary from './components/Delivery';
// import Footer from './components/Footer';
// import Navbar from './components/common/Navbar';

// function App() {
//   return (
//     <Router>

//       <Navbar/>
//       <HomeSection />
//       <Searchbar/>
//       <FeaturedSection/>
//       <About/>
//       {/* <Categories/> */}
//       <Category2/>
//     <RentalEquipment/>
//     <PriceList/>
//     <AgriTips/>
//     <Testimonials/>
//     <WhyChooseUs/>
//     <Delivary/>
//     <Footer/>
//       <Routes>
//         {/* <Route path="/" element={<HomeSection />} /> */}
    
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// // import './App.css';
// import Home from './pages/Home'


// import Dashboard  from './users/pages/dashboard/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Home />

//       <Routes>
//         {/* <Route path="/" element={<HomeSection />} /> */}

//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './Pages/Auth';
import Dashboard from './users/pages/dashboard/Dashboard';
import UserProfile from './users/pages/userprofile/UserProfile'
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />

        {/* Dashboard page */}
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
