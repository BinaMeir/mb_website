// Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import './SlideShow.css';

const SlideShow = () => {
    const images = [
        './kitchen.jpg',
        '/livingRoom.jpg',
        '/Home.jpg',
        // Add more images as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="slideshow-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className="slideshow-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlideShow;
