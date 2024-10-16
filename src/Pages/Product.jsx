import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TrainingProgramsContext } from "../Context/TrainingProgramsContext";
import ProductDisplay from "../Components/TrainingProgramComponents/ProductDisplay/ProductDisplay";
import Navbar from "../Components/Home Page Components/Navbar/Navbar";
import DescriptionBox from "../Components/TrainingProgramComponents/Description Box/DescriptionBox";
import RelatedProducts from "../Components/TrainingProgramComponents/Related Products/RelatedProducts";
import Footer from "../Components/Home Page Components/Footer/Footer";
import Newsletter from "../Components/Home Page Components/Newsletter/Newsletter";

export default function Product() {
  const { new_products } = useContext(TrainingProgramsContext);
  const { productId } = useParams();
  const products = new_products.find((e) => e.id === productId);
  // const products = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <Navbar />
      <ProductDisplay product={products} />
      <RelatedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}
