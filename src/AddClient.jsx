import React from 'react';
// import { Redirect } from 'react-router';
import './CSS/add.css';

const AddClient = () =>{
    const AddClient =(e) =>{
        e.preventDefault();
        console.log("Data Saved");
        

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
                            <label for="inputfname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputFname"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputLname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputLname"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="inputPhone"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputAdhar" className="form-label">Adhar number</label>
                            <input type="text" className="form-control" id="inputAdhar"/>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">PinCode</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputprob" className="form-label">Problem Statement</label>
                            <textarea type="text" className="form-control" id="inputProb"/>
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