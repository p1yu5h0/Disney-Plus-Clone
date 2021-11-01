import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Originals() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true
    };
    return (
        <Container >
            <h2>Originals</h2>
            <Content {...settings}>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1819/911819-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1743/1041743-h-663df12087d4" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4469/674469-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4661/674661-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4524/674524-h" alt=""/>
                
                </Wrap>
            </Content>
        </Container>
    )
}

export default Originals

const Container = styled.div`

`
const Content = styled(Slider)`
    margin-top: 30px;
    margin-right: 20px;

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
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.02);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
         rgb(0 0 0 / 72%) 0px 30px 22px -10px; 
         border-color: rgba(249, 249, 249, 0.8);
         border-width: 3px;
    }
`