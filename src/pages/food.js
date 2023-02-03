/* eslint-disable react/jsx-no-target-blank */
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import "../App.css";
import React from "react";


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
        <div className="justify-content-start row row-cols-1 bg-dark row-cols-md-3 g-1 m-0 p-0">
            {
                foods.sort((a, b) => (b.rating - a.rating)).map((food, index) => (
                    <div className="col"  key={index}>
                    <div className="card foodcard w-100 h-100 text-start bg-dark text-white m-2 p-5">
                        <img src={food.image} className="card-img-top w-100" style={{height: "300px"}} alt={food.name} />
                        <div className="card-body"> 
                            <h5 className="card-title display-6">{food.name}</h5>
                            <h6 className="card-text display-6">Price: {food.price}</h6>
                            <h6 className="card-text" style={{height: "175px", marginTop: "55px"}}>Description: {food.description}</h6>
                            <h6 className="card-text">Food type: {food.eatable? "Vegetarian" : "Non-vegetarian"}, {food.type}</h6>
                            <h6 className="card-text rating rounded-3">Rating: {food.rating}/10</h6>
                            <a className="btn btn-info" href={food.video} target="_blank" >Recipe video</a>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};