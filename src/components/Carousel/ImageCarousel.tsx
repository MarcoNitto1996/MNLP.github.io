import React, { useEffect } from 'react';
import './ImageCarousel.css';

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [startIndex, setStartIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false); // Stato per la transizione
    const visibleThumbnails = 3;

    // Variabili per il rilevamento dello swipe
    let touchStartX: number | null = null;
    let touchEndX: number | null = null;

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 50) {
            nextImage();
        } else if (swipeDistance < -50) {
            prevImage();
        }

        touchStartX = null;
        touchEndX = null;
    };

    const nextImage = () => {
        setIsTransitioning(true); // Attiva la transizione
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % images.length;

                setStartIndex((prevStartIndex) => {
                    if (newIndex >= prevStartIndex + visibleThumbnails) {
                        return (prevStartIndex + 1) % images.length;
                    } else if (newIndex === 0) {
                        return 0;
                    }
                    return prevStartIndex;
                });

                return newIndex;
            });
            setIsTransitioning(false); // Disattiva la transizione dopo il cambio di immagine
        }, 400); // Durata della transizione (match con CSS)
    };

    const prevImage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex - 1 + images.length) % images.length;

                setStartIndex((prevStartIndex) => {
                    if (newIndex < prevStartIndex) {
                        return (prevStartIndex - 1 + images.length) % images.length;
                    } else if (newIndex === images.length - 1) {
                        return Math.max(0, images.length - visibleThumbnails);
                    }
                    return prevStartIndex;
                });

                return newIndex;
            });
            setIsTransitioning(false);
        }, 400);
    };

    return (
        <div className="carousel">
            <div 
                className="carousel-main" 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <img 
                    src={images[currentIndex]} 
                    alt={`Image ${currentIndex + 1}`} 
                    className={`carousel-main-image ${isTransitioning ? 'transition' : ''}`} 
                />
            </div>
            <div className="carousel-thumbnails">
                <button onClick={prevImage} className="carousel-button"><i className="bi bi-caret-left-fill"></i></button>
                
                <div className="thumbnail-container">
                    {Array.from({ length: visibleThumbnails }).map((_, index) => {
                        const actualIndex = (startIndex + index) % images.length;
                        return (
                            <img
                                key={actualIndex}
                                src={images[actualIndex]}
                                alt={`Thumbnail ${actualIndex + 1}`}
                                onClick={() => setCurrentIndex(actualIndex)}
                                className={`carousel-thumbnail ${actualIndex === currentIndex ? 'active' : ''}`}
                            />
                        );
                    })}
                </div>
                
                <button onClick={nextImage} className="carousel-button"><i className="bi bi-caret-right-fill"></i></button>
            </div>
        </div>
    );
}
