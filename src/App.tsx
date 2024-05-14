import { BarcodeScanner } from "react-barcode-scanner";
import "./App.css";
import { useState } from "react";

function App() {
  const [barCode, setBarCode] = useState({ format: "", code: "" });
  const onCapture = (e: any) => {
    console.log(e);
    setBarCode({
      format: e.format,
      code: e.rawValue,
    });
  }
  return (
    <>
      <h1>Barcode Scanner</h1>
      <h2>Count: {JSON.stringify(barCode)}</h2>
      <BarcodeScanner
        options={{
          delay: 1000,
          formats: [
            "qr_code",
            "code_128",
            "code_39",
            "code_93",
            "codabar",
            "ean_8",
            "ean_13",
            "itf",
            "upc_a",
            "upc_e",
            "pdf417",
            "unknown",
          ],
        }}
        onCapture={onCapture}
      />
      ;
    </>
  );
}

export default App;
