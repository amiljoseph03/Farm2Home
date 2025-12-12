import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeSection from './components/HomeSection';
import Searchbar from './components/Searchbar';

import './App.css';




function App() {
  return (
    <Router>
      <HomeSection />
      <Searchbar/>
      <Routes>
        {/* <Route path="/" element={<HomeSection />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
