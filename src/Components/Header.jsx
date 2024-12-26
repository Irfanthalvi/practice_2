/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 30/11/2024 - 12:45:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/11/2024
    * - Author          : computer
    * - Modification    : 
**/
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Home icon
import { TextField } from "@mui/material";
import styled from "styled-components";

// Styled Components for Header
const TopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d3559;
  height: 60px;
  font-family: "Arial", sans-serif;
  color: white;
  font-size: 34px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  z-index: 1000;
`;

const DolibarrLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  span {
    font-size: 10px;
    position: absolute;
    top: -5px;
    left: 83%;
    transform: translateX(-50%);
    font-weight: normal;
    text-transform: uppercase;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  height: 70px;
  position: fixed;
  top: 60px;
  left: 0%;
  width: 100%;
  z-index: 999;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const NavLink = styled.div`
  text-decoration: none;
  color: #0d3559;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffd700;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopHeader>
        <DolibarrLogo>
          Dolibarr
          <span>ERP/CRM</span>
        </DolibarrLogo>
      </TopHeader>

      <MainHeader>
        <Navbar>
          <NavLink onClick={() => navigate("/")}>
            <FaHome style={{ fontSize: "20px" }} />
          </NavLink>
          <NavLink onClick={() => navigate("/features")}>Features</NavLink>
          <NavLink onClick={() => navigate("/blog")}>Blog</NavLink>
          <NavLink onClick={() => navigate("/community")}>Community</NavLink>
          <NavLink onClick={() => navigate("/documentation")}>Documentation</NavLink>
          <NavLink onClick={() => navigate("/online-demo")}>Online Demo</NavLink>
          <NavLink onClick={() => navigate("/downloads")}>Downloads</NavLink>
          <NavLink onClick={() => navigate("/addons")}>Addons</NavLink>
          <TextField size="small" type="text" placeholder="Search..." />
        </Navbar>
      </MainHeader>
    </>
  );
};

export default Header;
