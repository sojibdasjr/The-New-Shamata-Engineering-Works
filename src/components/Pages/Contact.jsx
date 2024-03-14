import React from "react";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactDetails/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="bg-white">
        <ContactForm />
      </div>
      <div className="bg-white">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
