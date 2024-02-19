import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import InfoSection from "../../Components/Home/InfoSection";
import ClientSection from "../../Components/Home/ClientSection";
import WhySection from "../../Components/Home/WhySection";
import TeamSection from "../../Components/Home/TeamSection";
import SliderSection from "../../Components/Home/SliderSection";
import AboutSection from "../../Components/Home/AboutSection";
import ServiceSection from "../../Components/Home/ServiceSection";

const Home = () => {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>

        {/* <!-- header section strats --> */}
        <Header />
        {/* <!-- end header section --> */}

        {/*<!-- slider section --> */}
        <SliderSection />
        {/* <!-- end slider section --> */}
      </div>

      {/* <!-- service section --> */}

      <ServiceSection />

      {/* <!-- end service section --> */}

      {/* <!-- about section --> */}
      <AboutSection />

      {/* <!-- end about section --> */}

      {/* <!-- why section --> */}
      <WhySection />
      {/* <!-- end why section --> */}

      {/* <!-- team section --> */}
      <TeamSection />
      {/* <!-- end team section --> */}

      {/* <!-- client section --> */}
      {/* <ClientSection /> */}

      {/* <!-- end client section --> */}

      {/* <!-- end info section --> */}
      <Footer />
    </>
  );
};

export default Home;
