import React from "react";
import { NavLink } from "react-router-dom";
import madhavji from "../Assets/madhavji.webp";

const About = () => {
  const data = {
    name: "MadhavJi Sweet Shop",
  };

  return (
    <section className="py-16 md:py-18 px-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hero-section-data">
            <p className="text-gray-500 mb-2 md:mb-4 text-sm md:text-base font-semibold">
              Welcome to
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.name}</h1>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">About Madhavji Sweet Shop</h3>
              <p className="text-gray-600">
                Welcome to Madhavji Sweet Shop, where sweet dreams come to life. We are passionate about crafting the most delectable and authentic sweets that will tantalize your taste buds and leave you craving for more.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Our Sweet Journey</h3>
              <p className="text-gray-600">
                Our story began with a profound love for traditional Indian sweets and a deep-rooted desire to share them with the world. We believe that each piece of our sweet is a piece of happiness that brings joy and smiles to our customers' faces.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Our Sweet Creations</h3>
              <p className="text-gray-600">
                We take immense pride in offering a wide array of both traditional and innovative sweets, each carefully handcrafted with love and passion. From timeless favorites like Gulab Jamun and Jalebi to unique creations that blend a symphony of flavors and textures, our sweet shop caters to every sweet tooth.
              </p>
            </div>

            <NavLink to={""}>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">
                View Our Menu
              </button>
            </NavLink>
          </div>

          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure className="relative">
              <image
                src={madhavji}
                alt="hero-section-photo"
                className="img-style rounded-md shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent rounded-md"></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
