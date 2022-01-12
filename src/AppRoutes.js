import React from 'react';
import {
    BrowserRouter,
    // Routes, // instead of "Switch"
    Switch,
    Route,
} from "react-router-dom";
import ContactFormData from './components/ContactFormData/ContactFormData';
import ContactForm from './components/ContactForm';
import Error from './Error';




export default function AppRoutes() {
    return (
        <BrowserRouter>
               <Switch>
              
                <Route exact path="/" component={ContactFormData}/>  
                <Route exact path="/ContactForm" component={ContactForm}/>
                <Route exact path="/Dashboard" component={ContactFormData}/>  
                <Route component={Error} />
            </Switch>
        </BrowserRouter>

    );



}
