import React, { useState, useEffect } from 'react';
import image01 from '../images/a1.jpg';
import image02 from '../images/a2.jpg';
import image03 from '../images/a3.jpg';
import image04 from '../images/a4.jpg';
import image05 from '../images/a5.jpg';
import image06 from '../images/a6.png';
import image07 from '../images/a7.jpg';
import image08 from '../images/a8.jpg';
// import image09 from '../images/';
// import image10 from '../images/';
// import image11 from '../images';

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); // Set opacity to 0 before changing image
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 8); // Change 11 to the total number of images
        setImageOpacity(1); // Set opacity back to 1 after changing image
      }, 1500); // Adjust the transition time
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image01, image02, image03, image04, image05, image06, image07, image08];
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
      <h2 className='highlights' style={{ fontSize: '3rem', marginTop:'7vh' }}>Highlights of Our Department</h2>
      <img
        src={getImageName(imageIndex)}
        alt='altIImage'
        style={imageStyle}
        className='high-images'
      />
    </div>
  );
};

export default ImageSlider;
