import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const staticContent = [
    {
      heading: "Department Of<br/>Computer Science &<br/>Engineering Offers a summer internship by the best professionals. &<br/> From 15th April to 24th May",
      link: "https://forms.gle/EYDz9tTzWM4AvGCa7",
      buttonText: "Register Now",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust root margin based on your design
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lineIndex < staticContent[currentItemIndex].text.length - 1) {
        setLineIndex((prevIndex) => prevIndex + 1);
      } else {
        setLineIndex(0);
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % staticContent.length);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [lineIndex, currentItemIndex]);

  // Reset animation when not in view
  useEffect(() => {
    if (!inView) {
      setCurrentItemIndex(0);
      setLineIndex(0);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`home-container ${inView ? 'visible' : ''}`}
      style={{
        background: `url("../Assets/entrance.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: '2vh',
      }}
    >
      <div
        className={`home-text-section with-shadow ${inView ? 'animate' : ''}`}
        style={{
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out, scale 1s ease-in-out',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px) scale(0.9)',
          backgroundColor: 'transparent', // Transparent background
          padding: '20px', // Adjust padding as needed
          borderRadius: '10px', // Adjust border radius as needed
          color: 'white', // Text color
          gap: "20px"
        }}
      >
        <h1 className="primary-heading" style={{ textAlign: 'center', whiteSpace: 'pre-line' }}>
          Department Of<br />
          B i o t e c h n o l o g y <br /></h1>
        <h2 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize: '2rem', color: '#4c4c4c' }}>
          Offers a summer internship by the best professionals. <br />
        </h2>
        <h3 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize: '2rem', color: '#4c4c4c' }}>
          From 15th April to 24th May <br /></h3>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3Ktu6UzX9pNLQWzd6yqhO0JVN7tSf3sauPPmgZPYKwyuzuA/viewform?usp=sf_link">
          <button className="btn btn-lg btn-outline-primary" >
            Register Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "5px" }} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
