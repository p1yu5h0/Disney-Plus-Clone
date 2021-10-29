import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg"></img>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"></img>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg"></img>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 70px;

    ul li button {
        &:before {
          font-size: 10px;
          color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img{
        margin-top: 10px;
        // padding: 2px;
        border: 4px solid transparent;
         border-radius: 10px;
         width: 100%;
         height: 100%;
         box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
         transition-duration: 300ms;
         
         &:hover{
             transform: scale(1.01);
             border: 4px solid rgba(249, 249, 249, 0.8);

         }
    }
`