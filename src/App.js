
import './App.css';
import About from './components/About';
import Converter from './components/Converter';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//var colorValue=document.querySelector('.color-value').value;
//console.log(colorValue)

function App() {
  const[mode,setMode]=useState('light');
  const[color,setColor]=useState('text-dark');
  const [mytxtbtn,settxtbtn]=useState('Enable dark mode');
  const [red, setred] = useState('enable red mode');
  const [alert, setalert] = useState(null);
  var darkModeIsEnabled=false;


  //red mode method
   const showRed=()=>{
     setred('disable red mode');
     if(mode==='light'){
       setMode('dark')
       document.body.style.background="#d01153"
       showAlert('red mode has been enabled');
       document.body.style.color='#fff';
       setColor('text-light')
       darkModeIsEnabled=true;
      
     }
     else{
       setred('enable red mode')
       document.body.style.background="#fff"
       showAlert('light mode has been enabled','sucess')
       document.body.style.color='black';
       setMode('light')
       setColor('text-dark')
     }
   }


  const showAlert=(message,type)=>{
       setalert(
        message=message,
        type=type 
       )

       setTimeout(() => {
       setalert(null);
       }, 1500);

 
  }

  
  const changeMode=()=>{
       if(mode==='light'){
         setMode('dark')
         document.body.style.background='rgb(21, 21, 90)';
         document.body.style.color='#fff';
         setColor('text-light')
         settxtbtn('Disable Dark Mode')
         showAlert("darkmode has been enabled","sucess");
         darkModeIsEnabled=true;

        
       
          
      
       }
       else{
         setMode('light')
         document.body.style.background='#fff';
         document.body.style.color='black';
         setColor('text-dark')
         settxtbtn('Enable Dark Mode')
         showAlert('light mode has been enabled','sucess')
       }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Utility" Red={showRed} redbtn={red} Home="Home" 
      colorId="colors"
    links="More" color={color} mode={mode} change={changeMode} changerbtn={mytxtbtn}/>
    <Alert alert={alert}/>

    
   
    <Switch>
    <Route path="/about">
   <About />
   </Route>
    <Route path="/">
    <TestForm heading="Text editor"  showAlert={showAlert}/>
    <Converter  showAlert={showAlert} />
          </Route>
        </Switch>
    </Router>
  
    </>
  );
}

export default App;
