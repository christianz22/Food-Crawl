import { useContext } from 'react';
import FavoritesListRow from './FavoriteList';
import BucketContext from './BucketContext';
import '../../App.css'


function Favorite() {
   
    const context = useContext(BucketContext);
    
    

    return (
        <div className="favorite-container">
           <h1>My Favorites</h1>
            <table>
                <thead>
                    <td><strong>Name</strong></td>
                    <td><strong>City</strong></td>
                    <td><strong>Restaurant Link</strong></td>
                    <td><strong>Remove</strong></td>
                    </thead>
                {
                    context.favorite.map((favItem, i) => <FavoritesListRow favItem={favItem} index={i}/>)
                    
                }
                
            </table>

        </div>
    )
}

export default Favorite;