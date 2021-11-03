import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
const FooterLinks = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    
   
    a {
        margin: 10px;
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
       
        
       <StaticImage
                className="row"
                width={85}
                layout="fixed"
                alt="Logo Moto Trips"
                src="../img/logo-kontra.png"
        
            />
            
     
        <FooterLinks className="row">
                    
              
                    <a href="https://www.youtube.com/c/mototrips">
                        <StaticImage src="../img/social/logo-youtube.png" alt="Logo Youtube"/>
                        
                    </a>
                   
                
                
                    <a href="https://www.facebook.com/MotoTripsPolska">
                        <StaticImage   src="../img/social/logo-facebook.png" alt="Logo Facebook"/>
                    </a>
                    
           
                    <a href="https://www.instagram.com/mototripspl/">
                        <StaticImage  src="../img/social/logo-instagram.PNG" alt="Logo Instagram" />
                    </a>
               
               
                
            
        </FooterLinks>
        <CopyWright> Projekt i realizacja <a href="https://marketingsolutions.com.pl/">Marketing Solutions</a></CopyWright>
    </div>  
  )
 
  

}

export default Footer