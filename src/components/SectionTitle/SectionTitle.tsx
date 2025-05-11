import React from 'react';
import './SectionTitle.css';
import AnimatedContent from '../Bits/AnimatedContent/AnimatedContent';

interface SectionTitleProps {
    text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <>

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
  <div><h2 className="section-title">{text}</h2></div>
</AnimatedContent>



    </>

)
};

export default SectionTitle;
