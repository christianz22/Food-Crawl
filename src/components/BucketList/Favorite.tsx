import { useContext } from 'react';
import FavoritesListRow from './FavoriteList';
import BucketContext from './BucketContext';


function Favorite() {
   
    const context = useContext(BucketContext);
    
    

    return (
        <div className="favorite-container">
           
            <table>
                <thead><td><strong>Name</strong></td><td><strong>City</strong></td><td><strong>Restaurant Link</strong></td><td><strong>Remove</strong></td></thead>
                {
                    context.favorite.map((favItem, i) => <FavoritesListRow favItem={favItem} index={i}/>)
                    
                }
                
            </table>

        </div>
    )
}

export default Favorite;