"use client";
import React, {useState} from "react";
import Bank from "./bank";
import {BankType, FP} from "./model/bankType"
import DetailAssets from "./detailAssets";
import CoreAssets from "./coreAssets";
import QRCode from "react-qr-code"
import QrScanner from "qr-scanner"
import {log} from "node:util";


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


    //Qrcode Test
    const [inputQrValue, setInputQrValue] = useState("")
     const [result, setResult] = useState("")

    const download = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `${inputQrValue}`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }


    const qrScanner = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => setResult(result.data))
            .catch(e => console.log(e));
    };

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
        <div>
            <h3> Qr Generation </h3>

            <div style={{height: "auto", margin: "0 auto", maxWidth: 64, width: "100%"}}>
                <QRCode
                    size={256}
                    style={{height: "auto", maxWidth: "100%", width: "100%"}}
                    value={inputQrValue}
                    viewBox={`0 0 256 256`}
                    id="QRCode"
                />
            </div>

            <input type="text" onChange={(e) => setInputQrValue((e.target.value))}/>
            <input type="button" onClick={download} value="Download"/>
        </div>
        <div>
            <h3>Qr Scanner </h3>

            <input type="file" id="file" onChange={(e) => qrScanner(e)}/>
            <div> QR명: {result} </div>
        </div>
    </div>


    );
}

export default Home;
