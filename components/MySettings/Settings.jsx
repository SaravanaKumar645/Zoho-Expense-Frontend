import React, { useState, useRef } from "react";
import styles from "./Settings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import HelpIcon from "@mui/icons-material/HelpOutlineRounded";
import Help from "@mui/icons-material/Help";
import TravelDocs from "./TravelDocs";
import Preferences from "./Preferences";
import BasicInfo from "./BasicInfo";
import IconButton from "@mui/material/IconButton";
import BsQuestionLg from "react-icons/bs";
const Settings = () => {
  const tab = useRef();
  const [component, setComponent] = useState(<BasicInfo />);
  const [buttonId, setButtonId] = useState("BI");
  const handleChangeTabs = (event) => {
    switch (event.target.name) {
      case "preferences":
        setComponent(<Preferences />);
        setButtonId("PS");
        break;
      case "traveldocs":
        setComponent(<TravelDocs />);
        setButtonId("TD");
        break;
      default:
        setComponent(<BasicInfo />);
        setButtonId("BI");
        break;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>My Settings</h3>
          <button
            className={styles.helpButton}
            style={{ padding: "10px 10px" }}
          >
            <FontAwesomeIcon icon={faQuestion} />
          </button>
          {/* <IconButton className={styles.helpButton} size="small">
            <HelpIcon />
          </IconButton> */}
        </div>

        <section className={styles.tabSection}>
          <button
            name="basicinfo"
            ref={tab}
            type="button"
            className={
              buttonId === "BI" ? styles["tabFocused"] : styles["tabButton"]
            }
            onClick={handleChangeTabs}
          >
            Basic Information
          </button>
          <button
            name="preferences"
            type="button"
            onClick={handleChangeTabs}
            className={
              buttonId === "PS" ? styles["tabFocused"] : styles["tabButton"]
            }
          >
            Preferences
          </button>
          <button
            name="traveldocs"
            type="button"
            onClick={handleChangeTabs}
            className={
              buttonId === "TD" ? styles["tabFocused"] : styles["tabButton"]
            }
          >
            Travel Documnets
          </button>
        </section>
      </div>
      <div className={styles.contentPage}>{component}</div>
    </div>
  );
};

export default Settings;
