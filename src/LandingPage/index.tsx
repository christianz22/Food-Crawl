import react, { useState, useMemo } from 'react';
import { IBusiness } from '../types/IBusinessResponse';
import ResultItem from './ResultItem';
import SearchBar from './SearchBar';
import { SearchRestaurants } from '../GetRestaurants';
import '../App.css'

const LandingPage = () => {
    const [results, setResults] = useState<IBusiness[]>([]);
    const [food, setFood] = useState('');
    const [location, setLocation] = useState('');
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
        <>
        <div className='landingpage'>
            
            <SearchBar 
                onFormSubmit={onFormSubmit} 
                onFoodChange={onFoodChange}
                onLocationChange={onLocationChange}
                food={food}
                location={location} />
                
                <div className='result-list'>
                    {resultItems}
                    {!location.length && <span>Location needs to be specified.</span>}
                <p >{page > 0 && <button className="nextprev-btn" type='submit' onClick={() => {
                    setPage(page - 1)
                    nextPrev()
                }}>Prev</button>}
                {(page + 1) * pageSize < results.length && <button className="nextprev-btn" onClick={() => {
                    setPage(page + 1)
                    nextPrev()
                }}>Next</button>}</p>
                </div>

        </div>
{/* 
        <div className='mission'>
            <h1>Our Mission:</h1>
            <p>Have you ever been to an amazing restaurant only to forget where it was?</p>
        </div> */}
        </>
    );
}

export default LandingPage;