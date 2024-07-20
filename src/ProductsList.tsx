import { AdidasOzelia } from "./components/shoes/AdidasOzelia";
import { ConverseHT } from "./components/shoes/ConverseHT";
import { NewBalance997 } from "./components/shoes/NewBalance997";
import { NikeAirJordan } from "./components/shoes/NikeAirJordan";
import { NikeAirJordanBWHT } from "./components/shoes/NikeAirJordanBWHT";
import { NikeTC7900 } from "./components/shoes/NikeTC7900";

export const productsList = [
  {
    id: 1,
    name: "Nike Air Jordan 1 Low G",
    src: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/37f63fea-cb07-4440-900b-eef24c8dce9b/air-jordan-1-low-g-white-and-university-blue-dd9315-100-release-date.jpg",
    color: "White and University blue",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 13995,
    model: <NikeAirJordan/>,
  },
  {
    id: 2,
    name: "Adidas Ozelia",
    src: "https://assets.ajio.com/medias/sys_master/root/20230712/r66g/64aec044a9b42d15c94f43d7/-1117Wx1400H-469496545-beige-MODEL.jpg",
    color: "Beige",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 5499.5,
    model: <AdidasOzelia/>,
  },
  {
    id: 3,
    name: "Nike TC 7900",
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d38e80c8-a177-4927-9c05-0c4099bf1a53/tc-7900-shoes-M6plHb.png",
    color: "White",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 10995,
    model: <NikeTC7900/>,
  },
  {
    id: 4,
    name: "Converse Black Chuck 70 Hi Sneakers",
    src: "https://images.journeys.com/images/products/1_5122_FS_ALT1.JPG",
    color: "Black",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 5999,
    model: <ConverseHT/>,
  },
  {
    id: 5,
    name: "Nike Air Jordan 1 Retro High",
    src: "https://crepdogcrew.com/cdn/shop/products/AirJordan1High_85BlackWhite.jpg?v=1676440102&width=2048",
    color: "Black and White",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 34000,
    model: <NikeAirJordanBWHT/>,
  },
  {
    id: 6,
    name: "New Balance 997",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbmJrNF1S_oxClqTSq4gTSAW2ZE68SxQjoA&s",
    color: "Explore by sea",
    sizeList: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim et tortor bibendum ultrices ut a nunc. Aenean tincidunt elit eu neque varius, sollicitudin aliquet tellus cursus.",
    price: 21909,
    model: <NewBalance997/>,
  },
];
