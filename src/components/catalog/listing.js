import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"




const catalogListing = () => {
  
        
        
          return (
            
            <div className="card">

           
            
            <Link to="/katalog-motocykli/ducati-desertx">
              <div className="featured-news">
                <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx.jpg" alt="Ducati DesetX" className="news-img"/>
              </div>  
               <div className="flex logo-container">
                <StaticImage src="../../img/loga/ducati-logo.png" alt="Ducati logo" className="logo-listing"/>    
                </div> 
                <h3>Ducati DesertX - 2021 r.</h3>
                <div className="padding-catalog">
                    <p><strong>Pojemność</strong>: 937 cm3</p>
                    <p><strong>Moc</strong>: 110 KM</p>
                </div>
            
            </Link>
            
            
        </div>
          )
         
        

           
      
       
     
    
    

}


export default catalogListing