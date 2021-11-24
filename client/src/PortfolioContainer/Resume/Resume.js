import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "SQL", ratingPercentage: 92 },
    { skill: "Python", ratingPercentage: 90 },
    { skill: "R", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 95 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 75 },
    
  ];

  const projectsDetails = [
    
    {
      title: "Intraday Stock Price Prediction for Microssoft",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Durring my Data Science Intership journey with Technocolabs , We have given a task to build a SVM model to predict what will be the change in stock price at the end of the day based on past 5 years stock price history",
      subHeading:
        "Technologies Used: Autoegression Techniques,BoxCox Tranformation,Feature Engineering like (MACD,EMA,Signal line ,Histogram),SVM Regressor, Falsk,Heroku",
    },
    {
      title: "Employee Attrition Prediction  ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Having a monthly information(Demographic-Tenure Information-Performance details) for segment of employees for 2016 and 2017 and tasked to predict weather a current employee will be leaving the organisation in teh upcoming two quarters (jan-2018-july-2018)",
      subHeading:
        "Technologies Used: Seaborn/Matplotlib,Date-Time,Outliers Handling,Feature Engineering,Catboost classifier, Xgboost, ANN binary classifier",
    },
    {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2021", toDate: "2021" },
        description:
          "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap,HTML,CSS,Node-js,",
      },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
        <ResumeHeading
        heading={"High School "}
        subHeading={"Kendriya Vidyalaya"}
        fromDate={"2011"}
        toDate={"2013"}
      />

      <ResumeHeading
        heading={"Bangalore University"}
        subHeading={"Bachelor of Buisness Management"}
        fromDate={"2013"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"International Institute of Information Technology Bangalore "}
        subHeading={"Post Graduate Diploma Data Science - Deep Learning"}
        fromDate={"2020"}
        toDate={"2021"}
        
      />
        <br>
        </br>
    </div>,


    /* WORK EXPERIENCE */
    <div className="resume-screen-container-work-expirence-container" key="work-experience">
        <ResumeHeading
          heading={"Work History"}
          subHeading={"Financial Analyst"}
          fromDate={"2016"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Previously worked in two reputed Companies EXL outsourcing (US Client) and ID-MEDICAL(UK clients), part of query team use to resolve Payment queries, Bank Setup Queries, Timesheets/Invoice queries, remittance,Worked closely with clients to maintain optimum levels of communication to effectively and efficiently complete projects.
            <b>Data Science</b> Intership at Technocolabs pvt Ltd (4-months).
            Build 3 ML based Web API's.{" "}
            <a href="https://msbriskpredictor.herokuapp.com/">Freddie Mac Mortgage Loan Risk Prediction </a>,
            <a href="https://stockpriceapi.herokuapp.com/">Intraday Stock Price Prediction</a>,
            <a href="https://appcreditrisk.herokuapp.com/">Credit Risk Loan Approval</a>,
          </span>
        </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast  , i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in Basket Ball games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;