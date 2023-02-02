const { addDoc, collection } = require("firebase/firestore");
const { db } = require("./config/firebase");

const foodRef = collection(db, "food");

const addData = async () => {

    let data = {
        name: "Sausage Strata",
        price: 90,
        description: "Tasty egg casserole that husband approves! I frequently make this dish because it's so easy to make. This recipe can be easily doubled or tripled, but you may have to cook it longer.",
        eatable: false,
        type: "Breakfast",
        rating: 8.1,
        video: "https://www.youtube.com/watch?v=g0A_WpD7wWI",
        image: "https://www.allrecipes.com/thmb/LnhLm0aOuo9YUcMNLDz72zqnBsY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4516609-87a9bdd46fb14bb1ad853b2185e81d92.jpg"
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

