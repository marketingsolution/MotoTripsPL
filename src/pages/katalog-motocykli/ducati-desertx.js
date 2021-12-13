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
        <h1>Ducati DesertX 2021 r</h1>
        <Breadcrumb title="Ducati DesertX 2021 r" path="/katalog-motocykli" pathName="Katalog motocykli"/>
        <div className="row flex">
          <StaticImage 
            className="brand-logo"
            alt="Logo Ducati"
            src="../../img/loga/ducati-logo.png"/>  

        </div>
        <div className="row flex">
          
          <div className="catalog-lead">
          <div className="catalog-featured-image">
            <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx.jpg" alt="Ducati DesetX"/></div>
            <h2>Dane techniczne Ducati DesertX 2021 r.</h2>
            <p className="lead">Nowy model Ducati DesertX został zaprezentowany w szóstym, ostatnim już odcinku serii premier internetowych Ducati World Première 2022. Duży prześwit, 21-calowe przednie koło i 18-calowe tylne, a także zawieszenie o dużym skoku: DesertX został zaprojektowany, żeby doskonale radzić sobie w najbardziej wymagającym terenie. Napędzany silnikiem Testastretta 11°, nowy DesertX gwarantuje wygodną, łatwą i bezpieczną jazdę w różnych warunkach, dzięki obsesyjnej dbałości o ergonomię, dogłębnym badaniom aerodynamicznym, jak również technologiom najnowszej generacji.</p>
          </div>
        
        </div>
        <div className="row flex">
          <div className="featured-tech">
            <h3>Producent:</h3>
            <p>Ducati</p>
          </div>
          <div className="featured-tech">
            <h3>Rok produkcji</h3>
            <p>2021 r.</p>
          </div>

          <div className="featured-tech">
            <h3>Typ</h3>
            <p>Enduro Turystyczny</p>
          </div>

          <div className="featured-tech">
            <h3>Ocena</h3>
            <p>4,5 / 5</p>
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
          <div className="row">
          <h2>Akcesoria</h2>
          <p>Dostępne są między innymi: 
            <ul>
              <li>rajdowe siedzisko poprawiające skuteczność w jeździe offroadowej,</li>  
              <li>dodatkowy zbiornik paliwa na 8 litrów,</li>  
              <li>aluminiowe kufry boczne i centralny o łącznej pojemności 117 l,</li>  
              <li>dodatkowe reflektory LED,</li>  
              <li>stopka centralna i podgrzewane manetki.</li>  
            </ul>
             W ramach wyposażenia opcjonalnego zamówić można również homologowany układ wydechowy Termignoni, który oferowany jest również w wariancie wyścigowym, z dedykowanym mapowaniem, zwiększającym wartości mocy i momentu obrotowego o +7%. Wszystkie akcesoria Ducati Performance można obejrzeć w <a href="https://configurator.ducati.com/bikes/ww/en/">konfiguratorze online</a>.</p>
         
       
          </div>

          <div className="row flex">
            <div className="gallery-catalog">
             <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx_front.jpg" alt="Ducati DesetX"/>
            </div>
            <div className="gallery-catalog">
             <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx_clock.jpg" alt="Ducati DesetX"/>
            </div>
            <div className="gallery-catalog">
             <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx_side.jpg" alt="Ducati DesetX"/>
            </div>
            <div className="gallery-catalog">
             <StaticImage src="../../img/catalog/ducati/desertx/ducati_desertx_right.jpg" alt="Ducati DesetX"/>
            </div>
          </div>
        

      </main>
    

    </Layout>
  );
}
};

export default Single;
