/* eslint-disable react/jsx-no-target-blank */
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";


export const Food = (params) => {
    const [foods, setFoods] = useState([]);
    const foodRef = collection(db, "food");

    const getFood = async (type) => {
        const foodSnap = await getDocs(foodRef);

        let foodList = foodSnap.docs.map((doc) => (doc.data()));
        if( type === "veg")
            foodList = foodList.filter((food) => (food.eatable===true));
        else if(type === "nonveg")
            foodList = foodList.filter((food) => (food.eatable===false));
        
        else if(type === "breakfast")
            foodList = foodList.filter((food) => (food.type === "Breakfast"));
        
        else if(type === "lunch")
            foodList = foodList.filter((food) => (food.type === "Lunch"));
        
        else if(type === "dinner")
            foodList = foodList.filter((food) => (food.type === "Dinner"));
        console.log(type,foodList.filter(food => (food.type === "Dinner")));
        setFoods(foodList);
        
    }

    useEffect(() => {
        getFood(params.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return (
        <div className="d-flex justify-content-start row row-cols-1 row-cols-md-3 g-3 App keyur">
            {
                foods?.map((food, index) => (
                    <div className="col "  key={index}>
                    <div className="card h-100 text-start  mt-3">
                        <img src={food.image} className="card-img-top " alt={food.name} />
                        <div className="card-body"> 
                            <h5 className="card-title display-6">Item Name: {food.name}</h5>
                            <h6 className="card-text">Price: {food.price}</h6>
                            <h6 className="card-text">Description: {food.description}</h6>
                            <h6 className="card-text">Food type: {food.eatable? "Vegetarian" : "Non-vegetarian"}, {food.type}</h6>
                            <h6 className="card-text">Rating: {food.rating}/10</h6>
                            <a className="btn btn-primary" href={food.video} target="_blank" >Recipe video</a>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};