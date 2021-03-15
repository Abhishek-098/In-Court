import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import './CSS/login.css';

const Login = () =>{

    //  TO GET DETAILS WHILE INPUT: 

    const [sidetails , inputSI ] = useState({
        email:"",
        pass :"",
    });
    const inputSignin = (values)=>{
        const data = values.target.value;
        const type = values.target.name;
        inputSI((prev)=>{
            if (type === 'vmail'){
                return {
                    email : data,
                    pass : prev.pass,
                };
            }
            else if(type ==='pass'){
                return{
                    email : prev.email,
                    pass : data,
                };
            }
        })
    }
    const signinSubmit =(e)=>{
        e.preventDefault();
        if (sidetails.email === "" || sidetails.pass ===""){
            alert("Please input valid values");
        }
        else{

            alert( `My email is ${sidetails.email} and password is ${sidetails.pass}`);
    }
}

    // TO GET DETAILS WHILE SIGNUP

    const [sodetails , inputSO] =useState({
        Fname : "",
        Lname : "",
        Email : "",
        Lno : "",
        Address : "",
        City : "",
        Pincode : "",
        Phone : "",
        Pass1 : "",
        Pass2 : "",

    });
    const inputSignup = (values) =>{
        const data = values.target.value;
        const type = values.target.name;
        inputSO((prev)=>{
            if( type === 'fname'){
                return{
                    Fname:data,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };

            }
            else if (type === 'lname'){
                return{
                    Fname:prev.Fname,
                    Lname : data,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'lname'){
                return{
                    Fname:prev.Fname,
                    Lname : data,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'lname'){
                return{
                    Fname:prev.Fname,
                    Lname : data,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'email'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : data,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'lno'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : data,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'address'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : data,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'city'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno :  prev.Lno,
                    Address : prev.Address,
                    City : data,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'pincode'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : data,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'phone'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : data,
                    Pass1 : prev.Pass1,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'pass1'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : data,
                    Pass2 : prev.Pass2,

                };
            }
            else if (type === 'pass2'){
                return{
                    Fname:prev.Fname,
                    Lname : prev.Lname,
                    Email : prev.Email,
                    Lno : prev.Lno,
                    Address : prev.Address,
                    City : prev.City,
                    Pincode : prev.Pincode,
                    Phone : prev.Phone,
                    Pass1 : prev.Pass1,
                    Pass2 : data,

                };
            }
        });
    }
    const signupSubmit =(e) =>{
        e.preventDefault();
        if(sodetails.Fname !== "" && sodetails.Email !== "" && sodetails.Lno !== "" && sodetails.Phone !=="" && sodetails.Pincode !=="" && sodetails.City !== "" && sodetails.Pass1 !==""){
            if (sodetails.Pass1 === sodetails.Pass2){

            // Display only remove while creating backend 

                alert( `My name is ${sodetails.Fname} ${sodetails.Lname}. My email id is ${sodetails.Email}, Lic no is ${sodetails.Lno}. Address is ${sodetails.Address} 
        ${sodetails.City} ${sodetails.Pincode}. My phone number is ${sodetails.Phone} and these are my passwords ${sodetails.Pass1} and ${sodetails.Pass2}.`)
        }
        else{
            alert("Passwords don't  match !");
        }
    }
    else{
        alert("Please enter required values !!!")
    }
        
        
    }
    return(<>
            <section>
                <div className = 'container'>
                    <div className ='row'>
                        <div className = "col-md -5 box">
                            <div className = "row mt-5 justify-content-center">
                                <h2 className ="my-2 col-md-5">Already a User</h2>
                            </div>
                            <div className ="row mt-4 justify-content-center">
                            <form className ="mt-3 col-md-8" onSubmit ={signinSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label login">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange ={inputSignin} name ="vmail" value ={sidetails.email}/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label login">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange ={inputSignin} name ="pass" value ={sidetails.pass}/>
                                </div>
                                <div className ='row justify-content-center'>
                                <button type="submit" className="btn btn-outline-info col-md-3 col-8">LogIn</button>
                                </div>
                            </form>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        <div className = "col-md-6 main mt-5">
                                <div className = "row my-3 justify-content-center">
                                    <h2 className ="my-2">New User</h2>
                                </div>
                                <form className="row g-3" onSubmit ={signupSubmit}>
                                    <div className="col-md-6">
                                        <label htmlFor="inputfname" className="form-label">First Name*</label>
                                        <input type="text" className="form-control" id="inputfname" onChange ={inputSignup} name="fname" value ={sodetails.Fname}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputLname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="inputlname" onChange ={inputSignup} name="lname" value ={sodetails.Lname}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email*</label>
                                        <input type="email" className="form-control" id="inputEmail4" onChange ={inputSignup} name="email" value ={sodetails.Email}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputlic" className="form-label">Licence no.*</label>
                                        <input type="text" className="form-control" id="inputlicence" onChange ={inputSignup} name="lno" value ={sodetails.Lno}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange ={inputSignup} name="address" value ={sodetails.Address}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City*</label>
                                        <input type="text" className="form-control" id="inputCity" onChange ={inputSignup} name="city" value ={sodetails.City}/>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="inputZip" className="form-label">Pincode*</label>
                                        <input type="text" className="form-control" id="inputZip" onChange ={inputSignup} name="pincode" value ={sodetails.Pincode}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputphone" className="form-label">Phone*</label>phone
                                        <input type="number" className="form-control" id="inputphone" onChange ={inputSignup} name="phone" value ={sodetails.Phone}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword1" className="form-label">Password*</label>
                                        <input type="password" className="form-control" id="inputPassword1" onChange ={inputSignup} name="pass1" value ={sodetails.Pass1}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword2" className="form-label">Confirm Password*</label>
                                        <input type="password" className="form-control" id="inputPassword2" onChange ={inputSignup} name="pass2" value ={sodetails.Pass2}/>
                                    </div>
                                    <div className="col-12 my-3">
                                        <div className="row justify-content-center">
                                        <button type="submit" className="btn btn-outline-info col-md-4 col-8">Sign Up</button>
                                    </div>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                
                </div>
            </section>
    </>);
}

export default Login;