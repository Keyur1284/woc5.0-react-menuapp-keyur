/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

export const Navbar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">KIWI Foods</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/food">All Items</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Meals 
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/food/breakfast">Breakfast</Link></li>
                                <li><Link className="dropdown-item" to="/food/lunch">Lunch</Link></li>
                                <li><Link className="dropdown-item" to="/food/dinner">Dinner</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Veg/Non-Veg 
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/food/veg">Veg</Link></li>
                                <li><Link className="dropdown-item" to="/food/nonveg">Non-Veg</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                        {user ? (
                            <>
                                <p className="text-white m-3">{user?.displayName}</p>
                                <img src={user?.photoURL || "https://live.staticflickr.com/5694/30494157195_47f0c84c03_b.jpg"} alt="profile" width="50" height="50" className="rounded-circle me-3" />
                                <button className="btn btn-outline-danger" type="submit" onClick={() => auth.signOut()}>Sign Out</button>
                            </>
                        ) : (
                            
                            <button className="btn btn-info" type="submit" onClick={() => navigate("/login")} >Login</button>
                        )
                        }
                </div>
            </div>
        </nav>
    )
}