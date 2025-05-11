
import footerLogo from "landing-page-mn/assets/imgs/Logo/logo2_footer.png";


import './NoteLegali.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer/Footer";

import NoteLegCo from "../components/NoteLegCo/NoteLegCo";
import Header from "../components/newHeader/Header";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>

export function NoteLegali() {


  return (
    <div className="page">


      <header className="header-note">
        <Header
          backgroundImage={""}
          title="COMBATTI PER LA TUA FORMA MIGLIORE!"
          subtitle="Scopri i miei servizi e trasformati con il mio coaching personalizzato"
          buttonText="Contattami"
          onButtonClick={console.log}
        />
        <br />
        <br />
        <br />
        <br />
      </header>

      <body className="body-padded">
        <br />
        <br />
        <div className="note"><NoteLegCo /></div>
        <br />
        <br />
        <br />
        <br />
      </body>

      <footer style={{ backgroundColor: "#123266" }}>

        <Footer
          bottomImageUrl={footerLogo}
          bottomText="Designed By Francesco Ciano"
        />

      </footer>




    </div>
  )
}