import React from "react";
import Banner from "../../components/ui/banner";
import About from "../../components/ui/About";
import ContactForm from "../../components/ui/Contact";
import ContactNo from "../../components/ui/contact-no";
import Specialities from "../../components/ui/Specialities/";
import Appointment from "../../components/ui/appointment";
import ImageCard from "../../components/ui/Specialities/image-card";
import ConsultancyForm from "../../components/ui/consultancy-form";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <ContactForm />
      <About />
      <Specialities />
      <ContactNo />
      <Appointment/>
      <ImageCard/>
      <ConsultancyForm/>
    </div>
  );
};
export default HomeContainer;
