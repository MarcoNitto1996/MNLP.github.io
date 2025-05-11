import Card from "../components/Card/Card";
import { listItems1, listItems2, listItems3 } from '../components/Card/CardLists';

import { Imasgelist } from "../components/Carousel/ImageCarouselPics"
import ImageCarousel from "../components/Carousel/ImageCarousel";

import aboutImg from "landing-page-mn/assets/imgs/aboutImg/about.png"
import footerLogo from "landing-page-mn/assets/imgs/Logo/logo2_footer.png";
import headerImg from "landing-page-mn/assets/imgs/Home/h1_hero.png";


import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutMe from "../components/AboutMe/AboutMe";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Footer from "../components/Footer/Footer";
import Header from "../components/newHeader/Header";

import AnimatedContent from "../components/Bits/AnimatedContent/AnimatedContent";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>

export function HomePage() {

  return (
    <div className="homepage">

      <section>
        <div>
          <Header
            backgroundImage={headerImg}
            title="COMBATTI PER LA TUA FORMA MIGLIORE!"
            subtitle="Scopri i miei servizi e trasformati con il mio coaching personalizzato"
            buttonText="Contattami"
            onButtonClick={console.log}
          />

        </div>
      </section>



      <section id="about">

        <SectionTitle text="Chi Sono" />

        <AboutMe
          imageSrc={aboutImg}
          altText="An image of myself"
          htmlContent="<p>Sono Marco Nitto e mi occupo di trasformare l'aspetto fisico dei miei clienti con il mio servizio di Personal Training.<br><br>
                            Il mio metodo prevede un approccio basato su evidenze scientifiche addizionate alla mia esperienza più che decennale nell'allenamento con i pesi.<br><br>
                            Che tu parta da una condizione di sovrappeso, sottopeso o già ben allenata non importa, ti aiuterò a raggiungere qualsiasi tuo obiettivo rendendo
                             i tuoi allenamenti ben organizzati e completamente ritagliati sulle tue caratteristiche.</p>"
        />
      </section>


      {/* <section>

        <SectionTitle text="Perche Scegliere un PT" />

        <Motivo
          imageSrc={aboutImg}
          altText="An image of myself"
          htmlContent="<p>Sono Marco Nitto e mi occupo di trasformare l'aspetto fisico dei miei clienti con il mio servizio di Personal Training.<br><br>
                            Il mio metodo prevede un approccio basato su evidenze scientifiche addizionate alla mia esperienza più che decennale nell'allenamento con i pesi.<br><br>
                            Che tu parta da una condizione di sovrappeso, sottopeso o già ben allenata non importa, ti aiuterò a raggiungere qualsiasi tuo obiettivo rendendo
                             i tuoi allenamenti ben organizzati e completamente ritagliati sulle tue caratteristiche.</p>"
        />
      </section> */}

      <section id="gallery" >
        <br></br>
        <SectionTitle text="I Miei Clienti" />


        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >

          <ImageCarousel images={Imasgelist} />

        </AnimatedContent>

      </section>


      <section id="servizi">

        <SectionTitle text="Coaching Dal Vivo" />

        <div className="card-container">

          <Card
            title="Level 1"
            price={120}
            discountedPrice=""
            discountPercentage=""
            duration="6 Settimane"
            items={listItems1}
            button_text="Contattami"
          />

          <Card
            title="Level 2"
            price={324}
            discountedPrice="360"
            discountPercentage="10%"
            duration="18 Settimane"
            items={listItems2}
            button_text="Contattami"
          />

          <Card
            title="Level 3"
            price={600}
            discountedPrice="720"
            discountPercentage="17%"
            duration="36 Settimane"
            items={listItems3}
            button_text="Contattami"
          />

        </div>

      </section>

      <section>

        <SectionTitle text="Coaching Online" />

        <div className="card-container">



          <Card
            title="Level 1"
            price={70}
            discountedPrice=""
            discountPercentage=""
            duration="6 Settimane"
            items={listItems1}
            button_text="Contattami"
          />

          <Card
            title="Level 2"
            price={189}
            discountedPrice="210"
            discountPercentage="10%"
            duration="18 Settimane"
            items={listItems2}
            button_text="Contattami"
          />

          <Card
            title="Level 3"
            price={357}
            discountedPrice="420"
            discountPercentage="15%"
            duration="36 Settimane"
            items={listItems3}
            button_text="Contattami"
          />

        </div>

      </section>

      <ScrollToTopButton />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section >
        <div className="bit-top">
        <SectionTitle text="Dove Mi Alleno"/>
        </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96815.58718897021!2d14.687886745303384!3d40.68526870884758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x133bc2349aa5014f%3A0x73b7127729feca0b!2sVia%20Luigi%20de%20Marzia%2C%207%2C%2084126%20Salerno%20SA!3m2!1d40.6852935!2d14.770294999999999!5e0!3m2!1sit!2sit!4v1733866020383!5m2!1sit!2sit"
          loading="lazy">
        </iframe>



      </section>



      <section id="footer" style={{backgroundColor: "#123266"}}>

        <SectionTitle text="Contatti" />



          <Footer
            bottomImageUrl={footerLogo}
            bottomText="Designed By Francesco Ciano"
          />


      </section>


    </div>
  )
}