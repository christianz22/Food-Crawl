
import './App.css';
import { useState } from 'react';
import Reviews from './Rewiews';
import RestaurantInfo from './RestaurantInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import BucketList from './components/BucketList/BucketList'
import Navbar from './components/Sidebar/NavBar';

function App() {

  const [bucketList, setBucketList] = useState<IBusiness[]>([]);

  const addBucketList = (business: IBusiness) => {
      setBucketList((prevBusiness) => {
        return [...prevBusiness, business];
      });
    };
  
  const handleDelete = (i: number) => {
      setBucketList((prevBucketList) => {
        return [...prevBucketList.slice(0, i), ...prevBucketList.slice(i + 1)];
      });
    };

  return (
    <Router basename={process.env.PUBLIC_URL}>

    <Navbar />

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

// bucketList={bucketList} handleDelete={handleDelete}