import axios from 'axios';
import react, { useState, useMemo } from 'react';
import IBusinessResponse, { IBusiness } from '../types/IBusinessResponse';
import ResultItem from './ResultItem';

import SearchBar from './SearchBar';
import BucketList from '../components/BucketList/BucketList';


const LandingPage = () => {
    const [results, setResults] = useState<IBusiness[]>([]);
    const [food, setFood] = useState('Sushi');
    const [location, setLocation] = useState('Michigan');
    

    const onFormSubmit: react.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(!location.length) return;
        const params = {term: food, location};
        axios.get('http://localhost:5000/yelp', {params}).then((response: IBusinessResponse) => {
            const {data} = response;
            setResults(data);
        }).catch((error) => {
            console.error(error);
        })
    };

    const onFoodChange: react.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFood(event.target.value);
    }

    const onLocationChange: react.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLocation(event.target.value);
    }

    const resultItems = useMemo( () => {
        return results.map((item, key) => {
            return (
                <ResultItem item={item} key={key}  />
            )
        })
    },[results]);


    return (
        <div>
            
            <SearchBar 
                onFormSubmit={onFormSubmit} 
                onFoodChange={onFoodChange}
                onLocationChange={onLocationChange}
                food={food}
                location={location} />
                
                <div className='result-list'>
                    {resultItems}
                    {!location.length && <span>Location needs to be specified.</span>}
                </div>
            
        </div>
    );
}

export default LandingPage;

