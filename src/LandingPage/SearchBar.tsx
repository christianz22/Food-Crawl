import react from 'react';

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
        <form className='search-inputs' onSubmit={onFormSubmit}>
            <input type="text" placeholder='food' value={food} onChange={onFoodChange} />
            <input type="text" placeholder='place' value={location} onChange={onLocationChange} />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default SearchBar;