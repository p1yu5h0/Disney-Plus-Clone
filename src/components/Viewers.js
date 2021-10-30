import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""></img>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""></img>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""></img>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""></img>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""></img>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    padding: 0 0 26px;
    margin-top: 40px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

      
    &:hover{
         transform: scale(1.06);
         box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
         rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
         border-color: rgba(249, 249, 249, 0.8);
         border: 2px solid

         video {
            opacity: 1;
          }
    }

   
`

