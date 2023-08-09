import React, { useState } from "react";
import axios from "axios";
import "./DeleteSecurity.css"; // Import the CSS file
import { Link } from "react-router-dom";

const DeleteSecurity = () => {
    const [isin, setIsin] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDelete = async () => {
        try {
            axios
                .delete(`http://localhost:8080/deleteSecurity?isin=${isin}`)
                .then((response) => {
                    console.log(response.status);
                    if (response.status == 404) {
                        console.log("if");
                    } else if (response.status == 200) {
                        console.log("else if");
                        setErrorMessage("");
                        setDeleteSuccess(true);
                        setIsin(""); // Reset input field after successful delete
                    }
                });
        } catch (error) {
            console.error("Error deleting security:", error);
            setErrorMessage("ISIN does not exist");
            setDeleteSuccess(false);
            // setDeleteSuccess(false);
        }
    };

    const [formValues, setFormValues] = useState({
        isin: "",
        cusip: "",
        issuer: "",
        maturityDate: "",
        coupon: "",
        type: "",
        faceValue: "",
        status: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        console.log("before axios");

        const result = await axios
            .post(
                `http://localhost:8080/createSecurity?id=0&isin=${formValues.isin}&cusip=${formValues.cusip}&issuer=${formValues.issuer}&maturityDate=${formValues.maturityDate}&coupon=${formValues.coupon}&type=${formValues.type}&faceValue=${formValues.faceValue}&status=${formValues.status}`
            )
            .then(() => {
                console.log("after axios");
            });
        console.log(result);
    };

    return (
        <div>
            {/* navbar  */}
            <div className="navbar">
                <div className="Bond">
                    <h1>Bond Tracker</h1>
                </div>
                <div className="Back">
                    <Link
                        to="/"
                        style={{
                            color: "white",
                            marginLeft: 0,
                            marginRight: "1rem",
                        }}
                    >
                        Back to Dashboard
                    </Link>{" "}
                </div>
            </div>

            {/* delete security  */}
            <div className="delSecurity">
                <div className="delete-security-container">
                    <h2 className="create-security-title">
                        Delete Security using ISIN
                    </h2>
                    <label className="delete-security-label">
                        ISIN&nbsp;:&nbsp;
                        <input
                            type="text"
                            value={isin}
                            onChange={(e) => setIsin(e.target.value)}
                        />
                    </label>
                    <button
                        className="delete-security-button"
                        onClick={handleDelete}
                    >
                        Delete Security
                    </button>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                    {deleteSuccess && (
                        <p className="success-message">Delete successful</p>
                    )}
                </div>
            </div>

            <hr />

            {/* create security  */}
            <div className="createSecurity">
                <div className="form-container">
                    <h2 className="create-security-title">
                        Create Security
                    </h2>
                    <form onSubmit={handleSubmit} className="custom-form">
                      <div className="Column1">
                      <label className="delete-security-label">
                            ISIN&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="isin"
                                value={formValues.isin}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            CUSIP&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="cusip"
                                value={formValues.cusip}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            Issuer&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="issuer"
                                value={formValues.issuer}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            Maturity Date&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="maturityDate"
                                value={formValues.maturityDate}
                                onChange={handleChange}
                                placeholder="yyyy-mm-dd"
                                className="input-field"
                            />
                        </label>
                        
                      </div>
                       <div className="Column2">
                       <label className="delete-security-label">
                            Coupon&nbsp;:&nbsp;
                            <input
                                type="number"
                                name="coupon"
                                value={formValues.coupon}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            Type&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="type"
                                value={formValues.type}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            Face Value&nbsp;:&nbsp;
                            <input
                                type="number"
                                name="faceValue"
                                value={formValues.faceValue}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </label>
                        <label className="delete-security-label">
                            Status&nbsp;:&nbsp;
                            <input
                                type="text"
                                name="status"
                                value={formValues.status}
                                onChange={handleChange}
                                placeholder="PAID/ UNPAID/ UPCOMING"
                                className="input-field"
                            />
                        </label>
                       </div>
                        <div className="Column3">
                        <button type="submit" className="delete-security-button">
                            Submit
                        </button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeleteSecurity;
