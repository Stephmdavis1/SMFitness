// import React, { useContext } from "react"
// import { TrainingProgramsContext } from "../Context/TrainingProgramsContext"
// import dropdown_icon from '../Assets/dropdown_icon.png'
// import all_product from '../Assets/all_product'
// import Item from '../Components/Home Page Components/Items/Items'
// import new_products from "../Assets/getProductData"


// const TrainingCategory = (props)=> {
//     const {all_product} = useContext(TrainingProgramsContext);
//     return (
//         <div className="training-programs">
             
//             <div className="training-indexSort">
//                 <p>
//                     <span>Showing 1-10</span> out of 19
//                 </p>
//                 <div className="training-sort">
//                     Sort by <img src={dropdown_icon} alt="" />
//                 </div>
//             </div>
//             <div className="training-products">
//                 {new_products.map((item, i)=> {
//                     if (props.category === item.category) {
//                         return <Item
//                         key={i}
//                         id={item.id}
//                         name={item.name}
//                         image={item.image}
//                         new_price={item.new_price}
//                         price_id={item.price_id}
//                       />
//                     }
//                     else {
//                         return null;
//                     }
//                 })}
//             </div>

//         </div>
//     )
// }

// export default TrainingCategory;