import './App.css';
import {React, useState} from 'react';
import InputForm from './components/InputForm/InputForm.js';
import ResultCode from './components/ResultCode/ResultCode.js';

function App() {

  const [catalogueName, setCatalogueName] = useState('')
  const [collectionName, setCollectionName] = useState('')
  const [skuName, setSkuName] = useState('')
  const [convertedCode, setConvertedCode] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalTerm = catalogueName + collectionName + skuName
    let resultCode = ""
    for (let i = 0; i < finalTerm.length; i++) {
      let charCode = finalTerm.charCodeAt(i)
      if ((charCode >= 65 && charCode < 90) || (charCode >= 97 && charCode < 122) || (charCode >= 48 && charCode < 57)){
        resultCode += String.fromCharCode(charCode + 1)
      }
      else if (charCode === 90 || charCode === 122){
        resultCode += String.fromCharCode(charCode - 25)
      }
      else {
        resultCode += String.fromCharCode(charCode - 9)
      }
    }
    setConvertedCode(resultCode)
    console.log(resultCode)
  }


  return (
    <div className="App">
      <header className="App-header">
          <InputForm handleSubmit={handleSubmit} setCatalogueName={setCatalogueName} setCollectionName={setCollectionName} setSkuName={setSkuName}></InputForm>
          {convertedCode && <ResultCode convertedCode={convertedCode}></ResultCode>}
      </header>
    </div>
  );
}

export default App;
