import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase!","success");

  }
  const handleLoClick = () => {
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase!","success");

  }
  const handleClearClick = () => {
    // console.log("UpperCase Was Clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copyed!","success");

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");

  }

  const [text, setText] = useState('');
  return (
    < >
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : `black`}} >
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(53 40 36)' : `white`,color:props.mode === 'dark' ? 'white' : `#2b1b17`  }} id="myBox" rows="5" ></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To UpperCase </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To LowerCase </button>
          <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear Text </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>
          <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra spaces </button>
        </div>
      </div>
      <div className="contaier  my-2" style={{color: props.mode === 'dark' ? 'white' : `#2b1b17` }} >
        <h3>Your Text summary</h3>
        <p>{text.split(/\s+/).filter( (element)=>{return element.length!==0} ).length} Words And {text.length} Characters</p>
        <h5> Approximate Time to Read:</h5>
        <p>{0.008 * text.split(" ").filter( (element)=>{return element.length!==0}).length}Minutes Read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing To Preview"}</p>

      </div>
    </>
  )
}
