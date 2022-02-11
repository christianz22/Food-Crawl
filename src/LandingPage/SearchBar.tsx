import react from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import '../App.css';

interface IProps {
    onFormSubmit: react.FormEventHandler<HTMLFormElement>;
    onFoodChange: react.ChangeEventHandler<HTMLInputElement>;
    onLocationChange: react.ChangeEventHandler<HTMLInputElement>;
    food: string;
    location: string;
}

const SearchBar = (props: IProps) => {
    const {onFormSubmit, onFoodChange, onLocationChange, food, location} = props;
    return (
        <>
        <form className='search-inputs' onSubmit={onFormSubmit}>
            <input className='search-input' type="text" placeholder='food' value={food} onChange={onFoodChange} />
            <input className='search-input' type="text" placeholder='place' value={location} onChange={onLocationChange} />
            <button className='search-submit' type='submit'><BiSearchAlt2/>Search</button>
        </form>    
        </>
    );
}

export default SearchBar;