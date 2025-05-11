import AnimatedContent from '../Bits/AnimatedContent/AnimatedContent';
import CountUp from '../Bits/CountUp/CountUp';
import GradientText from '../Bits/GradientText/GradientText';
import ShinyText from '../Bits/ShinyText/ShinyText';
import './Card.css'; // Importa i CSS per il componente

interface CardProps {
    title: string;
    duration: string;

    price: number;                // Prezzo originale
    discountedPrice: string;      // Prezzo scontato
    discountPercentage: string;    // Percentuale di sconto

    items: string[]; // Array di stringhe per la lista
    button_text: string;
}

export default function Card({ title, price, discountedPrice, discountPercentage, duration, items, button_text }: CardProps) {
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

            <div className="card">

                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-duration">{duration}</h4>
                    <div className="card-price-container">

                        {/* <p className="card-price">{price}</p> */}


                            {<CountUp
                                from={0}
                                to={price}
                                separator=","
                                direction="up"
                                duration={1}
                                className="card-price"
                            />}


                        <p className="card-discounted-price">{discountedPrice}</p>
                        <span className="discount-percentage">{discountPercentage}</span>
                    </div>

                    {/* Lista dinamica */}
                    <ul className="card-list">
                        {items.map((item, index) => (
                            <li key={index} className="card-list-item">{item}</li>
                        ))}
                    </ul>

                    <button className="card-btn">
                        <ShinyText text={button_text} disabled={false} speed={3} className='custom-class' />

                    </button>
                </div>
            </div>

        </AnimatedContent>
    );
}
