import React from "react"
import { BankType, FP } from "./model/bankType"

//props 는 데이터 타입을 따로 만듦 (인터페이스 활용) 
interface OwnProps{
    info:BankType,
    //changFp 함수의 타입은? fp를 받고 FP타입이다 : 리턴 타입 선언 
    changeFp(fp:FP):void 
}
 

const Bank: React.FC<OwnProps> = ({ info }) => {
    return (
      <div className="bank-container">
        <h1 className="bank-title">{info.name}</h1>
        <hr className="separator" />
  
        <div className="financials-section">
          <h2>재무상태 (Balance Sheet)</h2>
          <ul className="assets">
            <li><strong>자산:</strong> {info.FP.asset.valueOf()}</li>
            <li><strong>부채:</strong> {info.FP.liability.valueOf()}</li>
            <li><strong>자본:</strong> {info.FP.equity.valueOf()}</li>
          </ul>
        </div>
        <hr className="separator" />
  
        <div className="income-statement-section">
          <h2>손익계산서 (Income Statement)</h2>
          <ul className="is">
            <li><strong>수익:</strong> {info.IS.revenue.valueOf()}</li>
            <li><strong>비용:</strong> {info.IS.expense.valueOf()}</li>
          </ul>
        </div>
        <hr className="separator" />
      </div>
    );
  };
  


export default Bank