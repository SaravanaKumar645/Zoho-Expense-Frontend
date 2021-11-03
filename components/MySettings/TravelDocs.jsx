import React from "react";
import styles from "./TravelDocs.module.css";
const TravelDocs = () => {
  return (
    <div className={styles.travelDocs}>
      {/* <script
        src="https://kit.fontawesome.com/1794b9b2a9.js"
        crossOrigin="anonymous"
      ></script> */}
      <div className={styles.title}>
        <p>
          <i className="far fa-file-alt"></i> &nbsp;&nbsp;TRAVEL DOCUMENTS
        </p>
      </div>
      <div className={styles.content}>
        <p>
          Travel documents added here can be accessed by the travel team to
          facilitate travel booking
        </p>
        <button type="button">
          <i className="fas fa-plus"></i>
          &nbsp;&nbsp;Add Travel Document
        </button>
      </div>
    </div>
  );
};

export default TravelDocs;
