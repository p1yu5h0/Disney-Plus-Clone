import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a> 
                    <img src="/images/home-icon.svg"></img>
                    <span>HOME</span>
                </a>
                <a> 
                    <img src="/images/search-icon.svg"></img>
                    <span>SEARCH</span>
                </a>
                <a> 
                    <img src="/images/original-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>
                <a> 
                    <img src="/images/movie-icon.svg"></img>
                    <span>MOVIES</span>
                </a>
                <a> 
                    <img src="/images/watchlist-icon.svg"></img>
                    <span>WATCHLIST</span>
                </a>
                <a> 
                    <img src="/images/series-icon.svg"></img>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://media-exp1.licdn.com/dms/image/D5603AQH89TA7l4YAew/profile-displayphoto-shrink_800_800/0/1633354518491?e=1640822400&v=beta&t=CJP2Abpy2z7hwTl3sZ1lKtQ6K5B1x-ZkJrX1uvP_G5Y" alt="DP"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px; 
//   height of this navbar
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0 0 5px 0;
  width: 90px;
  margin-top: 6px;
  margin-right: 5px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
}
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 5px 0 0 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }
    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover {
        span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        }
        cursor: pointer;
    }
    }
    /* @media (max-width: 768px) {
    display: none;
    } */
`

const UserImg = styled.img`
    height: 100%;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 50%;
`