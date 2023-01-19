const { addDoc, collection } = require("firebase/firestore");
const { db } = require("./config/firebase");

const foodRef = collection(db, "food");

const addData = async () => {

    let data = {
        name: "Basted Eggs",
        price: 120,
        description: "This recipe produces a delicious, simple egg with satisfying, set whites and a creamy, runny yolk. It's similar to a poached egg, but more flavorful and less fussy.",
        eatable: false,
        type: "Breakfast",
        rating: 8.4,
        video: "https://www.youtube.com/watch?v=Kd3lDnP2dqA",
        image: "https://www.allrecipes.com/thmb/qwifKe4Fj1j8HZrujDDG9STsqwo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basted-eggs-mfs-4x3-80-1-2000-ee0e8767f2c44494980b349c39a116cd.jpg"
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

