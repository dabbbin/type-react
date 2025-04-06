// let data = {
//     name:'회계(會計)',
//     category:'Accounting',
//     FP:{
//       asset :'총자산',
//       liability:'부채',
//       equity:'자본' 
//     },
//     IS:{
//       revenue:'수익',
//       expense:'비용'
//     },
//     Assets:[{name:'cash',element:'quickAssets'}, {name:'ordinaryDeposit',element:'quickAssets'}]      
//   } 

import { StringValueToken } from "html2canvas/dist/types/css/syntax/tokenizer";

//타입을 만드는 방식(2) :  type , interface 
 
export type BankType = {
    name:string; 
    category?:string; // 이렇게 !! 
    FP: FP;
    IS: {
        revenue:Number;
        expense:Number;
    },
    Assets:Assets[] 
     
}

//2. 타입의 타입 만들기 

export type FP = {
    asset:Number;
    liability:Number;
    equity:Number;
}

export type Assets = {
    name:string;
    element:string;
}

//extends : 타입 확장 

//type => omit 기능 @detailAssets
export type bankTypeWithoutCategory = Omit<BankType, 'category'>
//Pick 기능 ! @detailAssets 
export type bankTypeOnlyIs = Pick<BankType, 'IS'>  

/* 
 * 하지만,.,.,. 가장 간단한 방법은 !! ? 
 * 변수명 뒤에 ? 를 붙이는 것 (null 허용) 
 * BankType 참조. 
*/



/**
 * API 응답으로부터 받아온 데이터도.. 
 * 타입으로 만들기 가능하다!!  
 *  */ 

export type ApiResponse<T> = {
    data:T[], //data 에는 Assets이 올 지, FP가 올 지 모르기 때문.  
    totalPage:number,
    page:number
}

 
export type AssetsResponse = ApiResponse<Assets> 
export type FpResponse = ApiResponse<FP>


