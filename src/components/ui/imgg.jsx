import React from "react";

const imgg = ({ src }) => {
  return (
    <section className="mb-8">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={src}
          alt="About Us"
          className="w-full h-[300px] object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default imgg;
