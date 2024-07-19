import React from "react";

interface productCardProps {
  name: string;
  color: string;
  price: number;
  src: string;
  id: number;
}

const ProductCard: React.FC<productCardProps> = ({
  name,
  color,
  price,
  src,
  id,
}) => {
  return (
    <div>
      <div key={id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-64 overflow-hidden rounded-md bg-white relative lg:aspect-none group-hover:opacity-75 lg:h-64">
          <img
            alt="asdfa"
            src={src}
            className="h-24 w-24 object-cover lg:h-64 lg:w-64"
          />
        </div>
        <div className="mt-4 flex-col justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="">
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm mt-1 font-medium text-gray-900">₹{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
