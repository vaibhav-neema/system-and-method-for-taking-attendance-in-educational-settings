import React, { useEffect } from "react";
import cx from "classnames";

import InfoCard from "../InfoCard";
import antriksh from "../../assets/images/Team/AntrikshTyagi.jpg";
import divyanshu from "../../assets/images/Team/DivyanshuParwal.jpg";
import shubh from "../../assets/images/Team/ShubhLaad.jpg";
import sumiran from "../../assets/images/Team/SumiranJaiswal.jpeg";

import "./index.scss";

const TeamInfo = ({ isOpen, onClose, isWeb }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (isOpen) {
        document.body.style.overflow = "initial";
      }
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleBackDropClick = () => {
    onClose();
  };

  return (
    <div className={"team-info"} onClick={handleBackDropClick}>
      <div
        className={cx("info-sheet", {
          "info-sheet-web": isWeb,
        })}
      >
        <div className="developers">
          <div className="heading">Developers</div>
          <div className="main-content">
            <InfoCard
              name="Shubh Laad"
              imageSrc={shubh}
              experience={"Paytm"}
              linkedIn={"https://www.linkedin.com/in/shubh-laad-890a171aa/"}
              github={"https://github.com/shubh-laad"}
              instagram={"https://www.instagram.com/shubh_laad/"}
              isWeb={isWeb}
            />

            <div className="separator"></div>

            <InfoCard
              name="Antriksh Tyagi"
              imageSrc={antriksh}
              experience={"IIT-Indore"}
              linkedIn={"https://www.linkedin.com/in/antrikshtyagi/"}
              github={"https://github.com/AntrikshTyagi"}
              instagram={"https://www.instagram.com/antrikshptyagi/"}
              isWeb={isWeb}
            />

            <div className="separator"></div>

            <InfoCard
              name="Divyanshu Parwal"
              imageSrc={divyanshu}
              experience={"Capillary "}
              linkedIn={"https://www.linkedin.com/in/divyanshu-parwal/"}
              github={"https://github.com/DivyanshuParwal"}
              instagram={"https://www.instagram.com/divyanshu_parwal/"}
              isWeb={isWeb}
            />

            <div className="separator"></div>

            <InfoCard
              name="Sumiran Jaiswal"
              imageSrc={sumiran}
              experience={"IIT-Indore"}
              linkedIn={"https://www.linkedin.com/in/sumiran-jaiswal-b8199a21b/"}
              github={"https://github.com/sumi0309"}
              instagram={"https://www.instagram.com/_sumi0309/"}
              isWeb={isWeb}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
