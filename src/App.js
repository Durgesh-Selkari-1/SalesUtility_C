import React from "react";
import FormHeader from "./components/Header/FormHeader";
import FormSidebarMenu from "./components/SidebarMenu/FormSidebarMenu";
import FormMainBody from "./components/MainBody/FormMainBody";
// import ContactFormData from './components/ContactFormData/ContactFormData';
// import ContactForm from './components/ContactForm';
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";
function App() {
  return (
   <>
 <div>
<FormHeader/>
<FormSidebarMenu/>
<FormMainBody/>



    </div>

 

  
   </>
      
    
  );
}


export default App;
