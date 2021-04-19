import React from 'react';
import { NavLink } from 'react-router-dom';
import ClientsTable from './ClientsTable';
import { Spring } from 'react-spring/renderprops';
import './CSS/home.css';


// THIS IS JUST A SAMPLE ALL BACKEND NEED TO DO IS TO FETCH DATA AND STORE IT IN 'sample' VARIABLE AND REMOVE THIS AFTER THE FETCH.

const sample =[{Name:"Abhishek",Status:"Pending",hrdates:['20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021','20-12-2020 ','10-01-2021'],address:"civil lines near tirwa kothi road fetehgarh",city:"Farrukhabad", phone:9140716702, adhar:12345678901234 , ps:"Some quick example text to build on the card title and make up the bulk of the card's content. this is to notify that we good ones and never tried harming somebody   of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!!vv"},
               {Name:"Ayush",Status:"Complete" , address:"civil lines near tirwa kothi road fetehgarh",city:"Farrukhabad", phone:9140716702, adhar:12345678901234 , ps:"Some quick example text to build on the card title and make up the bulk of the card's content. this is to notify that we good ones and never tried harming somebody   of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!!vv"},
               {Name:"Harshit",Status:"Pending" , address:"civil lines near tirwa kothi road fetehgarh",city:"Farrukhabad", phone:9140716702, adhar:12345678901234 , ps:"Some quick example text to build on the card title and make up the bulk of the card's content. this is to notify that we good ones and never tried harming somebody   of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!! of the card's content. this is to notify that we good ones and never tried harming somebody !!!vv"},
               {Name:"Chauhan",Status:"Done" }];



// SENDING DATA ONE BY ONE TO HOME COMPONENT.

const nsamp = sample.map((value,index)=>{
    return<><ClientsTable 
            key ={index}
            num = {index+1}
            Fname = {value.Name}
            Lname ={value.Lname}
            status = {value.Status} 
            Address = {value.address}
            City = {value.city}
            PStatement ={value.ps}
            Phone ={value.phone}
            Adhar ={value.adhar}
            hrdates ={value.hrdates}

    /></>
});


const Home = () =>{
    
    return(<>
        <section>
            <div className = "container-fluid">

            {/* THIS IS RESPONSIBLE FOR THE HOME PAGE'S INITIAL STAGE */}

                <div className ="row">
                    <div className = "background_img ">
                    <Spring
                            from ={{ opacity:0, marginTop:0}}
                            to = {{ opacity:1,marginTop:220 }}
                            config = {{delay:100,duration:1000}} 
                            
                        >   
                            {props=>(
                                <div style ={props}>
                                    <div className="hero-text">
                                    <div className ="content">
                                        <h1>WELCOME</h1>
                                        <h3>This is In-Court</h3>
                                        <br/>
                                        <NavLink to ='/add-client' className ="btn btn-info " >Add Clients</NavLink>
                                    </div>

                                </div>
                           
                     </div>
                     )}
                        </Spring>
                    </div>
                    <div className ="shade"></div>
                </div>
                
            </div>
            <div className='container'>
                <div className = 'row'>

                {/* THIS IS WHERE ALL THE CLIENTS ARE BEING DISPLAYED */}

                    <h2 className ="my-4">Your Clients</h2>
                </div>
                <div className = 'row my-4 justify-content-center'>
                        <div className = "col-md-10 col-12">
                            <Spring
                                from ={{ opacity:0, marginLeft:-500, marginRight:500}}
                                to = {{ opacity:1,marginLeft:0,marginRight:0}}
                                config = {{delay:0,duration:1000}} 
                            >

                                {props=>(
                                    <div style ={props}>
                                    <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <td>Sno.</td>
                                    <td>Name</td>
                                    <td>Status</td>
                                    <td>View Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                     {nsamp}                                                  
                                     </tbody>
                    </table>
                                    </div>
                                )}
                            </Spring>
                            
                        </div>
                </div>
                
            </div>

            {/* FOOTER SECTION */}

            <div className ="container-fluid footer">
                <div className ='row mt-5'>
                    <div className='col-12'>
                    <div className="card fcard">
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