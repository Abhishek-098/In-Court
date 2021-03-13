import React from 'react';
import { NavLink } from 'react-router-dom';

import ClientsTable from './ClientsTable';
import './CSS/home.css';
const Home = () =>{
    return(<>
        <section>
            <div className = "container-fluid">
                <div className ="row">
                    <div className = "background_img ">
                    <div className="hero-text">
                        <div className ="content">
                            <h1>Welcome to Inlaw</h1>
                            <h3>Let's Connect</h3>
                            <br/>
                            <NavLink to ='/add-client' className ="btn btn-info">Add Clients</NavLink>
                        </div>
                     </div>
                    </div>
                </div>
                
            </div>
            <div className='container'>
                <div className = 'row'>
                    <h2 className ="my-4">Your Clients</h2>
                </div>
                <div className = 'row my-4 justify-content-center'>
                        <div className = "col-md-10 col-12">
                            <ClientsTable/>
                        </div>
                </div>
                
            </div>
            <div className ="container-fluid footer">
                <div className ='row mt-5'>
                    <div className='col-12'>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">About Us</h2>
                            <h4 className="card-subtitle mb-2 text-muted">Here to give you stress-free life</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    </>);

}

export default Home;