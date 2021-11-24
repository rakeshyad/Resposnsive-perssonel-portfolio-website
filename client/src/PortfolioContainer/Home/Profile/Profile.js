import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/rakesh-yadav-153442225/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/rakeshyad">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://mail.google.com/mail">
                <i className="fa fa-envelope"></i>
              </a>
              
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am{" "}
              <span className="highlighted-text">
                <b>Rakesh Yadav</b>
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Aspiring Data Scientist ",
                    1000,
                    "Proficient in ML/DL Modleing  ",
                    1000,
                    "Financial Analyst-P2P-O2C-Payroll ",
                    1000,
                    "A Web Designer ",
                    1000,
                  ]}
                />
              </h1>
              <span className="porfile-role-tagline">
                Knack of Machine Learning model building and 
                Web devlopment
                appilications with Front and back end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> <b>Hire Me</b> </button>
            <a
              href="Rakesh_Yadav_Blank_Template___Resume.pdf"
              download="Rakesh_Yadav_resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
         
          </div>
        </div>
      </div>
    </div>
  );
}
