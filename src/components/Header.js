import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="" />
            <NavMenu></NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13
`
const Logo = styled.img`

`