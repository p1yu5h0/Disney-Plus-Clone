// import React, {useEffect} from 'react'
import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import NewDisney from './NewDisney'
import Originals from './Originals'
// import db from '/home/p1yu5h0/Disney-Plus-Clone/src/firebase'
import Trending from './Trending'
import Footer from './Footer'

function Home() {

    // useEffect(()=>{
    //     db.collection("movies").onSnapshot((snapshot)=>{
    //         let tempMovies = snapshot.docs.map((doc)=>{
    //             console.log(doc.data());
    //             return { id: doc.id, ...doc.data()}
    //         })
    //     })
    // }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Originals />
            <NewDisney />
            <Movies />
            <Trending />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
   
    &:before{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`