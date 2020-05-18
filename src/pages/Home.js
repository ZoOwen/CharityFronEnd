import React from "react";

// Components
import Carousel from "../components/Home/CarouselHome";
import Section1 from "../components/Home/Section1Home";
import Recent from "../components/Home/RecentHome";
import Section2 from "../components/Home/Section2Home";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Carousel />
      <Section1 />
      <Recent />
      <Section2 />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
