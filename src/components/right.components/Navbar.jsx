import React, { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FaCloudArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

import UserCard from "../authComponents/UserCard";

import "./RightComponent.css";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export const Navbar = () => {
  const {cardShow, setCardShow} = useContext(MyContext);
  const cardToggle = (e) => {
    setCardShow(!cardShow);
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <h3>
          SigmaGPT <HiMiniChevronDown />
        </h3>
      </div>
      <div className="nav-right">
        <div>
          <FiShare /> Share
        </div>
        <div onClick={cardToggle} className="profile-icon">
          <CgProfile />
        </div>
      </div>
      {cardShow ? <Card /> : ""}
    </nav>
  );
};

const Card = () => {
  const  {toggleProfile, setToggleProfile} = useContext(MyContext);
  const navigate = useNavigate();
  const logoutAction = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const getUserDetails = async (e) => {
    setToggleProfile(true);
  };

  return (
    <div className="Card">
      <ul>
        <li onClick={getUserDetails}>
          <FaUser /> User profile
        </li>
        <li>
          <IoSettingsOutline /> Settings
        </li>
        <li>
          <FaCloudArrowUp /> Upgrade plan
        </li>
        <li onClick={logoutAction}>
          <MdOutlineLogout /> Log out
        </li>
      </ul>
      {toggleProfile? <UserCard/>: ""}
    </div>
  );
};
