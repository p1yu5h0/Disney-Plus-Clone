import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp>GET UNLIMITED ACCESS TO Disney+ HotStar</SignUp>
                <Description>
                © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before{
        background-position: top;
        background-size: cover;
        background-image: url("/images/login-background.jpg");  
        background-repeat: no-repeat;
        background-width: 100%;
        background-height: 100%;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.8;
    }
`

const CTA = styled.div`
    max-width = 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;

    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width: 90%;
`