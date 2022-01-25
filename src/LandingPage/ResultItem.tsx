import react from 'react';
import { IBusiness } from '../types/IBusinessResponse';

interface IProps {
    item: IBusiness;
}


 const ResultItem = ({item}: IProps) => {
    
    return (
        <div className='result-item'>
        <p>{item.alias}</p>
        <p>{item.name}</p>
        </div>
    )
 }

 export default ResultItem;