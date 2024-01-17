import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (
    <div className="about-section-container" style={{ marginTop: '1vh' }}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/SrGA0u3y-Is?si=isnY1cf_ZtMB_iFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">About Our Department</h1>
<ul>
  <li class="primary-text">Accredited by NBA Since 2002</li>
  <li class="primary-text">Anna University recognized Research centre</li>
  <li class="primary-text">Lab Equipment worth 1.68 crores</li>
  <li class="primary-text">MOU with 5 companies / Institutes</li>
  <li class="primary-text">3 Anna University Recognized Supervisors</li>
  <li class="primary-text">327 Journal Publications</li>
  <li class="primary-text">13 patents published and 2 patents awarded</li>
  <li class="primary-text">Received 1.78 crores Fund from various government organizations</li>
  <li class="primary-text">60% students placements and 40% Higher Studies</li>
  <li class="primary-text">Total 161 Anna University rank holders with 11 gold medals and 10 silver medals</li>
  <li class="primary-text">Strong Industrial collaboration and Alumni interaction for placements</li>
  <li class="primary-text">Several clubs & student chapters for promoting Co-Curricular activities</li>
  <li class="primary-text">Several value-added courses are conducted beyond the curriculum</li>
  <li class="primary-text">Facilitating Industrial Visits and NGOs for the comprehensive development of the students</li>
</ul>


        <div className="about-buttons-container">
          <a href="https://www.stjosephscse.com/#/"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
