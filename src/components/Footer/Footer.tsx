import React from 'react';
import './Footer.css';

import AnimatedContent from '../Bits/AnimatedContent/AnimatedContent';


interface FooterItemProps {
    imageUrl: string;
    text: string;
}

interface FooterProps {
    bottomImageUrl: string;
    bottomText: string;
}

export default function Footer({ bottomImageUrl, bottomText }: FooterProps) {




    return (


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


            <footer className="footer" >

                <div className='row'>

                    <ul className='col-lg-3'>
                        <h4 style={{textAlign:"left"}}>Recapiti</h4>
                        <li>
                            <i className="bi bi-geo-alt-fill "></i> Via Luigi de Marzia, 7, 84126 Salerno SA
                        </li>

                        <li>
                            <i className="bi bi-envelope-at-fill"></i> marconitto.pt@gmail.com
                        </li>

                        <br />

                        <li>
                       <a href="https://www.facebook.com/share/14kq7eGo6B/?mibextid=wwXIfr"><i className="bi bi-facebook footer-first-section-image i-btn circular-button " style={{marginRight:"2%"}}/></a>
                       <a href="https://www.instagram.com/marcus_tank_pt/"><i className="bi bi-instagram footer-first-section-image circular-button " style={{marginRight:"2%"}}/></a>
                       <a href="https://www.tiktok.com/@marcus_tank_pt?_t=ZN-8tfQzbihuXm&_r=1"><i className="bi bi-tiktok footer-first-section-image circular-button" style={{marginRight:"2%"}}/></a>
                        </li>

                    </ul>

                    <div className='col-lg-3 mt'>
                    <h4 className='al'>Orario Lavorativo</h4>
                        <h6 className='al'>Lun - Ven : </h6>
                        <p className='al'>09:00 / 18:00 </p>
                        <br />
                        <h6 className='al'>Sabato : </h6>
                        <p className='al'>09:00 / 13:00 </p>
                    </div>


                    <div className='col-lg-3 mt'>
                    <h4 className='al'>Informazioni Legali</h4>
                    <p className='al amb'> <a href="/note-legali">Note Legali</a></p>
                    <p className='al'> <a href="/cookies">Privacy e Cooky Policy</a></p>
                    </div>

                    <div className='col-lg-3 mt'>

                    <img src={bottomImageUrl} alt="Footer bottom" className="footer-bottom-image" />
                    <p className="footer-bottom-text">P.I. 06264260651</p>
                    </div>

                </div>

                <hr />
                <div className="footer-bottom">


                    <p className="footer-bottom-text">{bottomText}</p>

                </div>



            </footer>

        </AnimatedContent>
    );
}
