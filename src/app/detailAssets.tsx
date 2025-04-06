import React from "react"
import { FP } from "./model/bankType"
 


interface OwnProps extends FP{
//interface OwnProps extends Omit<FP, 'asset'> ==> props 에서 asset 제거 가능 ! 
    //bankType의 FP 타입과 동일(반복) =>    extends (1.interface 방법)
    // 1. asset:Number;
    // 2. liability:Number;
    // 3. equity:Number;

    //추가하고 싶은 목록 
    cash: Number,
    billReceivable : Number,
    TradeReceivable : Number

    //showDetailAssets 함수 props 받아오기 
    showDetailAssets(name:string):string
}


//2. extends : interface 방법 : interface 와 type 의 차이는 무엇인가?! 
// type에서만 사용할 수 있는 기능 존재 : 모든 타입을 보여줄 필요가 없을 때, 새로운 타입을 만들어야 하나? ㄴㄴ!!  ==> Omit   @bankType 
// 그러나 interface 에서도 Omit 존재 위로 UP... 

//그러면 일부만 선택하여 가져오고 싶을 땐...? ==> Pick @bankType

// type OwnProps = FP & {
     
//     //추가하고 싶은 목록 
//     cash: Number,
//     billReceivable : Number,
//     TradeReceivable : Number

//     //showDetailAssets 함수 props 받아오기 
//     showDetailAssets(name:string):string
// }


const DetailAssets:React.FC<OwnProps> = ({asset, liability, equity, cash, billReceivable, TradeReceivable, showDetailAssets}) => {
    return (
        <div>

                      

            <h1 className="title"> 
            {showDetailAssets("재무제표 상세 정보입니다.")}
            </h1>
            --------------------------------------------------
           
            <h2>
                <ul className="assets">      
                    <li> 자산 : {asset.valueOf()}</li>
                    <li> 부채 :{liability.valueOf()}</li>
                    <li> 자본 : {equity.valueOf()}</li>
                    <li> 현금 : {cash.valueOf()}</li>
                    <li> 받을어음 : {billReceivable.valueOf()}</li>
                    <li> 매출채권 : {TradeReceivable.valueOf()}</li>
            </ul> 
            </h2>
            --------------------------------------------------
        </div>
       
    )
}

export default DetailAssets