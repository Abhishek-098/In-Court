import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './CSS/tdetails.css';

import { Spring } from 'react-spring/renderprops';


  const ClientsTable = (props) =>{
    const [edit, setEdit] = useState(false);
    const [cData,eData] = useState({
        Fname : props.Fname,
        Lname : props.Lname,
        Phone : props.Phone,
        Adhar : props.Address,
        Address : props.Address,
        City : props.City,
        Pincode : props.Pincode,
        Ps : props.PStatement
    });
    const sendcDetails =(values) =>{
        const data = values.target.value;
        const type = values.target.name;
        eData((prev)=>{
            if (type ==="fname"){
                return{
                    Fname:data,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="lname")
        {
            return{
                    Fname:prev.Fname,
                    Lname:data,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="phone")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:data,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="adhar")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:data,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="address")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:data,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="city")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:data,
                    Pincode:prev.Pincode,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="pincode")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:data,
                    PStatement:prev.PStatement,
            };
        }
        else if(type ==="problem")
        {
            return{
                    Fname:prev.Fname,
                    Lname:prev.Lname,
                    Phone:prev.Phone,
                    Adhar:prev.Adhar,
                    Addres:prev.Address,
                    City:prev.City,
                    Pincode:prev.Pincode,
                    PStatement:data,
            };
        }

    });
}

    const editData =(e)=>{
        e.preventDefault();
        setEdit(false);
        alert(cData.Fname);
        }

    
    return(<>
           <tr>
             <td>{props.num}</td>
             <td>{props.Fname}</td>
             <td>{props.status}</td>
             <td><Popup trigger={<button className="btn btn-outline-info" style ={{width:'80%'}}>View</button>} modal>
                 { close =>(
                    <span className ="justify-content-center">
            <div className="card col-md-8 mx-auto infoCard">
                 <button className="close" onClick={close}>&times;</button>
                      <div className="card-body">
                        {!edit ? 
                        <>
                         <h5 className="card-title">{`${props.Fname} ${props.Lname}`}</h5>
                         <h6 className="card-subtitle mb-2 text-muted">{`${props.Address}, ${props.City}`}</h6>
                         <p className="card-text">{props.PStatement}</p>
                         <h6 className="card-subtitle mb-2">{`Phone: ${props.Phone}`}</h6>
                         <h6 className="card-subtitle mb-2">{`Adhar no.: ${props.Adhar}`}</h6>
                         <h6 className="card-subtitle mb-2">{`Dates: ${props.hrdates}`}</h6> 
                         <button className="btn btn-info me-3" style ={{width:"100px"}} onClick={()=>setEdit(true)}>Edit</button>
                         <button className="btn btn-danger" style ={{width:"100px"}}>Delete</button>
                         </>
                         : 
                         (<>
                            <div className ="row mx-auto justify-content-center">
                    <div className ="col-md-10 col-12">
                    <h3>Edit Client's Details</h3>
                    <form className="row g-3" onSubmit ={editData}>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputFname"  name="fname"  placeholder="First Name" value={cData.Fname}  onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputLname"  name="lname" placeholder="Last Name" value={cData.Lname} onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" id="inputPhone"  name="phone" placeholder="Phone" value={cData.Phone} onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputAdhar"  name="adhar" placeholder="Adhar number" value={cData.Adhar} onChange={sendcDetails}/>
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"  name="address"  value={cData.Address} onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputCity"  name="city" placeholder="City" value={cData.City} onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control" id="inputZip"  name="pincode" placeholder="Pincode" value={cData.Pincode} onChange={sendcDetails}/>
                        </div>
                        <div className="col-md-12">
                            <textarea type="text" className="form-control" id="inputProb"  name="problem" placeholder="Problem Statement" value={cData.Ps} onChange={sendcDetails}/>
                        </div>
                        <div className="col-12 ">
                            <Spring
                                from = {{opacity:0}}
                                to = {{opacity:1}}
                                config = {{delay:500,duration:1000}}
                                >
                                {props=>(
                                    <div style = {props}>
                                        <button type="submit" className="btn btn-info my-3">Done</button>
                                    </div>
                                )}
                            </Spring>
                            
                        </div>
                    </form>
                    </div>
                </div>
                         </>) }               
                   {/* EDIT BUTTON */}                         
                         
                     </div>
              </div>
          </span>
                )}
                 </Popup>
            </td>
          </tr>
                 
     </>);
  }


export default ClientsTable;