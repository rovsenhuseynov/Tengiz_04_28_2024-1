import React from "react";
import "./ContactUs.scss";
import ContactUsParallaxHeader from "./ContactUsParallaxes/ContactUsParallaxHeader";
import ContactForm from "./ContactForm/ContactForm";
import ComponentFAQ from "./ComponentFAQ/ComponentFAQ";
import ContactUsMap from "./ContactUsMap/ContactUsMap";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";
import DividerBlackLine from "../../Components/reusableComponents/DividerLine/DividerBlackLine";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <ScrollToTop />
      <ContactUsParallaxHeader />
      <div className="contactUs__form-preface">
        If you have questions or comments, please contact us in any convenient
        way. <br /> Ask away. There is not a single reasonable question that our
        team cannot answer.
      </div>
      <ContactForm />
      <DividerBlackLine />
      <ComponentFAQ />
      <DividerBlackLine />
      <ContactUsMap />
    </div>
  );
};

export default ContactUs;
