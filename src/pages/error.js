import { useNavigate } from "react-router-dom"
import React from "react";

export const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="container" style={{height: "42.9vh"}}>
            <p className="display-1 text-danger">Error 404! Page not Found!</p>
                    <button className="btn btn-success btn-lg btn-block mt-2" type="submit" onClick={() => navigate("/")}>Go Back to Home</button>        
        </div>
    )
}