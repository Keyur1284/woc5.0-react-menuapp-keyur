import { auth, googleProvider, githubProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../App.css";
import React from "react";

export const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {      
            
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
        navigate("/");
    }

    const signInWithGithub = async () => {
        const result = await signInWithPopup(auth, githubProvider);
        console.log(result);
        navigate("/");
    }

    return (
        <div className="container mt-1 text-white" style={{height: "100vh"}}>
            <p className="display-3">Sign in with Google to continue</p>
            <button onClick={signInWithGoogle} className="btn btn-light foodcard"> <GoogleIcon /> Sign in with Google</button>
            <p className="display-5 mt-4">Or</p>
            <p className="display-3">Sign in with Github to continue</p>
            <button onClick={signInWithGithub} className="btn btn-light foodcard"> <GitHubIcon />  Sign in with Github</button>
        </div>
    )
}