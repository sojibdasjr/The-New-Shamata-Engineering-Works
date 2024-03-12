import React from "react";
import CompanySwiper from "./CompanySwiper";

const CompaniesProfile = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto pb-16 mx-2">
      <div>
        <div className="text-black text-center">
          <h1 className="text-2xl pt-10">Companies Profile</h1>
          <p className="py-5">
            We are here to provide design consulting, furniture and styling, and
            full-service renovation and design services. We are located in the
            Bay Area, CA, but are open to taking on remote projects as well.
            Please fill out the form with a brief description of what you’re
            looking for, and we will get back to you within 48 business hours.
            We look forward to hearing from you!
          </p>
        </div>
      </div>
      <CompanySwiper />
    </div>
  );
};

export default CompaniesProfile;
