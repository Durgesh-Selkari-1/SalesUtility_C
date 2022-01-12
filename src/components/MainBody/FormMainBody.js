
import React from 'react';
import AppRoutes from '../../AppRoutes';
import './FormMainBody.css';

function FormMainBody() {

    //    function openClick() {
    //         this.sidebarobj.toggle();
    //     }
    return (
        <>
            <div className="control-section ">
                <div id="wrapper" >
                    <div className="col-lg-12 col-sm-12 col-md-12 p-0 m-0">
                        <div className="main-content" id="maintext">
                            <div className=" bg-light  py-5">
                                <div className='py-5' >
                                <AppRoutes/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormMainBody;


