/**
    * @description      : Addons Page with navigation functionality
    * @author           : computer
    * @group            : 
    * @created          : 30/11/2024 - 11:26:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/11/2024
    * - Author          : computer
    * - Modification    : Optimized navigation
**/
import React from "react";
import { useNavigate } from "react-router-dom";

const Addons = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navigate to Home
  };

  return (
    <div>
      <h1>Addons Page</h1>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default Addons;
