import React from "react";

import Layout from '../../components/layout'
import Breadcrumb from '../../components/Breadcrumb'

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo";



class Single extends React.Component {



    render(){
  return (
    <Layout>
        <Seo
        title="Specyfikacja techniczna Ducati DesertX"
        description="Sprawdź dane techniczne nowego Ducati DesertX 2021, czym charakteryzuje się ten motocykl, specyfikacja"
        image="../../img/catalog/ducati/desertx/ducati_desertx.jpg"
        pathname="/katalog-motocykli/ducati-desertx"
        author="Przemysław Gąsiorowski"
      />
      <main>
      
          

     

        

   
            <div className="row scrolling-wrapper">
                
            <div className="col-3 card">
            <div className="headline">MV Agusta Lucky Explorer 9.5</div>
                <div className="spec">931 cm3</div>
                <div className="spec">123 KM</div>
                <div className="spec">102 Nm przy 7000 obr./min</div>
               

            </div>
            <div className="col-3 card">
            <div className="headline">Husqvarna Norden 901</div>
                <div className="spec">889 cm3</div>
                <div className="spec">103 KM</div>
                <div className="spec">100 Nm przy&nbsp;6500 obr./min</div>
            </div>
            <div className="col-3 card">
            <div className="headline">Ducati DesertX</div>
                <div className="spec">937 cm3</div>
                <div className="spec">110 KM</div>
                <div className="spec">92 Nm przy 6500 obr./min</div>
            </div>
            
        

        </div>

<div className="row flex">
<h2>Wymiary i waga</h2>
</div>
        
        <div className="row scrolling-wrapper">
                
                
            <div className="col-3 card first">
                <div className="headline">Motocykl</div>
                <div className="spec">Masa (na sucho)</div>
                <div className="spec">Prześwit</div>
                <div className="spec">Zawieszenie przód skok</div>
                <div className="spec">Zawieszenie tył skok</div>
                <div className="spec">Zbiornik paliwa</div>
            </div>

                <div className="col-3 card">
                    <div className="headline">MV Agusta Lucky Explorer 9.5</div>
                    <div className="spec">220 kg</div>
                    <div className="spec">230 mm</div>
                    <div className="spec">220 mm</div>
                    <div className="spec">210 mm</div>
                    <div className="spec">20 l</div>
    
                </div>
                <div className="col-3 card">
                    <div className="headline">Husqvarna Norden 901</div>
                    <div className="spec">204 kg</div>
                    <div className="spec">252 mm</div>
                    <div className="spec">220 mm</div>
                    <div className="spec">215 mm</div>
                    <div className="spec">19 l</div>
                   
                </div>

                <div className="col-3 card">
                    <div className="headline">Ducati DesertX</div>
                    <div className="spec">202 kg</div>
                    <div className="spec">250 mm</div>
                    <div className="spec">230 mm</div>
                    <div className="spec">220 mm</div>
                    <div className="spec">21 l</div>
                   
                </div>
                
            </div>
    
            

      

<div className="row">
          <h2>Silnik</h2>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Pojemność</p></div>
           
            <div className="spec-desc"><p>937 cm3</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Koni mechanicznych</p></div>
            <div className="spec-desc"><p>110 KM</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Zbiornik paliwa</p></div>
            <div className="spec-desc"><p>21 litrów</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Moc maksymalna</p></div>
            <div className="spec-desc"><p>110 KM przy 9250 obr./min</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Maksymalny moment obrotowy</p></div>
            <div className="spec-desc"><p>92 Nm przy 6500 obr./min</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Zużycie paliwa</p></div>
            <div className="spec-desc"><p>Brak danych</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Emisja CO2</p></div>
            <div className="spec-desc"><p>Brak danych</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Sprzęgło</p></div>
            <div className="spec-desc"><p>Sprzęgło 8-tarczowe</p></div>
          </div>

        </div>

        <div className="row">
          <h2>Wymiary</h2>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Dł. x szer. x wys.</p></div>
            <div className="spec-desc"><p>Brak danych</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Rozstaw osi</p></div>
            <div className="spec-desc"><p>Brak danych</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Wysokość kanapy</p></div>
            <div className="spec-desc"><p>21 litrów</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Prześwit</p></div>
            <div className="spec-desc"><p>250 mm</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Masa własna</p></div>
            <div className="spec-desc"><p>202 kg</p></div>
          </div>
       
          </div>

          <div className="row">
          <h2>Zawieszenie</h2>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Przód</p></div>
            <div className="spec-desc"><p>Upside-down Kayaba o średnicy 46 mm i skoku 230 mm, regulowane</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Tył</p></div>
            <div className="spec-desc"><p>Monoshock Kayaba, 220mm skok, regulowane</p></div>
          </div>
         
       
          </div>

          <div className="row">
          <h2>Koła</h2>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Opona przód</p></div>
            <div className="spec-desc"><p>21 cali, bezdętkowe Pirelli Scorpion Rally STR</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Hamulce przód</p></div>
            <div className="spec-desc"><p>radialne Brembo M50 z czterema tłoczkami, podwójna tarcza o średnicy 320 mm</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Opona tył</p></div>
            <div className="spec-desc"><p>18 cali, bezdętkowe Pirelli Scorpion Rally STR</p></div>
          </div>
          <div className="catalog-spec">
            <div className="spec-headline"><p>Hamulce tył</p></div>
            <div className="spec-desc"><p>dwutłoczkowe Brembo, tarcza o średnicy 265 mm</p></div>
          </div>
         
       
          </div>
      

       

      </main>
    

    </Layout>
  );
}
};

export default Single;
