import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";
import "../App.css"

export const Profile = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div className="container text-white" style={{height: "100vh"}}>
            <h1 className="display-1 text-center">Profile</h1>
            <div className="row mt-5 d-flex justify-content-start">
            <div className="col-4  d-flex justify-content-start">
                    <img src={user?.photoURL} alt="profile" className="rounded-circle"/>
                </div>
                <div className="col-8  d-flex justify-content-end">
                    <div className="m-5 p-2 align-items-start d-flex test text-white">
                    <p className="display-6">Name: {user?.displayName}</p>
                    <p className="display-6">Email: {user?.email}</p>
                    <p className="display-6">Phone: {Math.ceil(Math.random() * 99999999999 % 10000000000)}</p>
                    <p className="display-6">Orders: {Math.ceil(Math.random() * 1000 % 20)}</p>
                    <button className="btn btn-danger" onClick={() => {auth.signOut(); navigate("/")}}>Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
    )

}