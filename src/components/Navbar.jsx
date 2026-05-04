import React from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate= useNavigate()
  return (
    <div className="h-24 bg-[#4152CC] px-12 py-4 flex justify-around items-center">
      <div className="logo h-18 w-18 rounded-full overflow-hidden cursor-pointer" onClick={()=>{
        navigate('/')
      }}>
        <img
          src={logo}
          alt=""
          className="h-full w-full object-cover scale-125"
        />
      </div>
      <div className="links flex gap-5">
        <NavLink
          to="/"
          className="text-4xl"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/pokemons"
          className="text-4xl"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Pokemons
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
