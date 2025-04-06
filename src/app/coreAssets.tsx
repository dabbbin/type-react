import React from "react"
import { bankTypeOnlyIs } from "./model/bankType"
 

interface OwnProps extends bankTypeOnlyIs {}
    
const CoreAssets: React.FC<OwnProps> = ({ IS }) => {
    return (
      <div className="core-assets-container">
        <h1 className="core-assets-title">
          손익계산서입니다.
        </h1>
        <hr className="separator" />
  
        <div className="income-statement-section">
          <h2>손익계산서 (Income Statement)</h2>
          <ul className="is-list">
            <li><strong>수익:</strong> {IS.revenue.valueOf()}</li>
            <li><strong>비용:</strong> {IS.expense.valueOf()}</li>
          </ul>
        </div>
        <hr className="separator" />
      </div>
    );
  };
  

export default CoreAssets