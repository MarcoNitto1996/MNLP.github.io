import React from 'react';
import './AboutMe.css';
import AnimatedContent from '../Bits/AnimatedContent/AnimatedContent';


interface AboutMeProps {
    imageSrc: string;
    altText: string;
    htmlContent: string; // HTML content as a string
}

export default function AboutMe({ imageSrc, altText, htmlContent }: AboutMeProps) {
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
            <div className="about-me">
                <div className="about-me-image">
                    <img src={imageSrc} alt={altText} />
                </div>
                <div className="about-me-text" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

        </AnimatedContent>
    );
}
