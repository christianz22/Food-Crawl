import './App.css';
import RestaurantInfo from './RestaurantInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import BucketList from './components/BucketList/BucketList';
import Favorite from './components/BucketList/Favorite';
import Navbar from './components/Sidebar/NavBar';




function App() {

  
  return (
    
    <>

    
  
    <Router basename={process.env.PUBLIC_URL}>
    
    <Navbar />
    
    <div className="App">
    <main>
      <Routes>
        <Route
          path='/restaurant-info/:restaurantId'
          element={<RestaurantInfo />}
        />
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/bucketlist'
          element={<BucketList />}
        />
        <Route
          path='/favorites'
          element={<Favorite />}
        />
      </Routes>

    </main>
    </div>
    </Router>

   
    </>
  );
}
export default App;

