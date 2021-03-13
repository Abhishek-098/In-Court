import React from 'react';
// import { NavLink } from 'react-router-dom';

import './CSS/login.css';

const Login = () =>{
//     const login =(e) =>{
//         e.preventDefault();
//     }
    return(<>
            <section>
                <div className = 'container'>
                    <div className ='row'>
                        <div className = "col-md -5 box mt-5">
                            <div className = "row mt-5 justify-content-center">
                                <h2 className ="my-2">Already a User</h2>
                            </div>
                            <div className ="row mt-4 justify-content-center">
                            <form className ="mt-3">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label login">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label login">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className ='row justify-content-center'>
                                <button type="submit" class="btn btn-outline-info">LogIn</button>
                                </div>
                            </form>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        <div className = "col-md-6 main mt-5">
                                <div className = "row my-3 justify-content-center">
                                    <h2 className ="my-2">New User</h2>
                                </div>
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputfname" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="inputfname"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputLname" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="inputlname"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputlic" class="form-label">Licence no.</label>
                                        <input type="text" class="form-control" id="inputlicence"/>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">City</label>
                                        <input type="text" class="form-control" id="inputCity"/>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Pincode</label>
                                        <input type="text" class="form-control" id="inputZip"/>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputphone" class="form-label">Phone</label>
                                        <input type="number" class="form-control" id="inputphone"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword1"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword2" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="inputPassword2"/>
                                    </div>
                                    <div class="col-12 my-3">
                                        <div className="row justify-content-center">
                                        <button type="submit" class="btn btn-outline-info">Sign Up</button>
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