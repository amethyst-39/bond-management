// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// import './BondDetails.css'; // Import the CSS file

// function BondDetails() {
//     const location = useLocation()
//     const bondDetails = location.state
//     console.log("Bond Details")
//     console.log(bondDetails)
 
//     if (!bondDetails) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>Trade Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Book Name</th>
//                         <th>Counterparty Name</th>
//                         <th>Quantity</th>
//                         <th>Status</th>
//                         <th>Price</th>
//                         <th>Buy/Sell</th>
//                         <th>Trade Date</th>
//                         <th>Settlement Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {bondDetails.map(bond => (
//                         <tr key={bond.id}>
//                             <td>{bond.id}</td>
//                             <td>{bond.bookName}</td>
//                             <td>{bond.counterpartyName}</td>
//                             <td>{bond.quantity}</td>
//                             <td>{bond.status}</td>
//                             <td>{bond.price}</td>
//                             <td>{bond.buySell}</td>
//                             <td>{bond.tradeDate}</td>
//                             <td>{bond.settlementDate}</td>
//                         </tr>
//                     ))}
//                 </tbody>

//             </table>
//         </div>
//     );
// }

// export default BondDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

import './BondDetails.css'; // Import the CSS file

function BondDetails() {
    const location = useLocation()
    const bondDetails = location.state

    if (!bondDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="navbar">
                <h1>Bond Tracker</h1>
            </div>
            
            <h2 className="centered-heading">Trade Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Counterparty Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Buy/Sell</th>
                        <th>Trade Date</th>
                        <th>Settlement Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bondDetails.map(bond => (
                        <tr key={bond.id}>
                            <td>{bond.id}</td>
                            <td>{bond.bookName}</td>
                            <td>{bond.counterpartyName}</td>
                            <td>{bond.quantity}</td>
                            <td>{bond.status}</td>
                            <td>{bond.price}</td>
                            <td>{bond.buySell}</td>
                            <td>{bond.tradeDate}</td>
                            <td>{bond.settlementDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Back to Dashboard</Link> 
        </div>
    );
}

export default BondDetails;

