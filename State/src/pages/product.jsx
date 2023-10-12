/* eslint-disable react/jsx-key */
import CardProduct from "../components/fragments/cardProduct";
import { Link } from "react-router-dom";
import productsData from "../data/product-data.json";

const Product = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {productsData.map((product) => (
          <CardProduct>
            <CardProduct.ImageCard src={product.image} />
            <CardProduct.Description title={product.name}>
              {product.description}
            </CardProduct.Description>
          </CardProduct>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
          to="/"
        >
          Home
        </Link>
      </div>
    </>
  );
};
export default Product;
