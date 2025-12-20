// import '../styles/HomeSection.css';
// import f3 from '../assets/home/f3.jpg'; 

// import { Link } from 'react-router-dom';


// const HeroSection = () => {
//   return (
//     <section className="hero-wrapper">
//       <img src={f3} alt="Farm" className="hero-img" />

//       <div className="hero-text">
//         <h1>Fresh & Organic Farm Products</h1>
//         <p>Bringing naturally grown foods straight to your home.</p>

//         {/* <div className="hero-buttons">
//           <a href="/shop" className="btn-primary">
//             Shop Now
//           </a> */}

//         <div className="hero-buttons">
//           <Link to="/category2" className="btn-primary">
//             Shop Now
//           </Link>
//           {/* <a href="/rent" className="btn-secondary">
//             Rent Equipment
//           </a> */}
//           <Link to="/rent" className="btn-primary">
//           Rent Equipment
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };



// export default HeroSection;






import { Link } from 'react-router-dom';
import f3 from '../assets/home/f3.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      {/* Background Image */}
      <img
        src={f3}
        alt="Fresh food"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
        max-w-xl
        text-white
        bg-black/50
        backdrop-blur-md
        rounded-2xl
        p-8 md:p-10
        shadow-[0_20px_50px_rgba(0,0,0,0.6)]
      "
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Grow & Buy Locally <br />
              Sustain Your Food System
            </h1>

            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Fresh organic produce sourced directly from local farmers,
              ensuring quality, sustainability, and taste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <Link
                to="/category2"
                className="
            inline-flex items-center justify-center
            bg-gradient-to-r from-orange-500 to-orange-600
            hover:from-orange-600 hover:to-orange-700
            text-white font-semibold
            px-8 py-3
            rounded-full
            shadow-lg hover:shadow-2xl
            transition-all duration-300
            hover:-translate-y-1
            active:translate-y-0
          "
              >
                Shop Now
              </Link>

              {/* Secondary Button */}
              <Link
                to="/rent"
                className="
            inline-flex items-center justify-center
            bg-white/15 hover:bg-white/25
            text-white font-semibold
            px-8 py-3
            rounded-full
            border border-white/30
            backdrop-blur-sm
            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
          "
              >
                Rent Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
