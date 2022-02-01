import './App.css';
import Reviews from './Rewiews';
import RestaurantInfo from './RestaurantInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import BucketList from './components/BucketList/BucketList'
import Navbar from './components/Sidebar/NavBar';
import SignIn from './components/Signin/signin';


function App() {

  
  return (
    
    <>
  
    <Router basename={process.env.PUBLIC_URL}>
    
    <Navbar />
    
    <div className="App">
    
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

   
    </>
  );
}
export default App;

