import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { mens_kurta, mens_shirts, mens_shoes } from "../../data";
import HomeProductCard from "../HomeProductCard";
import { women_dress, women_sarees } from "../../data/womenData";

const HomeProducts = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
        <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
          <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Kurtha</h1>
          <Slider {...settings}>
          {
              mens_kurta.slice(0,15).map((data, index)=>(
                  <HomeProductCard key={index} data={data}/>
              ))
          }
          </Slider>
        </div>
        <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
          <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Shirts</h1>
          <Slider {...settings}>
          {
              mens_shirts.slice(0,15).map((data, index)=>(
                  <HomeProductCard key={index} data={data}/>
              ))
          }
          </Slider>
        </div>
        <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
          <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Shoes</h1>
          <Slider {...settings}>
          {
              mens_shoes.slice(0,15).map((data, index)=>(
                  <HomeProductCard key={index} data={data}/>
              ))
          }
          </Slider>
        </div>
        <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
          <h1 className="text-gray-600 font-semibold text-2xl my-2">Women's Saree</h1>
          <Slider {...settings}>
          {
              women_sarees.slice(0,15).map((data, index)=>(
                  <HomeProductCard key={index} data={data}/>
              ))
          }
          </Slider>
        </div>
        <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
          <h1 className="text-gray-600 font-semibold text-2xl my-2">Women's Dress</h1>
          <Slider {...settings}>
          {
              women_dress.slice(0,15).map((data, index)=>(
                  <HomeProductCard key={index} data={data}/>
              ))
          }
          </Slider>
        </div>
        </>
    )
}

export default HomeProducts;
