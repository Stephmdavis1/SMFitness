import React, { useContext, useEffect, useState } from "react";
import dropdown_icon from "../Assets/dropdown_icon.png";
import all_product from "../Assets/all_product";
import TrainingItems from "../Components/TrainingProgramComponents/TrainingItem/TrainingItems";
import "./CSS/TrainingPrograms.css";
import Navbar from "../Components/Home Page Components/Navbar/Navbar";
import photo from "../Assets/1559-2.png";
import Banner from "../Components/TrainingProgramComponents/Banner/Banner";
import Footer from "../Components/Home Page Components/Footer/Footer";
import new_products from "../Assets/getProductData";

export default function TrainingPrograms(props) {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])

//   const toggleCategory = (e) => {
//     if(category.includes(e.target.value)) {
//       setCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev, e.target.value])
//     }
//   }

// const sortProduct = () => {
//   let fpCopy = filterProducts.slice();

//   switch (sortType) {
//     case 'High Intensity':
//       setFilterProducts(fpCopy.sort(a,b))
//   }
// }

  return (
    <>
      <Banner />

      <div className="training-programs">
        <div className="training-indexSort">
          <p>
            <span>Showing 1-10</span> out of 19
          </p>
          <div className="training-sort">
          {/* Sort by <img src={dropdown_icon} alt="" /> */}
            <select>
              <option value="High Intensity">Sort by: High Intensity</option>
              <option value="Bodybuilding">Sort by: Bodybuilding</option>
              <option value="Functional">Sort by: Functional</option>
            </select>
             
            
          </div>
        </div>

        <div className="training-products">
          {new_products.map((item, i) => {
            return (
              <TrainingItems
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                category={item.category}
              />
            );
          })}
        </div>
        {/* <div className="training-category-loadmore">
                    Explore More
                </div> */}
      </div>
      <Footer />
    </>
  );
}
