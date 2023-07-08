// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const [Orangee, setOrange] = useState("yellow"); // Corrected initial state
  const showOrange = () => {
    if (Orangee === "yellow") {
      setOrange("orange");
      document.body.style.backgroundColor = "orange";
      showAlert("Background changed to Orange", "success");
    } else {
      setOrange("yellow");
      document.body.style.backgroundColor = "yellow";
      showAlert("Background changed to Yellow", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
      document.title = "TexUtils - DarkMode";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TexUtils - LightMode";
    }
  };
  return (
    // <BrowserRouter>
    <>
      <Navbar
        title="TextUtils"
        About="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route */}

          {/* exact path="/" */}
            {/* element={ */}
              <TextForm
                showAlert={showAlert}
                Orangee={Orangee}
                showOrange={showOrange}
                heading="Enter the Text here: "
                mode={mode}
              />
            {/* } */}
          {/* /> */}
        {/* </Routes> */}

        {/* <About /> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
