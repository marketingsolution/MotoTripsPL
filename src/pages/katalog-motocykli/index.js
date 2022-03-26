import React from "react";

import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import Seo from "../../components/seo";
import CatalogList from "../../components/catalog/listing"
class Catalog extends React.Component {
    constructor(){
        super();
        this.state = {
            txt1: '125',
            txt2: '1900',
            kmMin: '0',
            kmMax: '300'
        }
    }
    update (txt1) {
        this.setState({
            txt1: txt1.target.value,
            })
    }

    update2 (txt2) {
        this.setState({
            txt2: txt2.target.value,
            })
    }

    update3 (kmMin) {
        this.setState({
            kmMin: kmMin.target.value,
            })
    }

    update4 (kmMax) {
        this.setState({
            kmMax: kmMax.target.value,
            })
    }



    render(){
  return (
    <Layout>
        <Seo
        title="Katalog Motocykli"
        description="Zapraszamy niezależny portal motocyklowy newsy ze świata moto. Co nowego w motocyklach"
        image="https://moto-trips.pl/wp-content/uploads/2019/02/news.jpg"
        pathname="/aktualnosci/"
        author="Przemysław Gąsiorowski"
      />
      <Breadcrumb title="Katalog Motocykli"/>
     
      <div className="row flex">
        <StaticImage 
            className="brand-logo"
            alt="Logo Honda Motocykle"
            src="../../img/loga/logo-honda.png"/>
        <StaticImage 
            className="brand-logo"
            alt="Logo Yamaha"
            src="../../img/loga/yamaha-logo.png"/>    
        <StaticImage 
            className="brand-logo"
            alt="Logo BMW Motorrad"
            src="../../img/loga/bmw-motorroad-logo.png"/>     
        <StaticImage 
            className="brand-logo"
            alt="Logo Harley Davidson"
            src="../../img/loga/HD-logo.jpg"/>
        <StaticImage 
            className="brand-logo"
            alt="Logo KTM"
            src="../../img/loga/KTM-logo.png"/>    
        <StaticImage 
            className="brand-logo"
            alt="Logo Kawasaki"
            src="../../img/loga/logo-kawasaki.jpg"/>    
        <StaticImage 
            className="brand-logo"
            alt="Logo Triumph"
            src="../../img/loga/triumph-logo.jpg"/>
         <StaticImage 
            className="brand-logo"
            alt="Logo Suzuki"
            src="../../img/loga/suzuki-logo.jpg"/>
        <StaticImage 
            className="brand-logo"
            alt="Logo Ducati"
            src="../../img/loga/ducati-logo.png"/>      
        <StaticImage 
            className="brand-logo"
            alt="Logo Moto Guzzi"
            src="../../img/loga/moto-guzzi-logo.jpg"/>     
           
      </div>
      
    <div className="row flex">

        <div className="range-filter">

            <div>
                <h3>Pojemność</h3>
            </div>
      
          
            <div>
                <input className="range" type="range" name="min value" id="min" onChange={this.update.bind(this)} step="100" min="125" max="1200"
                value={this.state.txt1}/>
                
                <input className="range" type="range" name="max value" id="max" onChange={this.update2.bind(this)} step="100" min="1200" max="1900"
                value={this.state.txt2}/>
            </div>
        
            <div className="filter-caption">
                <div>
                    <p>{this.state.txt1} cm3</p>
                </div>

                <div>
                    <p> - </p>
                </div>

                <div>
                    <p>{this.state.txt2} cm3</p>
                </div>
            </div>


        </div>

        <div className="range-filter">

                <div>
                    <h3>Moc</h3>
                </div>


                <div>
                    <input className="range" type="range" name="min value" id="kmMin" onChange={this.update3.bind(this)} step="10" min="0" max="140"
                    value={this.state.kmMin}/>
                    
                    <input className="range" type="range" name="max value" id="kmMax" onChange={this.update4.bind(this)} step="10" min="150" max="300"
                    value={this.state.kmMax}/>
                </div>

                <div className="filter-caption">
                    <div>
                        <p>{this.state.kmMin} KM</p>
                    </div>

                    <div>
                        <p> - </p>
                    </div>

                    <div>
                        <p>{this.state.kmMax} KM</p>
                    </div>
                </div>


        </div>
        <div className="range-filter">

        <div>
            <label for="year"><h3>Rok produkcji</h3></label>
        </div>

        
        <div className="dropdown-filter">
        <form>
 
  <select className="button" name="year" placeholder="Wybierz rok" id="year">
    <option value="2000">2000 r</option>
    <option value="2001">2001 r</option>
    <option value="2002">2002 r</option>
    <option value="2003">2003 r</option>
  </select>
 
 
</form>
           
        </div>

        


        </div>
     
    </div>
    <div className="row flex">

        <div className="button">Filtruj</div>
    </div>

    <div className="row flex">

        <CatalogList/>

    </div>

    

    </Layout>
  );
}
};

export default Catalog;
