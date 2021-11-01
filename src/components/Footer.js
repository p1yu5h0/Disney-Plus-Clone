import React from "react";
import styled from "styled-components";

function Footer() {
  return (
        <Foot>
          <p>
            © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </p>
        </Foot>
  );
}

export default Footer;

const Foot = styled.div`
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    margin: 5px;
    padding: 2px;
    font-family: 'Montserrat', sans-serif;
`