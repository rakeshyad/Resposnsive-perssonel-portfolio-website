import React ,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css";


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const SCREEN_CONSTSANTS = {
        description:
          "Visionary individual with more than 3 years of working Experience as Financial Analyst for reputed Companies like EXL, and ID medical.Highly communicative and experienced in analyzing raw data and inferential statistics with enhanced knowledge about Machine Learning and Deep learning algorithms looking for transition to the Data Scientist Role by acquiring other technical skills like various coding languages Python,SQL,Advance MS excel and visualization tools like Tableau & PowerBI etc",
        highlights: {
          bullets: [
            "PGD in data Science - Deep Learning",
            "Profiecient in Model Building &  Deployment",
            "3+ years MNC expirence In Finace & Accounts",
            "Graduated from Bangalore University in Bachelor Of Buisness Administration",
            "Tech-Skills:   DL | ML| Python | SQL | R | Tableau | Adv- Excel | Web Devlopement",
            "Strong Communication Skills",
            
          ],
          heading: "Here are a Few Highlights:",
        },
      };
      const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    
      return (
        <div
          className="about-me-container screen-container fade-in"
          id={props.id || ""}
        >
          <div className="about-me-parent">
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
            <div className="about-me-card">
              <div className="about-me-profile"></div>
              <div className="about-me-details">
                <span className="about-me-description">
                  {SCREEN_CONSTSANTS.description}
                </span>
                <div className="about-me-highlights">
                  <div className="highlight-heading">
                    <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
                <div className="about-me-options">
                  <button
                    className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                  >
                    {" "}
                    Hire Me{" "}
                  </button>
                  <a href="Rakesh_Yadav_Blank_Template___Resume.pdf" download="Rakesh_Yadav_resume.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
