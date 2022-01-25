import { useState, useEffect } from "react";
import GetBusiness from "./GetFood";
import { BusinessItem } from "./GetFood";


function Food() {
    useEffect(()=> {
        GetBusiness().then( data => setBusiness(data))
    },[])

    const [business, setBusiness] = useState<BusinessItem[]>([])
    
    return (
        <ul>
            {
           business.map(w => {
               return 
               <div>
                <li> 
                    {w.rating} 
                </li> 
                <p>
                    {w.alias}
                </p>
               </div>
           })
            }
        </ul>
    )
}

export default Food;