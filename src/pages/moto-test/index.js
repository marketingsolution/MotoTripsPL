import React from "react";
import NewsList from "../../components/post-archive";
import Layout from '../../components/layout'
import Breadcrumb from "../../components/Breadcrumb";
const Aktualnosci = () => {
  return (
    <Layout>
      <Breadcrumb title="Testy Motocykli"/>

      <div className="row">
        <p>Zapraszam do strony z naszymi moto testami, warto tu zajrzeć, żeby pomóc sobie wyrobić zdanie na temat wybranych motocykli. Znajdziesz tu przegląd różnych modeli i marek, głównie jednak związanych z szeroko pojętą turystyką motocyklową. Testuję motocykle przez pryzmat ich przydatności do jazdy w trasie i lekko trudnym terenie.

        Co mogę powiedzieć o sobie? Nie mam dużego doświadczenia raptem przejechane kilka tysięcy kilometrów. Co z tego wynika dla jakości testów? Dla jednych będzie to zaleta takich moto testów dla innych wada. Z pewnością bliżej będzie do moich testów motocykli osobom z mniejszym doświadczeniem niż większym.
        </p>
      </div>
     
      <NewsList />
      <div className="row">
        <h2>Testowane motocykle</h2>
        <p>
        Miełem już okazję sprawdzić wiele modeli i marek od <strong>BMW</strong>, przez <strong>Triumpha</strong> na Hondzie kończąc. Wynikiem tych testów po pierwszym sezonie zdecydowałem się na zakup pierwszego motocykla. W moim przypadku padło na Hondę NC750X w DCT. Siłą rzeczy wiele z tych testów będzie w nawiązaniu i odniesieniu do tego jak prowadzi się właśnie ten model.

        Wiem jak dużo czasu potrzeba aby przetestować wymarzone motocykle. Wybranie się do dealera, umówienie jazdy, często w różnych krańcach miasta. Następnie wybranie idealnej promocji oferty dla siebie, dlatego postanowiłem przyjść wam z pomocą. Staram się aby materiały pojawiały się dosyć regularnie. (Przynajmniej w sezonie)

        Możecie się spodziewać kolejnych testów mniej więcej dwa razy w miesiącu. Mam nadzieję publikowane <strong>moto testy pomogą wam w wyborze pierwszego motocykla</strong>. Czy przesiadce z mniejszej pojemności na większą. Do zobaczenia na trasie!
        </p>
      </div>
    </Layout>
  );
};

export default Aktualnosci;
