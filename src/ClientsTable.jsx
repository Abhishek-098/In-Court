import React from 'react';

const ClientsTable = () =>{
    return(<>
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
                        <td ><button  className = "btn btn-outline-info" style ={{width:'80%'}}>View</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Abhishek Chauhan</td>
                        <td>Pending</td>
                        <td><button  className = "btn btn-outline-info" style ={{width:'80%'}}>View</button></td>
                    </tr>
                </tbody>
            </table>

    </>);
}

export default ClientsTable;