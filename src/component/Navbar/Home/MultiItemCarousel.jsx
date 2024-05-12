import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import { topMeel } from './TopMeel';

const MultiItemCarousel = () => {
    const settings = {
       dots: true,
       infinite: true,
       speed :500,
       slidesToShow: 5,
       slidesToScroll: 2,
       autoplay:true,
       autoplaySpeed :2000

    };
    return (
        <div>
            <Slider {...settings}>
                {topMeel.map((item)=> (
                <CarouselItem image={item.image} title={item.title}/>
                ))}
            </Slider>
        </div>
    )
}

export default MultiItemCarousel

