import React, { useEffect, useState } from "react";
import styles from "./BasicInfo.module.css";
import Link from "next/link";
import { personalDetails1, personalDetails2 } from "./BasicInfoDetails";
import { isAutheticated } from "../../auth/Auth";
const BasicInfo = () => {
  var personalInfo1 = personalDetails1;
  var personalInfo2 = personalDetails2;
  const [user, setUser] = useState({ org_name: "" });

  useEffect(() => {
    const { user } = isAutheticated();
    console.log(user);
    personalInfo1[1].value = user.email;
    personalInfo1[0].value = user.name;
    user.role === 1
      ? (personalInfo2[0].value = "Admin")
      : (personalInfo2[0].value = "Employee");
    setUser(user);
  }, []);

  return (
    <div className={styles.basicInfo}>
      <script
        src="https://kit.fontawesome.com/1794b9b2a9.js"
        crossOrigin="anonymous"
      ></script>
      <div className={styles.personalDetails}>
        <div className={styles.title}>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="icon align-text-bottom"
            >
              <path d="M476 65H36C16.7 65 1 80.7 1 100v312c0 19.3 15.7 35 35 35h440c19.3 0 35-15.7 35-35V100c0-19.3-15.7-35-35-35zm5 347c0 2.8-2.2 5-5 5H36c-2.8 0-5-2.2-5-5V100c0-2.8 2.2-5 5-5h440c2.8 0 5 2.2 5 5v312z"></path>
              <path d="M135 161c-30.3 0-55 24.7-55 55s24.7 55 55 55 55-24.7 55-55-24.6-55-55-55zm0 80c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm289-80H248c-8.3 0-15 6.7-15 15s6.7 15 15 15h176c8.3 0 15-6.7 15-15s-6.7-15-15-15zm0 80H248c-8.3 0-15 6.7-15 15s6.7 15 15 15h176c8.3 0 15-6.7 15-15s-6.7-15-15-15zm-103.8 80H248c-8.3 0-15 6.7-15 15s6.7 15 15 15h72.2c8.3 0 15-6.7 15-15s-6.7-15-15-15z"></path>
            </svg>{" "}
            PERSONAL DETAILS
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.personalDetails1}>
            {personalInfo1.map((item, index) => {
              return (
                <div style={{ display: "flex" }} key={index}>
                  <p style={{ maxWidth: "130px", width: "100%" }}>
                    {item.field}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      maxWidth: "280px",
                      opacity: "0.8",
                      display: "flex",
                      flexWrap: "wrap",
                      paddingRight: "15px",
                      fontSize: "11pt",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.personalDetails2}>
            {personalInfo2.map((item, index) => {
              return (
                <div style={{ display: "flex" }} key={index}>
                  <p style={{ maxWidth: "130px", width: "100%" }}>
                    {item.field}
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      maxWidth: "280px",
                      opacity: "0.8",
                      display: "flex",
                      flexWrap: "wrap",
                      fontSize: "11pt",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
            <div className={styles.personalDetails2_1}>
              <p style={{ fontWeight: "600", maxWidth: "390px" }}>
                ASSOCIATED POLICIES
              </p>
              <div className={styles.border}></div>
              <p>
                {user.org_name}&ensp;
                <span
                  style={{
                    backgroundColor: "dodgerblue",
                    color: "white",
                    fontSize: "8pt",
                    borderRadius: "3px",
                    padding: "1px 9px 1px 9px",
                  }}
                >
                  DEFAULT
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.travelDetails}>
        <div className={styles.title}>
          <p>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 316.99 462.65"
              className="icon align-text-bottom"
            >
              <title>travel_details</title>
              <path
                d="M359.49,95.91h-31.8V79.67a55.06,55.06,0,0,0-55-55H239.31a55.06,55.06,0,0,0-55,55V95.91h-31.8a55.06,55.06,0,0,0-55,55V387.34a55.06,55.06,0,0,0,55,55h20.94v30a15,15,0,0,0,30,0v-30h105.1v30a15,15,0,0,0,30,0v-30h20.94a55.06,55.06,0,0,0,55-55V150.91A55.06,55.06,0,0,0,359.49,95.91ZM214.31,79.67a25,25,0,0,1,25-25h33.38a25,25,0,0,1,25,25V95.91H214.31ZM384.49,387.34a25,25,0,0,1-25,25H324.84c-.42,0-.85-.07-1.29-.07s-.87,0-1.3.07H189.75c-.43,0-.86-.07-1.3-.07s-.87,0-1.29.07H152.51a25,25,0,0,1-25-25V150.91a25,25,0,0,1,25-25h207a25,25,0,0,1,25,25Zm-56.8-196.61a15,15,0,0,1-15,15H199.31a15,15,0,0,1,0-30H312.69A15,15,0,0,1,327.69,190.73Z"
                transform="translate(-97.51 -24.67)"
              ></path>
            </svg>
            TRAVEL DETAILS
          </p>
          <svg
            id={styles.editIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 309"
            className="icon-hover align-middle edit-icon"
          >
            <path d="M16.6 308c-4 0-7.8-1.6-10.6-4.4-3.3-3.3-4.9-8-4.3-12.6l12.8-96.5c1-7.9 4.7-15.3 10.3-20.9L186.7 11.7c14.2-14.2 37.2-14.2 51.3 0l59.8 59.8c6.9 6.9 10.6 16 10.6 25.7s-3.8 18.8-10.6 25.7L136 284.7c-5.6 5.6-13 9.3-20.9 10.3l-96.5 12.8c-.7.1-1.3.2-2 .2zM212.5 31.1c-1.6 0-3.2.6-4.5 1.8L46.1 194.8c-1 1-1.6 2.3-1.8 3.6l-10.1 75.8c-.1.7.5 1.2 1.1 1.1l75.8-10.1c1.4-.2 2.7-.8 3.6-1.8l161.9-161.9c1.6-1.6 1.8-3.5 1.8-4.5s-.2-2.8-1.8-4.5l-59.8-59.8c-1.1-1-2.7-1.6-4.3-1.6z"></path>
          </svg>
        </div>
        <div className={styles.content}>
          <p>
            Travel documents added here can be accessed by the travel team to
            facilitate travel booking
          </p>
        </div>
      </div>
      <div className={styles.lastTwoBoxes}>
        <div className={styles.myDelegate}>
          <div className={styles.title}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="icon align-text-bottom"
              >
                <path d="M365.6 330c-14.2-9.9-30.9-15.9-49.6-17.9-6.5-2.1-12.4-4.4-17.5-6.7a90.3 90.3 0 0 1-7-3.5c1.6-4.7 4.4-11.3 8.3-18.3 3.9-4.3 9.1-10.6 13.9-18.5 8.9-14.6 12.9-28.9 11.9-42.6-.5-7-2.4-14-5.5-20.4 1.7-19.5.4-51.5-19.8-77.5-18.8-24.2-47.7-36.5-85.6-36.5-38.1 0-67 12.3-85.9 36.7-20.1 25.9-21.4 57.8-19.7 77.2-3.2 6.4-5.1 13.3-5.6 20.5-1 13.7 3 28 12 42.6 4.7 7.7 10 14.1 14 18.4 3.8 6.5 6.6 13.1 8.3 18-1.9 1.1-4.3 2.3-7.3 3.7-6.9 3.3-13.9 5.7-17.6 7-28.6 3.1-51.8 15.1-69 35.8-14.5 17.5-23.5 40.2-26.7 67.3-2 17.5-1 32.5-.3 37l.5 3.9c1.9 16.4 15.9 28.9 32.4 28.9h329.4c17.3 0 31.7-13.5 32.6-30.7v-1.2c0-9-.4-55.2-11.5-80-7.8-18.1-19.5-32.6-34.7-43.2zm13.8 125.1H50c-1.4 0-2.5-1-2.7-2.4l-.5-4v-.3c0-.1-1.6-12.7.4-29.6 2.5-21.3 9.2-38.6 19.9-51.6 12.4-15 28.9-23.2 50.5-25.2 1.1-.1 2.3-.3 3.3-.7 3.1-1 12.7-4.2 22.4-8.8 10.3-4.8 18-9.7 22.2-14.1 2.6-2.7 4.1-6.4 4.1-10.1.1-10.2-7.5-28.4-15.1-41.2-.6-.9-1.2-1.8-2-2.6-3.1-3.3-7.6-8.6-11.5-14.9-5.6-9.1-8.2-17.4-7.6-24.7v-.2c.3-4 1.5-7.8 3.7-11.2 1.9-2.9 2.7-6.4 2.3-9.9-1.7-14-2.2-40.5 13.1-60.3 12.9-16.6 33.8-25.1 62.2-25.1 28.2 0 49.1 8.4 61.9 24.9 15.4 19.9 14.9 46.4 13.2 60.5-.4 3.4.4 6.9 2.2 9.8 2.2 3.5 3.4 7.3 3.7 11.2v.1c.5 7.3-2 15.6-7.6 24.7-4.2 6.9-9 12.3-11.4 14.9-.7.8-1.4 1.7-2 2.6-10 17-15.2 33.8-15.1 41.6.1 3.8 1.5 7.4 4.1 10.1 4.2 4.4 11.9 9.2 22.3 13.9 6.5 3 14 5.8 22.2 8.4 1 .3 2.1.5 3.2.6 14.2 1.3 26.7 5.7 37 12.8 10.6 7.4 18.9 17.7 24.7 30.7 7.1 15.9 8.9 49.8 8.9 67.5-.1 1.6-1.2 2.6-2.6 2.6zm5.9-351.4l41.8-40.3c.4-.4 1-.4 1.4 0l41.8 40.3c2.9 2.8 6.7 4.2 10.4 4.2 4.2 0 8.4-1.8 11.4-5.3 5.2-6.1 4.5-15.3-1.3-20.8l-52.6-50.7c-5.8-5.6-15-5.6-20.8 0l-52.9 51c-6 5.7-6.1 15.2-.4 21.2 5.8 6 15.3 6.2 21.2.4zm53 12.5c-5.8-5.6-15-5.6-20.8 0l-52.9 51c-6 5.7-6.1 15.2-.4 21.2 5.7 6 15.2 6.1 21.2.4l41.8-40.3c.4-.4 1-.4 1.4 0l41.8 40.3c2.9 2.8 6.7 4.2 10.4 4.2 4.2 0 8.4-1.8 11.4-5.3 5.2-6.1 4.5-15.3-1.3-20.8l-52.6-50.7z"></path>
              </svg>
              MY DELEGATE
            </p>
          </div>
          <div className={styles.content}>
            <p>
              Authorize another user to create, submit and approve expense
              reports on your behalf.
              <Link href="https://www.zoho.com/in/expense/help/delegation/overview/">
                <span>
                  Learn more&ensp;
                  <i
                    className="fas fa-caret-right"
                    style={{ transform: "translateY(1.5px)" }}
                  ></i>
                </span>
              </Link>
            </p>
            <button type="button">
              <i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Delegate
            </button>
          </div>
        </div>
        <div className={styles.outOfOffice}>
          <div className={styles.title}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="icon align-text-bottom"
              >
                <path d="M457.7 68.8c-1.8-3.7-5.1-6.4-8.9-7.6L362.5 3.5c-6.9-4.6-16.2-2.7-20.8 4.2s-2.7 16.2 4.2 20.8l58.8 39.2c-58.8 13.5-115.5 37.4-165.8 70.2-44.4 28.9-83.5 64.1-116.8 104.9V108.9c12.6-3.6 23.5-11.4 30.8-22.5 16.8-25.3 9.9-59.5-15.3-76.3C125.4 2 110.7-.9 96.3 2c-14.5 3-26.9 11.3-35 23.6-16.8 25.2-9.9 59.4 15.3 76.2 4.8 3.2 10 5.6 15.5 7.1v294.2c-23.1 6.5-40 27.8-40 52.9 0 30.3 24.7 55 55 55s55-24.7 55-55c0-25.1-16.9-46.4-40-52.9V292.7c35.8-51.7 80.6-95.3 133.2-129.6 48-31.3 102.2-54 158.4-66.6l-41.8 62.6c-4.6 6.9-2.7 16.2 4.2 20.8 2.6 1.7 5.5 2.5 8.3 2.5 4.8 0 9.6-2.3 12.5-6.7l60.6-90.8c3.3-5 3.2-11.3.2-16.1zM86.2 42.2c3.7-5.6 9.3-9.3 15.9-10.7 1.7-.3 3.3-.5 5-.5 4.9 0 9.6 1.4 13.8 4.2 11.5 7.6 14.6 23.2 7 34.7-3.7 5.6-9.3 9.3-15.9 10.7-6.5 1.3-13.2 0-18.8-3.7-11.5-7.7-14.6-23.3-7-34.7zM132.1 456c0 13.8-11.2 25-25 25s-25-11.2-25-25 11.2-25 25-25 25 11.2 25 25z"></path>
              </svg>
              OUT OF OFFICE APPROVER
            </p>
          </div>
          <div className={styles.content}>
            <p>
              Assign another user to automatically receive reports submitted to
              you and approve them in your absence.
              <Link href="https://www.zoho.com/in/expense/help/my-settings/out-of-office-approver/">
                <span>
                  Learn more&ensp;
                  <i
                    className="fas fa-caret-right"
                    style={{ transform: "translateY(1.5px)" }}
                  ></i>
                </span>
              </Link>
            </p>
            <button type="button">
              <i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Out of Office Approver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
