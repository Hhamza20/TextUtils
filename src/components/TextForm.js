import React, { useState } from "react";
import App from "../App";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    props.showAlert("Converted to lowercase!","success")
    setText(newText);
  };
  const clearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
   
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <form>
          <h1>{props.heading}</h1>
          <div className="form-group">
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "dark" ? "white" : "black",
              }}
              value={text}
              onChange={handleOnChange}
              className="form-control"
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-2 my-3"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-3"
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-3"
            onClick={clearText}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-3"
            onClick={props.showOrange}
          >
          {props.Orangee === 'yellow' ? 'Change background to Orange' : 'Change background to Yellow'}
            
          </button>
        </form>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some text above to preview here!"}</p>
      </div>
    </>
  );
}
