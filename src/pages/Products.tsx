import React from "react";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/Dropdown";
import {
  AdjustmentsHorizontalIcon,
  Bars3BottomRightIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

const Products = () => {
  const productsList = [
    {
      id: 1,
      name: "Nike Air Jordan 1 Low G",
      src: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/37f63fea-cb07-4440-900b-eef24c8dce9b/air-jordan-1-low-g-white-and-university-blue-dd9315-100-release-date.jpg",
      color: "White and University blue",
      price: 13995,
    },
    {
      id: 2,
      name: "Adidas Ozelia",
      src: "https://assets.ajio.com/medias/sys_master/root/20230712/r66g/64aec044a9b42d15c94f43d7/-1117Wx1400H-469496545-beige-MODEL.jpg",
      color: "Beige",
      price: 5499.5,
    },
    {
      id: 3,
      name: "Nike TC 7900",
      src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d38e80c8-a177-4927-9c05-0c4099bf1a53/tc-7900-shoes-M6plHb.png",
      color: "White",
      price: 10995,
      model: "",
    },
    {
      id: 4,
      name: "Converse Black Chuck 70 Hi Sneakers",
      src: "https://images.journeys.com/images/products/1_5122_FS_ALT1.JPG",
      color: "Black",
      price: 5999,
      model: "",
    },
    {
      id: 5,
      name: "Nike Air Jordan 1 Retro High",
      src: "https://crepdogcrew.com/cdn/shop/products/AirJordan1High_85BlackWhite.jpg?v=1676440102&width=2048",
      color: "Black and White",
      price: 34000,
      model: "",
    },
    {
      id: 6,
      name: "Nike React Presto",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-kNeJ48IKsRq-CepykCIZU8NLZn9HzOyog&s",
      color: "Purple Octupus",
      price: 17899,
      model: "",
    },
    {
      id: 7,
      name: "New Balance 997",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbmJrNF1S_oxClqTSq4gTSAW2ZE68SxQjoA&s",
      color: "Explore by sea",
      price: 21909,
      model: "",
    },
  ];
  return (
    <>
      <div className="flex py-10 justify-between">
        <div className="relative flex items-center w-full max-w-xs">
          <input
            name="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex gap-4">
          <Dropdown
            title="Filter"
            icon={
              <AdjustmentsHorizontalIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            }
          />
          <Dropdown
            title="Sort"
            icon={
              <Bars3BottomRightIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
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
