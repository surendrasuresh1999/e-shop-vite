
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { homeCarouselData } from "../../data";
import HomeProducts from "../HomeProducts";


const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section>
                <div className="py-4">
                    <Slider {...settings}>
                        {
                            homeCarouselData.map((data) => (
                                <div key={data.id}>
                                    <img src={data.url} alt="banner-image" className="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
            <section>
                <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
                    <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Kurtha</h1>
                    <HomeProducts />
                </div>
                <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
                    <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Shirts</h1>
                    <HomeProducts />
                </div>
                <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
                    <h1 className="text-gray-600 font-semibold text-2xl my-2">Men's Shoes</h1>
                    <HomeProducts />
                </div>
                <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
                    <h1 className="text-gray-600 font-semibold text-2xl my-2">Women's Saree</h1>
                    <HomeProducts />
                </div>
                <div className="py-4 px-3 md:px-0 lg:py-8 my-8">
                    <h1 className="text-gray-600 font-semibold text-2xl my-2">Women's Dress</h1>
                    <HomeProducts />
                </div>
            </section>
        </>
    )
}

export default HomePage;
