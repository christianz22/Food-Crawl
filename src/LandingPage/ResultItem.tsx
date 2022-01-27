import { Link } from 'react-router-dom';
import { IBusiness } from '../types/IBusinessResponse';

interface IProps {
    item: IBusiness;
}


 const ResultItem = ({item}: IProps) => {
    
    return (
        <div className='result-item'>
        <img className ='imgUrl' src={item.image_url}></img>
        <h3><strong>{item.name}</strong></h3>
        <p><strong>City: </strong>{item.location?.city}</p>
        <p><Link to={"restaurant-info/"+item.id}>See More Details</Link></p>
        </div>
    )
 }

 export default ResultItem;