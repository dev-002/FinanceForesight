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
      <div class="hero_area">
        <div class="hero_bg_box">
          <div class="bg_img_box">
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
      <ClientSection />

      {/* <!-- end client section --> */}

      {/* <!-- info section --> */}
      <InfoSection />

      {/* <!-- end info section --> */}
      <Footer />

      {/* <!-- jQery --> */}
      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      {/* <!-- popper js --> */}
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      {/* <!-- bootstrap js --> */}
      <script type="text/javascript" src="js/bootstrap.js"></script>
      {/* <!-- owl slider --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      ></script>
      {/* <!-- custom js --> */}
      <script type="text/javascript" src="js/custom.js"></script>
      {/* <!-- Google Map --> */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
      {/* <!-- End Google Map --> */}
    </>
  );
};

export default Home;
