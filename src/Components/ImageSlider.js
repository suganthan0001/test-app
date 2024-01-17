import React, { useState, useEffect } from 'react';
import image01 from '../Assets/01.jpeg';
import image02 from '../Assets/02.jpeg';
import image03 from '../Assets/03.jpeg';
import image04 from '../Assets/04.jpeg';
import image05 from '../Assets/05.jpeg';
import image06 from '../Assets/06.jpeg';
import image07 from '../Assets/07.png';
import image08 from '../Assets/08.png';
import image09 from '../Assets/09.jpeg';
import image10 from '../Assets/10.jpeg';
import image11 from '../Assets/11.png';

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); // Set opacity to 0 before changing image
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11); // Change 11 to the total number of images
        setImageOpacity(1); // Set opacity back to 1 after changing image
      }, 1500); // Adjust the transition time
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11];
    return images[index];
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh', // Add margin-top
  };

  const imageStyle = {
    width: '50%', // Adjust the width as needed
    height: 'auto',
    borderRadius: '10px', // Add border radius
    transition: 'opacity 1s ease-in-out', // Add transition
    opacity: imageOpacity, // Set the opacity
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop:'7vh' }}>Highlights of Our Department</h2>
      <img
        src={getImageName(imageIndex)}
        alt='image'
        style={imageStyle}
      />
    </div>
  );
};

export default ImageSlider;
