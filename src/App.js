import'./App.css'
import About from './components/About';
import MerajForm from './components/MerajForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react' // imr is short form and imrs is usestste short form
import Alert from './components/Alert';
import History from './components/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // this define a mode enable or not

  const [alert, setAlert] = useState(null); // this define a mode enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type                         //this is alert function
    })
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#555c1b'
      showAlert("Dark Mode enable : ", "success");
    }

    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enable : ", "success");
    }

  }
  return (
    <>
      {/* <Navbar title='Text Meraj'/> */}
      <Router>
           { /*using of props */}

        <div className="container">

        <Navbar title="Text Meraj" aboutText="About us" historyText='Table' mode={mode} toggleMode={toggleMode} />   
        <Alert alert={alert} />
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/table">
            <History/>       
            </Route>

            <Route path="/">
              <MerajForm heading="Enter the text below :" mode={mode} />
            </Route>

          </Switch>

        </div>
          {/* <About/> */}
       </Router>   

    </>
  );
}

export default App;
