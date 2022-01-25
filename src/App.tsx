
import './App.css';
import Food from './Business';
import BucketList from './components/BucketList/BucketList'
import foodAPI from './RestuarantAPI';




function App() {


  return (
    <div className="App">
      <h1>Food Crawl</h1>
     <Food />
     <BucketList  restuarants={restuarants}/>
    </div>
  );
}

export default App;
