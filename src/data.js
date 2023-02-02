const { addDoc, collection } = require("firebase/firestore");
const { db } = require("./config/firebase");

const foodRef = collection(db, "food");

const addData = async () => {

    let data = {
        name: "Noodles",
        price: "₹150",
        description: "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added.",
        eatable: true,
        type: "Dinner",
        rating: 7.9,
        video: "https://www.youtube.com/watch?v=ulhRORJpuBM",
        image: "https://static.toiimg.com/photo/79693966.cms"
    }
        console.log(data);
    data = await addDoc(foodRef, {
        
        name: data.name,
        price: data.price,
        description: data.description,
        eatable: data.eatable,
        type: data.type,
        rating: data.rating,
        video: data.video,
        image: data.image,
    });
    console.log(data);
}

addData();

