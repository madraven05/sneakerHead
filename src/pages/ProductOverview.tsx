import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "../ProductsList";
import { Radio, RadioGroup } from "@headlessui/react";
import {
  PencilIcon,
  PencilSquareIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import CustomisationDialogue from "../components/CustomisationDialogue";
import { SketchPicker } from "react-color";

const ProductOverview = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const product = productsList[id - 1];
  
  return (
    <div className="my-5 grid grid-cols-3 text-white justify-end lg:grid-cols-3 sm:grid-cols-1">
      {/* Col 1 */}
      <div className="flex-col col-span-2 p-4 justify-end">
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              aria-hidden="true"
              className="text-yellow-300 h-5 w-5 flex-shrink-0"
            />
          ))}
          <p className="text-lg">3.7k Reviews</p>
        </div>

        <p className="my-2 text-2xl">₹{product.price.toLocaleString()}</p>

        <div className="my-4">
          <h3 className="text-lg  font-semibold">Description</h3>
          <p className="">{product.description}</p>
        </div>

        <div className="my-2">
          <p className="text-lg  font-semibold">Features</p>
          <ul className=" my-1 px-8 list-disc text-center">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>

      {/* Col 2 */}
      <div className="flex-col gap-4 p-4 col-span-1 justify-self-center items-center">
        {/* Product Image */}
        <div className="relative flex items-center">
          <img
            src={product.src}
            className="h-96 w-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-y-0 right-0 p-5">
            <PencilSquareIcon onClick={() => setOpen(true)} className="w-10 h-10  hover:cursor-pointer hover:" />
          </div>
        </div>

        {/* Size */}
        <h2 className="text-xl mt-8">Size</h2>
        <RadioGroup className="grid grid-cols-4 gap-4 mt-3">
          {product.sizeList.map((size) => (
            <Radio
              value={size}
              className="border hover:bg-gray-100 focus:bg-blue-600 focus:text-white rounded-md py-2 flex items-center justify-center"
            >
              <p className="text-lg">{size}</p>
            </Radio>
          ))}
        </RadioGroup>

        {/* Buttons */}
        <button className="rounded-lg w-full font-semibold focus:shadow-none shadow-lg mt-10 bg-blue-700 text-white p-4">
          Add to cart
        </button>
        <button className="rounded-lg w-full font-semibold focus:shadow-none shadow-lg mt-2 bg-cyan-400 text-white p-4">
          Buy now
        </button>
      </div>



      {/* Customisation Dialogue */}
      <CustomisationDialogue model={product.model} open={open} close={() => setOpen(false)} />
    </div>
  );
};

export default ProductOverview;
