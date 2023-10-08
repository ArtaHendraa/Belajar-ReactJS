import CardProduct from "../components/fragments/cardProduct";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        <CardProduct>
          <CardProduct.ImageCard src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <CardProduct.Description title="Porsche">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            recusandae incidunt iusto voluptates blanditiis voluptatem.
          </CardProduct.Description>
        </CardProduct>

        <CardProduct>
          <CardProduct.ImageCard src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
          <CardProduct.Description title="Lamborghini">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            recusandae incidunt iusto voluptates blanditiis voluptatem.
          </CardProduct.Description>
        </CardProduct>

        <CardProduct>
          <CardProduct.ImageCard src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <CardProduct.Description title="Lamborghini">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            recusandae incidunt iusto voluptates blanditiis voluptatem.
          </CardProduct.Description>
        </CardProduct>
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
