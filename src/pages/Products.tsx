import React from "react";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import {
  AdjustmentsHorizontalIcon,
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import { productsList } from "../ProductsList";

const Products = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex py-10 justify-between">
        {/* search button */}
        <div className="relative flex items-center w-full max-w-xs">
          <input
            name="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </div>
        </div>

        <div className="flex gap-4">
          {/* filter button */}
          <Dropdown
            title="Filter"
            icon={
              <AdjustmentsHorizontalIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5"
              />
            }
          />
          {/* sort button */}
          <Dropdown
            title="Sort"
            icon={
              <Bars3BottomRightIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5"
              />
            }
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productsList.map((item) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            src={item.src}
            color={item.color}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
