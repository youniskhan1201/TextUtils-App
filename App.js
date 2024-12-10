// import { useState } from 'react';  // Remove this line as it's a duplicate
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2B1B17';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'TextUtils - DarkMode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'TextUtils - LightMode';
    }
  };

  return (
    < >
      {/* <Navbar title= "TextUtils"  aboutText= "AboutTextUtils" /> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
      <BrowserRouter>
      <Routes>
      <Route path = "" element = {<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />}  />
      <Route path = "/about" element = { <About mode={mode}/>}  />
      <Route path = "*" element = { <h1>The Requested Page is not Available:</h1> }  />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
