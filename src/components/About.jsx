import { useEffect, useState } from 'react';
import '../styles/About.css';

import About1 from '../assets/About/About1.jpg';
import About2 from '../assets/About/About2.jpg';
import About3 from '../assets/About/About3.jpg';

const images = [About1, About2, About3];

const HeroImageCard = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-us">
      <div
        className={`about-image ${fade ? 'fade' : ''}`}
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>

      <div className="about-gradient"></div>

      <div className="about-text">
        <p>Empowering farmers with modern agriculture solutions 🌱</p>
      </div>
    </div>
  );
};

export default HeroImageCard;
