import React from "react";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">HF</span>
      <div>
        <ul className="task-icon">
          <li className="each-icon">
            <i className=" fas fa-video fa-lg"></i>
            Live
          </li>
          <li className="each-icon">
            <i className="fas fa-id-card fa-lg"></i>
            Memebership
          </li>
          <li className="each-icon">
            <i className="fas fa-running fa-lg"></i>Plans
          </li>
          <li className="each-icon">
            <i className="fas fa-duotone fa-table-cells-large fa-lg"></i>
            More
          </li>
        </ul>
      </div>
      <div className="login">
        <i className="fa-solid fa-user user"></i>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Header;
