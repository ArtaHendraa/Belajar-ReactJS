/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs mt-10 bg-[#393e46] text-white rounded-b-lg rounded-t-xl drop-shadow-xl">
      {children}
    </div>
  );
};

const ImageCard = (props) => {
  const { src } = props;
  return (
    <Link to="">
      <img className="rounded-t-lg" src={src} alt="" />
    </Link>
  );
};

const Description = (props) => {
  const { title, children } = props;
  return (
    <div className="px-3 pb-3">
      <h2 className="py-2 text-2xl font-semibold text-neutral-100">{title}</h2>
      <p className="text-sm text-neutral-300">{children}</p>
    </div>
  );
};

CardProduct.ImageCard = ImageCard;
CardProduct.Description = Description;
export default CardProduct;
