import { Link } from "react-router-dom";
import "../App.css"


export const Home = () => {
    
    return (
        <div className="imagehome">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1 className="display-1 rounded-3 p-2" style={{ textShadow: "1px 1px #11303F", backgroundColor: "white", opacity: "75%", color: "#11303F", marginTop: "170px" }}>Welcome to KIWI Foods!</h1>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                        <h1 className="display-6 rounded-3 p-2" style={{ textShadow: "1px 1px #11303F", backgroundColor: "white", opacity: "75%", color: "#11303F", marginTop: "0px" }}>Select the type of food that you want to eat</h1>
                    </div>
                
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <Link to="/food" className="foodbutton mx-2 mt-2">Any</Link>
                    <Link to="/food/veg" className="foodbutton mx-2 mt-2">Vegetarian</Link>
                    <Link to="/food/nonveg" className="foodbutton mx-2 mt-2">Non-Vegetarian</Link>
                    <Link to="/food/breakfast" className="foodbutton mt-2">Breakfast</Link>
                    <Link to="/food/lunch" className="foodbutton mx-2 mt-2">Lunch</Link>
                    <Link to="/food/dinner" className="foodbutton mx-2 mt-2">Dinner</Link>
                    </div>
                    </div>

                <div>
                    <div className="row  mt-5">
                            <div className="col cupcake d-flex justify-content-center" style={{height: "150px"}}>
                            <img src="https://freesvg.org/img/icecream-chocolate.png" alt="cupcake" />
                            </div>
                        <div className="col pizza d-flex justify-content-center" style={{height: "150px"}}>
                            <img src="https://freesvg.org/img/1548611293.png" alt="pizza" />
                         </div>
                         <div className="col burger d-flex justify-content-center" style={{height: "150px"}}>
                            <img src="https://repository-images.githubusercontent.com/456213451/a2e3f991-942f-4dbc-8fe2-0b1b1aa2ed33" alt="burger" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}