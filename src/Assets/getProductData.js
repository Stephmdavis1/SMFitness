import all_product from "./all_product";



import p1_img from "./p1_img.png";
import p2_img from "./p2_img.png";
import p3_img from "./p3_img.png";
import p4_img from "./p4_img.png";
import p5_img from "./p5_img.png";
import p6_img from "./p6_img.png";
import p7_img from "./p7_img.png";
import p8_img from "./p8_img.png";
import p9_img from "./p9_img.png";
import p10_img from "./p10_img.png";
import p11_img from "./p11_img.png";
import p12_img from "./p12_img.png";
import p13_img from "./p13_img.png";
import p14_img from "./p14_img.png";
import p15_img from "./p15_img.png";
import p16_img from "./p16_img.png";
import p17_img from "./p17_img.png";
import p18_img from "./p18_img.png";
import p19_img from "./p19_img.png";



const new_products = [
  {
    id: "price_1Q4VZ3RxHifnpxXm8OixdpZf",
    name: "Emerging Strong",
    category: "High Intensity",
    level: "Intermediate",
    image: p1_img,
    description: "This training program is for those who are looking to truly reshape your body and your mind. This 6 week program is high intensity and is the perfect start to your fitness journey. The second trainer in the EMERGING series, this program is all about intensity and giving it your all to get the results you are after. How will you EMERGE?",
    new_price: 49.99,
    
  },
  {
      id: "price_1Q3QrHRxHifnpxXmdsFfayjM",
      name: "Unleashed",
      category: "Functional",
      level: "Advanced",
      image: p13_img,
      description: "",
      new_price: 89.99,
    },
  {
    id: "price_1Q4Vb8RxHifnpxXm1oESxzub",
    name: "Emerging Fierce",
    category: "Bodybuilding",
    level: "Intermediate",
    image: p2_img,
    description: "",
    new_price: 49.99,
    buy_button: "buy_btn_1Q3Qt1RxHifnpxXmAWh84Bxf",
  },
  {
    id: "price_1Q4VbmRxHifnpxXmIQussvyN",
    name: "Female Athlete: Training Program 1.0",
    category: "Functional",
    level: "Intermediate to Advanced",
    image: p3_img,
    description: "",
    new_price: 49.99,
  },
  {
    id: "4",
    name: "Female Athlete: Lifting Guide",
    category: "Bodybuilding",
    level: "Beginner",
    image: p4_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "5",
    name: "Dunamis",
    category: "Functional",
    level: "Intermediate to Advanced",
    image: p5_img,
    description: "",
    new_price: 49.99,
  },
  {
    id: "6",
    name: "Female Athlete: Internal Female Health",
    category: "Functional",
    level: "Beginner to Intermediate",
    image: p6_img,
    description: "",
    new_price: 69.99,
  },
  {
    id: "7",
    name: "Road to Stage",
    category: "Bodybuilding",
    level: "Intermediate to Advanced",
    image: p7_img,
    description: "",
    new_price: 69.99,
  },
  {
    id: "8",
    name: "Female Athlete: Bodybuilding Program",
    category: "Bodybuilding",
    level: "Intermediate",
    image: p8_img,
    description: "",
    new_price: 49.99,
  },
  {
    id: "9",
    name: "Untamed",
    category: "High Intensity",
    level: "Advanced",
    image: p9_img,
    description: "",
    new_price: 89.99,
  },
  {
    id: "10",
    name: "Emerging Powerful",
    category: "Functional",
    level: "Advanced",
    image: p10_img,
    description: "",
    new_price: 49.99,
  },
  {
    id: "11",
    name: "Radiant Strength",
    category: "Functional",
    level: "Beginner",
    image: p11_img,
    description: "",
    new_price: 49.99,
  },
  {
    id: "12",
    name: "Purely Refined",
    category: "Bodybuilding",
    level: "Intermediate",
    image: p12_img,
    description: "",
    new_price: 89.99,
  },
  {
    id: "13",
    name: "Unleashed",
    price_id: "price_1Q3QrHRxHifnpxXmdsFfayjM",
    category: "Functional",
    level: "Advanced",
    image: p13_img,
    description: "",
    new_price: 89.99,
  },
  {
    id: "14",
    name: "Valor at Home: 1.0",
    category: "High Intensity",
    level: "Beginner",
    image: p14_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "15",
    name: "Valor at Home: 2.0",
    category: "High Intensity",
    level: "Beginner",
    image: p15_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "16",
    name: "Valor at Home: 3.0",
    category: "High Intensity",
    level: "Beginner to Intermediate",
    image: p16_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "17",
    name: "Make It Count: Valor at Home 1.0",
    category: "High Intensity",
    level: "Beginner",
    image: p17_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "18",
    name: "Make It Count: Valor at the Gym 1.0",
    category: "High Intensity",
    level: "Beginner to Intermediate",
    image: p18_img,
    description: "",
    new_price: 29.99,
  },
  {
    id: "19",
    name: "Metier",
    category: "High Intensity",
    level: "Advanced",
    image: p19_img,
    description: "",
    new_price: 89.99,
  },
];


export default new_products;


function getProductData(id) {
    let productData = new_products.find(product => product.id === id)
  
    if(productData == undefined) {
      console.log("Product does not exist for ID: " + id);
      return undefined;
    }
    return productData;
  }

  export {getProductData, new_products}