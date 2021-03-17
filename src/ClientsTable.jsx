import React from 'react';
import Popup from 'reactjs-popup';
import './CSS/tdetails.css';
               
const ClientsTable = (props) =>{
    return(<>
                    <tr>
                        <td>{props.num}</td>
                        <td>{props.name}</td>
                        <td>{props.status}</td>
                        <td><Popup trigger={<button className="btn btn-outline-info" style ={{width:'80%'}}>View</button>} modal>
                                { close =>(
                                        <span className ="justify-content-center">
                                        <div className="card col-md-8 mx-auto infoCard">
                                        <button className="close" onClick={close}>&times;</button>
                                            <div className="card-body">
                                                <h5 className="card-title">{props.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{`${props.address}, ${props.city}`}</h6>
                                                <p className="card-text">{props.ps}</p>
                                                <h6 className="card-subtitle mb-2">{`Phone: ${props.phone}`}</h6>
                                                <h6 className="card-subtitle mb-2">{`Adhar no.: ${props.adhar}`}</h6>
                                                <h6 className="card-subtitle mb-2">{`Dates: ${props.hrdates}`}</h6>
                                                
                                                <button className="btn btn-info me-3" style ={{width:"100px"}}>Edit</button>
                                                <button className="btn btn-danger" style ={{width:"100px"}}>Delete</button>
                                            </div>
                                        </div>
                                        </span>
                                        )}
                                    </Popup></td>
                    </tr>
                   
                
    </>);
}



export default ClientsTable;