
import './App.css';
import BucketList from './components/BucketList/BucketList'
import foodAPI from './RestuarantAPI';




function App() {


  return (
    <div className="App">
      <h1>Food Crawl</h1>

     <BucketList />
    </div>
  );
}

export default App;
