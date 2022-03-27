import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const MenuIcon = styled.div`
@media (min-width: 42rem) {
div {
    display: none;
}
}
    position: fixed;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    

div {
    width: 1.2rem;
    height: 0.1rem;
    background: #e9b000;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: transform 300ms;
   
    
    :first-child {
        transform: ${({ nav }) => nav ? 'rotate(45deg)' : 'rotate(0)'};
        
    }
    :nth-child(2) {
        transform: ${({ nav }) => nav ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }
}

`
const MenuLinks = styled.nav`
@media (min-width: 42rem) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    background: #000;
    font-family: Montserrat;
    height: 150px;
    width: 100%;
    padding: 0;
    
    

    div {
        margin: 0px;
        width: 100%;
    }
}
    
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    height: 100vh;
    width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    background: #000;
    padding-left: 0;
    font-family: Montserrat;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 300ms;
    width: ${({ nav }) => (nav ? "250px" : "0")};
    padding: ${({ nav }) => (nav ? "40px 0 0 80px" : "0")};
    position: ${({ nav }) => (nav ? "fixed" : "absolute")};
    z-index: 4;

  
    div {
        margin-top: 1rem;
       
    }
    a {
        text-decoration: none;
        color: #919191;
        font-size: 1rem;
        transition: color 300ms;
       
    }

    a:hover {
        color: #e9b000;
    }

`

const Header = () => {
    const [nav, showNav] = useState(false)
    
   
  return(
      
    <div>
       

        <MenuIcon nav={nav} onClick={() => showNav(!nav)} >
            <div />
            <div />
        </MenuIcon>
        <Link to="/">
           <StaticImage
                className="row"
                width={120}
                layout="fixed"
                alt="Logo Moto Trips"
                src="../img/logo-kontra.png"
        
            />
            </Link>
      

        <MenuLinks nav={nav} className="row">
                    
                <div>
                    <Link to="/aktualnosci/">Aktualności</Link>
                </div>
                <div>
                    <Link to="/moto-test/">Testy motocykli</Link>
                </div>
                <div>
                    <Link to="/sprzet/">Sprzęt</Link>
                </div>
                <div>
                    <a href="/trasy-motocyklowe/">Trasy</a>
                </div>
                <div>
                    <a href="https://moto-trips.pl/kontakt">Kontakt</a>
                </div>
                
            
        </MenuLinks>
    </div>  
  )


}

export default Header