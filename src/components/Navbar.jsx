import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="py-4 flex justify-between bg-black text-white w-10/12  ">
        <div className="logo-container flex justify-between items-center ">
          <img
            src="../assets/giphy-logo-1.svg "
            alt="logo"
            className=" w-5 mx-2"
          />
          <h1 className=" font-[Helvetica] font-bold text-3xl">GIPHY</h1>
        </div>
        <div className="user flex justify-between items-end uppercase font-bold">
          <img
            src="../assets/gif-header.gif"
            alt="avatar"
            className="w-9 mx-2"
          />
          <span>Name User</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
