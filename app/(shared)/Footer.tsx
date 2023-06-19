import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Future is what we all look forward to. In 21st century everything
            becomes so easy every day. This means that accesing to futuristic
            tools become very easy. Traveling on the moon or having AI tool,
            that helps your life gets easier is what we all need.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Future is only one step away from you</p>
          <p className="my-5">Link to the future</p>
          <p>Let me be your partner in futuristic trip</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">call us </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
