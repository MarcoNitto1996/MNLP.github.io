import Footer from "../components/Footer/Footer";
import footerLogo from "landing-page-mn/assets/imgs/Logo/logo2_footer.png";
import Header from "../components/newHeader/Header";

import './Blog.css'
import AnimatedList from "../components/Bits/AnimatedList/AnimatedList";
import { useState, useEffect } from "react";

export function Blog() {

    const [selectedItem, setSelectedItem] = useState({
        index: 0,
        description: ""
      });

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    const hoverIntensity: number = 0.5;
    const enableHover: boolean = true;
    const newItems = [  // sostituire poi con una lista presa da un database
        {
          index: 1,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. vblablabla blablalbalblal balblablablablabl albalblalbalblablabla blablalbal blalbal"
        },
        {
          index: 2,
          description: "Curabitur vehicula magna vel velit fermentum, ac elementum elit blandit."
        },
        {
          index: 3,
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ];


    return (
        <div className="pagina">


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

            <main className="main-padded">

                    <br />
                    <br />
                    <br />
                <div className="container">
                    <div className={isMobile ? "row mx-auto w-100" : "row w-100"}>

                <div className={isMobile ? "col-12 p-3 w-100" : "col-9 m text"}>

                    {selectedItem && (
                        <div>
                            <p>{selectedItem.description}</p>
                        </div>
                    )}
                </div>

                    <br />
                    <br />
                    <br />
                    <br />



                    <div className={isMobile ? "col-12 p-3 mx-auto" : "col-3 p-3"}>

                        <h3>Articoli</h3>

                        <AnimatedList
                            items={newItems.map((item) => "item " + item.index)}
                            onItemSelect={(item, index) => {
                                setSelectedItem({index: index, description: newItems[index].description});
                            }}
                            showGradients={true}
                            enableArrowNavigation={true}
                            displayScrollbar={true}
                        />
                    </div>
                    </div>
                    </div>
            </main>
            <br />
            <br />
            <br />
            <br />

            <Footer
                bottomImageUrl={footerLogo}
                bottomText="Designed By Francesco Ciano"
            />

        </div>
    )
}