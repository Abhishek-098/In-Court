import React from 'react';

const Tdetails = () =>{
    return(<>
           <div className="container mt-5">
               <div className ='row justify-content-center'>
                   <h2 className = "my-4">Today's Hearings</h2>
               </div>
               <div className ="row justify-content-center">
                   <div className = "col-12">
                        <table class="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <td>Sno.</td>
                                <td>Name</td>
                                <td>Status</td>
                                <td>View Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Abhishek Chauhan</td>
                                <td>Pending</td>
                                <td><button  className = "btn btn-outline-info" style ={{width:'80%'}}>View</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Abhishek Chauhan</td>
                                <td>Pending</td>
                                <td><button  className = "btn btn-outline-info" style ={{width:'80%'}}>View</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Abhishek Chauhan</td>
                                <td>Pending</td>
                                <td><button  className = "btn btn-outline-info" style ={{width:'80%'}}>View</button></td>
                            </tr>
                        </tbody>
                        </table>
                   </div>
               </div>
           </div>
    </>);

}

export default Tdetails;