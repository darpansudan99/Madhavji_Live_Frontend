import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2 mx-20">
          <h3 className="text-2xl mb-4">MadhavJi Sweet Shop</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="md:col-span-1 mx-1">
          <h3 className="text-2xl mb-4">Subscribe to get important updates</h3>
          <form className="flex">
            <input
              type="email"
              name="email"
              placeholder="YOUR E-MAIL"
              className="px-4 py-2 rounded-l mr-2"
            />
            <input
              type="submit"
              value="subscribe"
              className="px-6 py-2 bg-blue-500 text-white rounded-r cursor-pointer"
            />
          </form>
        </div>
        <div className="md:col-span-1 mx-auto">
          <h3 className="text-2xl mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <FaDiscord className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
            <FaYoutube className="text-white text-2xl" />
          </div>
        </div>
        <div className="md:col-span-1 mx-20">
          <h3 className="text-2xl mb-4">Call Us</h3>
          <h3>+91 12345678978</h3>
        </div>
      </div>

      <div className="border-t mt-8 pt-8">
        <div className="container mx-auto flex justify-between">
          <p className="mx-auto">@{new Date().getFullYear()} Darpan Sudan. All Rights Reserved</p>
          <div className="flex mx-auto">
            <p className="mr-4">PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
