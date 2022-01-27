
import './App.css';
// import { useState } from 'react';
import Reviews from './Rewiews';
import RestaurantInfo from './RestaurantInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Restaurant } from './RestaurantInterface';
import LandingPage from './LandingPage';
import BucketList from './components/BucketList/BucketList'
import foodAPI from './RestuarantAPI';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <h1>Food Crawl</h1>
      <Routes>
        <Route
          path='/restaurant-info/:restaurantId'
          element={<RestaurantInfo />}
        />
        <Route
          path='/reviews' 
          element={<Reviews />}
          />
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/bucketlist'
          element={<BucketList />}
        />
      </Routes>
    </div>
    </Router>
  );
}
export default App;

