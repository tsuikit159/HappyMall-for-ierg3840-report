import Link from "next/link";
import { Rating } from "../rating";
import Keyboard1Img from "../../assets/keyboard1.png";
import Keyboard2Img from "../../assets/keyboard2.png";
import Keyboard3Img from "../../assets/keyboard3.png";
import Keyboard4Img from "../../assets/keyboard4.png";
import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from "../../atoms/cartState"
import toast from 'react-hot-toast';

const products = [
  {
    id: 1,
    name: "Logitech MK270 Wireless Keyboard and Mouse Combo",
    imageSrc: Keyboard1Img.src,
    rating: 5,
    numReviews: 10,
    price: 799.0,
    description:"Wireless keyboard with Full-size with number pad,Spill-resistant design, Up to 24 months Battery Life",
    quantity:1,
  },
  {
    id: 2,
    name: "Razer BlackWidow Chroma V2 Mechanical Gaming Keyboard ",
    imageSrc: Keyboard2Img.src,
    rating: 5,
    numReviews: 8,
    price: 1299.0,
    description: "Wired keyboard with Full-size with detachable wrist rest , using it own Green Mechanical Switches with Customizable RGB lighting, 10-key rollover",
    quantity:1,
  },
  {
    id: 3,
    name: "Apple Magic Keyboard ",
    imageSrc: Keyboard3Img.src,
    rating: 5,
    numReviews: 6,
    price: 799.0,
    description:"Wireless keyboard with Compact with low-profile keys ,Up to 1 month battery life, Rechargeable battery, scissor mechanism for stability ",
    quantity:1,
  },
  {
    id: 4,
    name: "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard ",
    imageSrc: Keyboard2Img.src,
    rating: 5,
    numReviews: 12,
    price: 1499.0,
    description:"Wired keyboard, Full-size with 6 macro keys , using Cherry MX Speed mechanical switches with Customizable RGB lighting, durable aluminum frame",
    quantity:1,
  },
  {
    id: 5,
    name: "Microsoft Sculpt Ergonomic keyboard",
    imageSrc: Keyboard3Img.src,
    rating: 4.5,
    numReviews: 9,
    price: 1199.0,
    description: "Wireless keyboard, Split keyboard with curved design ,Up to 36 months battery life,ergonomic design , including wrist rest",
    quantity:1,
  },
  {
    id: 6,
    name: "Keyboard 6",
    imageSrc: Keyboard4Img.src,
    rating: 4.5,
    numReviews: 7,
    price: 899.0,
    description:"",
    quantity:1,
  },
];

const ProductCard = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState)

  const addItemsToCart = () => {

    if (cartItem.findIndex(pro => pro.id === products.id) === -1) {
        setCartItem(prevState => [...prevState, product])
    } else {
        setCartItem(prevState => {
            return prevState.map((item) => {
                return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            })
        })
    }

    toast(`${product.name} added to cart`)

}

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <h4 className="text-lm text-black">{product.description}</h4>
        <div className="flex items-center mt-1 mb-2">
          <Rating value={product.rating} />
          <span className="ml-2 text-gray-500">
            {product.numReviews} reviews
          </span>
        </div>
        <p className="text-black font-medium text-lg mt-auto">
          ${product.price.toFixed(2)}
        </p>
        <div className="content-center">
         <button className='"bg-black text-black hover:text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 "'
         onClick={addItemsToCart}>
           Add To Cart
         </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12">New arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
};

export default Products;
