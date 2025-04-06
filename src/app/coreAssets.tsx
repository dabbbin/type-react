import React from "react"
import { bankTypeOnlyIs } from "./model/bankType"
 

interface OwnProps extends bankTypeOnlyIs {}
    
 
const coreAssets:React.FC<OwnProps> = ({IS}) => {
    return ( 
        <div>
            <h1 className="title"> 
                손익계산서입니다. 
            </h1>
            --------------------------------------------------
           
            <h2>
                <ul className="IS">      
                    <li> 수익 : {IS.revenue.valueOf()}</li>
                    <li> 비용 : {IS.expense.valueOf()}</li>
                    
            </ul> 
            </h2>
            --------------------------------------------------
        </div>
       
    )
}

export default coreAssets