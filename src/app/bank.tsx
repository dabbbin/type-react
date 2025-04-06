import React from "react"
import { BankType, FP } from "./model/bankType"

//props 는 데이터 타입을 따로 만듦 (인터페이스 활용) 
interface OwnProps{
    info:BankType,
    //changFp 함수의 타입은? fp를 받고 FP타입이다 : 리턴 타입 선언 
    changeFp(fp:FP):void 
}
 

const Bank:React.FC<OwnProps> = ({info}) => {
    return (
        
        <div>
            
            <h1 className="title"> 
                {info.name}
            </h1>
            --------------------------------------------------
            <h2>
                <ul className="assets">      
                    <li> 자산 : {info.FP.asset.valueOf()} </li> 
                    <li> 부채 :  {info.FP.liability.valueOf()} </li> 
                    <li> 자본 :  {info.FP.equity.valueOf()} </li> 
                </ul> 
            </h2>
            --------------------------------------------------
            <h2>
                <ul className="is">
                    <li> 수익 : {info.IS.revenue.valueOf()} </li>
                    <li> 비용 : {info.IS.expense.valueOf()} </li>

                </ul>
            </h2>
            --------------------------------------------------
                               
         </div>
    )
}



export default Bank