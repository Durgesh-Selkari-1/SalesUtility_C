
import React from 'react';
import logo from './../../Assets/Images/logo.jpeg';
import './FormHeader.css';

function FormHeader() {

    //    function openClick() {
    //         this.sidebarobj.toggle();
    //     }
    return (
        <>
            <div className="control-section ">
                <div id="wrapper" >
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="header-section dock-menu " id="header">
                            <ul className="header-list ">
                                
                                 <li id="" className="icon-menu icon list" >
                                     <a href="/">
                                     <img src={logo} alt="iView.jpeg" className='img-fluid' style={{ width: 40, height: 40 }} />
                                     </a>
                          
                    
                            </li> 


                                {/* <input type="text" placeholder="Search..." className="search-icon list"></input> */}
                                {/* <li className="right-header list">
                              */}

                                    {/* <div className="horizontal-menu"> */}
                              
                                        {/* <MenuComponent items={this.AccountMenuItem} cssClass='dock-menu'></MenuComponent> */}
                                    {/* </div> */}
                                {/* </li> */}
                                {/* <li className="right-header list support"></li>  
                                <li className="right-header list tour"></li> */}
                            </ul>

                        </div>
                    </div>
                </div></div>


        </>
    )
}

export default FormHeader;