import "./RelatedProducts.css";
import data_product from "../../../Assets/data";
import TrainingItems from "../../TrainingProgramComponents/TrainingItem/TrainingItems";

export default function RealtedProducts() {
  return (
    <>
      <div className="related">
        <h1>Related Products</h1>
        <hr />
      </div>
      <div className="relatedproducts">

        <div className="relatedproducts-item">
          {data_product.map((item, i) => {
            return (
              <TrainingItems
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
