import "./SingleProductPage.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Component/UIStructure/UISctructure";

export function SingleProductPage() {
  const { state } = useContext(DataContext);
  const { productID } = useParams();
  const product = state?.inventory.find((items) => items.id === +productID);

  if (!product) {
    <h2>Loarding..</h2>;
  }
  return (
    <UIStructure>
      {" "}
      <div className="SingleProductPage">
        <h2>{product?.name}</h2>
        <img src={product?.imageUrl} alt={product?.name} />
        <div className="ProductDetails">
          <p>Price:</p>
          <p>${product?.price}</p>
        </div>
        <div className="ProductDetails">
          <p>Stock:</p>
          <p>{product?.stock}</p>
        </div>
        <div className="ProductDetails">
          <p>Suppiler:</p>
          <p>{product?.supplier}</p>
        </div>
        <div className="ProductDetails">
          <p>Department:</p>
          <p>{product?.department}</p>
        </div>
        <div className="ProductDetails">
          <p>SKU:</p>
          <p>{product?.sku}</p>
        </div>
        <div className="ProductDetails">
          <p>Delivered:</p>
          <p>{product?.delivered}</p>
        </div>
        <div className="ProductDetails">
          <p>Description:</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </UIStructure>
  );
}
