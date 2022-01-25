import react, {useState} from 'react'
import './Bucket.css'



const BucketList = (props: { restuarants: { image_url: string | undefined; }[]; }) => {
    



    return (

        <>
            {props.restuarants.map( (restuarant: { image_url: string | undefined; }, index: any ) => (
                 <div className='list'> 
                  <img src={restuarant.image_url} alt="restuarant" />
                    <h3>Restuarant Name</h3>

                    <p>Restuarant Details</p>

                    <button>Delete</button>
                    <button>Add to Favorites</button>
                </div>
            ))}
        </>
    );  
};

export default BucketList;