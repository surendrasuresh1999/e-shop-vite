
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
                <>
                    <HomeProducts />
                </>
            </section>
        </>
    )
}

export default HomePage;
