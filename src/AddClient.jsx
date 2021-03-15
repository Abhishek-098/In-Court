import React, { useState } from 'react';
import './CSS/add.css';

const AddClient = () =>{
    const [client,inputClient] = useState({
        Fname:"",
        Lname:"",
        Phone:"",
        Adhar:"",
        Address:"",
        City:"",
        Pincode:"",
        PStatement:"",
    });
    const sendcDetails =(values) =>{
        const data = values.target.value;
        const type = values.target.name;
        inputClient((prev)=>{
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
        

    const AddClient =(e) =>{
        e.preventDefault();
        if (client.Fname !=="" && client.Phone!=="" && client.City!=="" && client.PStatement !==""){

            // Get clients data here 

            alert( `Name of Client is ${client.Fname} and problem is ${client.PStatement}.  `)
        }
        else{
            alert("Please enter required Fields !");
        }
        

    }
    return(<>
            <div className ="container mt-5">
                <div className ="row mt-5 justify-content-center">
                    <h2 className ="my-4"> Enter Client's Details</h2>
                </div>
                <div className ="row mx-auto justify-content-center">
                    <div className ="col-md-10 col-12">
                    <form className="row g-3" onSubmit ={AddClient}>
                        <div className="col-md-6">
                            <label for="inputfname" className="form-label">First Name*</label>
                            <input type="text" className="form-control" id="inputFname" onChange ={sendcDetails} name="fname" value={client.Fname}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputLname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLname" onChange ={sendcDetails} name="lname" value={client.Lname}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Phone*</label>
                            <input type="number" className="form-control" id="inputPhone" onChange ={sendcDetails} name="phone" value={client.Phone}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAdhar" className="form-label">Adhar number</label>
                            <input type="text" className="form-control" id="inputAdhar" onChange ={sendcDetails} name="adhar" value={client.Adhar}/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange ={sendcDetails} name="address" value={client.Address}/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City*</label>
                            <input type="text" className="form-control" id="inputCity" onChange ={sendcDetails} name="city" value={client.City}/>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">PinCode</label>
                            <input type="text" className="form-control" id="inputZip" onChange ={sendcDetails} name="pincode" value={client.Pincode}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputprob" className="form-label">Problem Statement*</label>
                            <textarea type="text" className="form-control" id="inputProb" onChange ={sendcDetails} name="problem" value={client.PStatement}/>
                        </div>
                        <div className="col-12 ">
                            <button type="submit" className="btn btn-info my-3">Add and Send Notification</button>
                        </div>
                    </form>
                    </div>
                </div>

            </div>
    </>);
}

export default AddClient;