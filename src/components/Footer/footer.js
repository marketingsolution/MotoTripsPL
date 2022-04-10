import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"

import {
    FaFacebookSquare as Facebook,
    FaInstagram as Instagram,
    FaYoutube as YouTube,
  } from "react-icons/fa"

const FooterLinks = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    
   
    a {
        margin: 10px;
        transition: color 0.3s ease;
        
        color: #E9b000
        
    }
`

const CopyWright = styled.div`
text-align: center;
margin: 50px;
color: #d7d7d7;
a {
    text-decoration: none;
}

`
const Footer = () => {
  
   

  return(
      
    <div>
       
        <Link to='/'>
       <StaticImage
                className="row"
                width={85}
                layout="fixed"
                alt="Logo Moto Trips"
                src="../img/logo-kontra.png"
        
            />
          </Link>  
     
        <FooterLinks className="row">
        <FooterMenuStyles className="footer__menu social__menu">
              
                    <a
                    href="https://www.youtube.com/c/mototrips"
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    >
                        <YouTube/>
                        
                    </a>

                    <a
                    href="https://www.facebook.com/MotoTripsPolska"
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    >
                        <Facebook/>
                    </a>
         
                    <a
                    href="https://www.instagram.com/mototripspl/"
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    >
                        <Instagram/>
                    </a>
               
        </FooterMenuStyles>
                
            
        </FooterLinks>
        <CopyWright>© {new Date().getFullYear()}{` `} Projekt i realizacja <a href="https://marketingsolutions.com.pl/">Marketing Solutions</a></CopyWright>
    </div>  
  )
 
  

}

export default Footer