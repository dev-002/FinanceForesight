import React from "react";
import InfoSection from "./Home/InfoSection";

const Footer = () => {
  return (
    <>
      <InfoSection />
      {/* <!-- footer section --> */}
      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">FinanceForeSight Corp.</a>
          </p>
        </div>
        {/* <!-- footer section --> */}
      </section>
    </>
  );
};

export default Footer;
