
import React, { useState } from 'react';
import { Component } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import './FormSidebarMenu.css';
import { useEffect } from 'react';



function FormSidebar Menu()  {
 
    useEffect(() => {
       
        this.mediaQuery = '(min-width: 600px)';
        this.menuItems = [
            {
                text:'Dashboard', 
                iconCss: 'icon-globe icon',
                id: 'dashboard',
                target="/1230"
              
            },
            {
                text: 'Contact Form',
                iconCss: 'icon-bell-alt icon',
                id: 'contact_form'
              
            },
         
           
        ];
       
        this.enableDock = true;
        this.dockSize = '52px';
        this.width = '220px';
        this.target = '.main-content';
      });
    
            
           
      
    



    
   function openClick() {
        this.sidebarobj.toggle();
    }
  function test(e){

            console.log(e.target.id);
            let id=e.target.id;
            if(id==='dashboard'){
       
        // window.history.replaceState(null, "New Page Title", "/Dashboard");
        // window.location.reload(false);

        window.location.replace("/Dashboard");



        }

        if(id==='contact_form'){
            debugger;
            // window.history.pushState(null, "New Page Title", "/ContactForm");
            // window.location.reload(false);
            window.location.replace("/ContactForm");
            
        }
    }
 
    


  

     
        return (
            <>
           
                <div className="control-section sidebar-menu">
                    <div id="wrapper">
                        <div className="col-lg-12 col-sm-12 col-md-12  ">
                            <SidebarComponent  id="sidebar-menu" className='' ref={Sidebar => this.sidebarobj = Sidebar} enableDock={this.enableDock} mediaQuery={this.mediaQuery} dockSize={this.dockSize} width={this.width} target={this.target}>
                                
                                <div className="main-menu" >

                                <div className="header-2-section dock-menu " id="header-2" >
                                        <ul className="header-2-list">
                                            <li id="hamburger" className="icon-menu icon list" onClick={this.openClick.bind(this)}>
                                            </li>
                                        </ul>
                                       
                                    </div>
                                    {/* <p className="main-menu-header-2">iView Labs Pvt. Ltd.</p> */}
                                    <MenuComponent items={this.menuItems} orientation='Vertical' cssClass='dock-menu' onClick={this.test}></MenuComponent>
                                </div>
                                {/* <div className="action">
                                <p className="main-menu-header-2">ACTION</p>
                                <button className="e-btn action-btn" id="action-button">+ Button</button>
                            </div> */}
                            </SidebarComponent>
                        </div>
                    </div>
                </div>


            </>
        )
    
   

}

export default FormSidebarMenu;