import React from "react";
import Banner from "../../components/ui/banner";
import About from "../../components/ui/About";
import ContactForm from "../../components/ui/Contact";
import ContactNo from "../../components/ui/contact-no";
import Specialities from "../../components/ui/Specialities/";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <ContactForm />
      <About />
      <Specialities />
      <ContactNo />
    </div>
  );
};
export default HomeContainer;
