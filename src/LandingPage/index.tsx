import react, { useState, useMemo } from 'react';
import { IBusiness } from '../types/IBusinessResponse';
import ResultItem from './ResultItem';
import SearchBar from './SearchBar';
import { SearchRestaurants } from '../GetRestaurants';

const LandingPage = () => {
    const [results, setResults] = useState<IBusiness[]>([]);
    const [food, setFood] = useState('Sushi');
    const [location, setLocation] = useState('Michigan');
    const [page, setPage] = useState(0)
    const pageSize = 4;

    const onFormSubmit: react.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(!location.length) return;
        const params = {term: food, location};
        SearchRestaurants(params).then((data: IBusiness[]) => {
            setResults(data)
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
        return results.slice(page * pageSize, (page + 1) * pageSize).map((item, key) => {
            return (
                <ResultItem item={item} key={key}  />
            )
            
        })
    },[results]);

    const nextPrev = () => {
        if(!location.length) return;
        const params = {term: food, location};
        SearchRestaurants(params).then((data: IBusiness[]) => {
            setResults(data)
        }).catch((error) => {
            console.error(error);
        })
    };

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
                <p>{page > 0 && <button type='submit' onClick={() => {
                    setPage(page - 1)
                    nextPrev()
                }}>Prev</button>}
                {(page + 1) * pageSize < results.length && <button onClick={() => {
                    setPage(page + 1)
                    nextPrev()
                }}>Next</button>}</p>
                </div>

        </div>
    );
}

export default LandingPage;