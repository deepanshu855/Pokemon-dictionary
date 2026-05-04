import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="h-10 w-full bg-[#4152CC] px-12 py-3 flex justify-center items-center gap-5 absolute bottom-0 left-0">
      Catch, explore, and enjoy the world of Pokémon.
      <div className="logo h-6 w-6 rounded-full overflow-hidden cursor-pointer">
        <img
          src={logo}
          alt=""
          className="h-full w-full object-cover scale-125"
        />
      </div>
    </div>
  );
};

export default Footer;
