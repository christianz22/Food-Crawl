import react from 'react';
import { Link } from 'react-router-dom';
import { IBusiness } from '../types/IBusinessResponse';

interface IProps {
    item: IBusiness;
}


 const ResultItem = ({item}: IProps) => {
    
    return (
        <div className='result-item'>
        <p>{item.alias}</p>
        <p>{item.name}</p>
        <p><Link to={"restaurant-info/"+item.id}>See More Details</Link></p>
        </div>
    )
 }

 export default ResultItem;