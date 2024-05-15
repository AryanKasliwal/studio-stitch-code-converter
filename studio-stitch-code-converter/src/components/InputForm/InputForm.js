import React from "react";
import './InputForm.css';

function InputBox({handleSubmit, setCatalogueName, setCollectionName, setSkuName}) {

    return (
        <div>
            <form name='input-form' onSubmit={handleSubmit}>
            <label>
              Enter the Catalogue name
              <input
                id='Catalogue name'
                type='text'
                // value={catalogueName}
                // className="input-field"
                onChange={(e) =>setCatalogueName(e.target.value)}/>
            </label>
            <br/>
            <label>
              Enter the Collection name
              <input
                id='Collection name'
                type='text'
                // className="input-field"
                // value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}/>
            </label>
            <br/>
            <label>
              Enter the SKU name
              <input type='text'
                id='SKU name'
                // className="input-field"
                // value={skuName}
                onChange={(e) => setSkuName(e.target.value)}/>
            </label>
            <br/>
            <button type='submit' className='button-box'>Convert</button>
          </form>
        </div>
    );
}


export default InputBox;