import React from 'react';
import './Marquee.css'; // Include your CSS file
import i1 from '../images/image1.png';
import i2 from '../images/image2.png';
import i3 from '../images/image3.png';
import i4 from '../images/image4.png';
import i6 from '../images/image6.png';
import i7 from '../images/image7.png';
import i9 from '../images/image9.png';
import i10 from '../images/image10.png';
import i11 from '../images/image11.png';
import i12 from '../images/image12.png';
import i14 from '../images/image14.png';
import i16 from '../images/image16.png';
import i20 from '../images/image20.png';
import i21 from '../images/image21.png';
import i26 from '../images/image26.jpg';
import i27 from '../images/image27.png';
import i23 from '../images/image23.png';
import i24 from '../images/image24.png';
import i25 from '../images/image25.png';

const MarqueeComponent = () => {
    return (
        <div className="marquee-container">
            <h2 className="marquee-heading" style={{ fontSize: '3rem' }}>Our Reputable Recruiters</h2>
            <div className="marquee-content">
                <div className="marquee-item">
                    <img src={i1} alt="image1" />
                </div>
                <div className="marquee-item">
                    <img src={i2} alt="image2" />
                </div>
                <div className="marquee-item">
                    <img src={i3} alt="image3" />
                </div>
                <div className="marquee-item">
                    <img src={i4} alt="image4" />
                </div>
                <div className="marquee-item">
                    <img src={i6} alt="image6" />
                </div>
                <div className="marquee-item">
                    <img src={i7} alt="image7" />
                </div>
                <div className="marquee-item">
                    <img src={i9} alt="image9" />
                </div>
                <div className="marquee-item">
                    <img src={i10} alt="image10" />
                </div>
                <div className="marquee-item">
                    <img src={i11} alt="image11" />
                </div>
                <div className="marquee-item">
                    <img src={i12} alt="image12" />
                </div>
                <div className="marquee-item">
                    <img src={i14} alt="image14" />
                </div>
                <div className="marquee-item">
                    <img src={i16} alt="image16" />
                </div>
                <div className="marquee-item">
                    <img src={i20} alt="image20" />
                </div>
                <div className="marquee-item">
                    <img src={i21} alt="image21" />
                </div>
                <div className="marquee-item">
                    <img src={i26} alt="image26" />
                </div>
                <div className="marquee-item">
                    <img src={i27} alt="image27" />
                </div>
                <div className="marquee-item">
                    <img src={i23} alt="image23" />
                </div>
                <div className="marquee-item">
                    <img src={i24} alt="image24" />
                </div>
                <div className="marquee-item">
                    <img src={i25} alt="image25" />
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent;
