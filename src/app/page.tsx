"use client"; 
import React, {useState} from "react"; 
import Bank from "./bank";
import {BankType, FP} from "./model/bankType"
import DetailAssets from "./detailAssets";
import CoreAssets from "./coreAssets"; 

let data:BankType = {
  name:'회계(會計)',
  category:'Accounting',
  FP:{
    asset :15000,
    liability:5000,
    equity:10000
  },
  IS:{
    revenue:3000,
    expense:2000
  },
  Assets:[{name:'cash',element:'quickAssets'}, {name:'ordinaryDeposit',element:'quickAssets'}]      
}
    
// export default function Home() {
//타입 스크립트 리턴 값을 컴포넌트로 변환 : React.FC (Function Component) 
const Home:React.FC = () => { 
  const [myBank, setMyBank] = useState<BankType>(data) //제네릭 : 리액트는 useState 안에 들어가는 타입을 몰라! 알려줘! 
  
  //재무제표 변경 함수
   const changeFp = (fp:FP) => {
    setMyBank({...myBank, FP:fp})
   }
  
   //DetailAssets 에 함수 전달할 것. 
   const showDetailAssets = (name:string) =>{
    return name 
   }

  return ( 
    <div className="Page">
        <div>
         <Bank info={data} changeFp={changeFp} />
        </div>
        <div>
         <DetailAssets asset={15000} 
            liability={5000} equity={10000} cash={6000} billReceivable={2800} TradeReceivable={1200}
           showDetailAssets={showDetailAssets} // 함수 전달 
        />
        </div>
        <div>   
          <CoreAssets IS={data.IS}/>
        </div>
    </div>
  );
}

export default Home;