import React from "react";
import Banner from "../../components/ui/banner";
import About from "../../components/ui/About";
import ContactForm from "../../components/ui/Contact";
import ContactNo from "../../components/ui/contact-no";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <ContactForm/>
      <About />
      <ContactNo/>
    </div>
  );
};
export default HomeContainer
