import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import Popup from 'reactjs-popup';
import './CSS/tdetails.css';
// import 'reactjs-popup/dist/index.css';

const Tdetails = (props) =>{
    const [islogin,setisactive] = useState(true);
    const editData=(e)=>{
        e.preventDefault();
        return 0;
    }
    if(islogin === true){ 
    return(<>
           <div className="container mt-5">
               <div className ='row justify-content-center'>
                   <h2 className = "my-4">Today's Hearings</h2>
               </div>
               <div className ="row justify-content-center">
                   <div className = "col-12">
                        <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <td>Sno.</td>
                                <td>Name</td>
                                <td>Last Date of Hearing</td>
                                <td>Add new Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>R.k Singh</td>
                                <td>23-01-2021</td>
                                <td><Popup trigger={<button className="btn btn-outline-info" style ={{width:'80%'}}> Add New Date</button>} modal>
                 { close =>(
                    <span className ="justify-content-center">
            <div className="card col-md-12 mx-auto infoCard">
                 <button className="close" onClick={close}>&times;</button>
                      <div className="card-body">
                            <div className ="row mx-auto justify-content-center">
                    <div className ="col-md-12 col-12">
                    <h3>Enter Next Date</h3>
                    <form className="row g-3" onSubmit ={editData}>
                        <div className="col-md-10">
                            <input type="date" className="form-control" id="inputFname"/>
                        </div>
                        <div className="col-12 ">
                            <Spring
                                from = {{opacity:0}}
                                to = {{opacity:1}}
                                config = {{delay:500,duration:1000}}
                                >
                                {props=>(
                                    <div style = {props}>
                                        <button type="submit" onClick={close} className="btn btn-info my-3">Save & send</button>
                                    </div>
                                )}
                            </Spring>
                            
                        </div>
                    </form>
                    </div>
                </div>          
                   {/* EDIT BUTTON */}                         
                         
                     </div>
              </div>
          </span>
                )}
                 </Popup>
                                </td>
                            </tr>
                            {/* <tr>
                                <td>1</td>
                                <td>Sameer Yadav</td>
                                <td>02-03-2021</td>
                                <td><button className="btn btn-info me-3">Add New date</button> 
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Anajni Gupta</td>
                                <td>15-02-2021</td>
                                <td><button className="btn btn-info me-3">Add New date</button> 
                                </td>
                            </tr> */}
                        </tbody>
                        </table>
                   </div>
               </div>
           </div>
    </>);}
    else{
        return<><div className="container mt-5">
        <div className ='row justify-content-center'>
            <h2 className = "my-4">Login To View Content</h2>
        </div>
        </div>

        </>
    }

}

export default Tdetails;