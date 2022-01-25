import { useParams } from "react-router";
import { Restaurant } from "./RestaurantInterface";
import { Link } from "react-router-dom";

function RestaurantInfo({ favorite} : {favorite: Restaurant[] }) {
    

    let id = parseInt(useParams().restaurantId as string);
    let restaurant = favorite[id];

    if(!restaurant) {
        return(
            <p>Nothing to display!</p>
        )
    }else{

    return (
        <div>
            {/* <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}></img>
            <p>{movie.release_date}</p>
            <p>Average rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
            <Link to='/'> Return Home</Link> <Link to='/favorite-bacon'>Return to Favorites</Link> */}
        </div>
    )
    }
};

export default RestaurantInfo;