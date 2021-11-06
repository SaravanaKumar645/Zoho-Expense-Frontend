import React, { useState } from "react";
import styles from "./Approvals.module.css";
function Approvals() {
  const [style, setStyle] = useState(true);
  const [style1, setStyle1] = useState(false);
  const [style2, setStyle2] = useState(false);
  const [active, setactive] = useState(true);
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);
  const [display, setDisplay] = useState(false);
  const [tripshead, setTripsHead] = useState("All Trips");
  const [tablemid, setTableMid] = useState("No trips submitted for approval");
  const [reportshead, setReportsHead] = useState("All Reports");
  const [tablemid2, setTableMid2] = useState(
    "No Reports submitted for approval"
  );
  const trips = display ? `${styles["tappa"]}` : null;
  const setclass = style ? `${styles["approval"]}` : null;
  const setclass2 = style1 ? `${styles["trips"]}` : null;
  const setclass3 = style2 ? `${styles["reports"]}` : null;
  const isactive = active ? `${styles["active"]}` : null;
  const isactive1 = active1 ? `${styles["active"]}` : null;
  const isactive2 = active2 ? `${styles["active"]}` : null;

  const changeStyle = () => {
    setStyle(true);
    setStyle1(false);
    setStyle2(false);
    setactive(true);
    setactive1(false);
    setactive2(false);
  };
  const changeStyle1 = () => {
    setStyle1(true);
    setStyle(false);
    setStyle2(false);
    setactive1(true);
    setactive(false);
    setactive2(false);
  };
  const changeStyle2 = () => {
    setStyle2(true);
    setStyle1(false);
    setStyle(false);
    setactive2(true);
    setactive1(false);
    setactive(false);
  };
  const settrips = () => {
    setDisplay(!display);
  };
  const cancel = () => {
    setDisplay(false);
  };
  const li = () => {
    setTripsHead("All Trips");
    setTableMid("No trips submitted for approval");
  };
  const li1 = () => {
    setTripsHead("Pending Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li2 = () => {
    setTripsHead("Approved Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li3 = () => {
    setTripsHead("Rejected Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li4 = () => {
    setTripsHead("Closed Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li5 = () => {
    setTripsHead("Cancelled Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li6 = () => {
    setTripsHead("Archeived Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li7 = () => {
    setTripsHead("Shared Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const li8 = () => {
    setTripsHead("Other Traveler Shared Trips");
    setTableMid(
      "No trips for this filter. Choose another filter or select All to view all trips"
    );
  };
  const rli = () => {
    setReportsHead("All Reports");
    setTableMid2("No Reports submitted for approval");
  };
  const rli1 = () => {
    setReportsHead("Pending Reports");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  const rli2 = () => {
    setReportsHead("Overdue Reports");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  const rli3 = () => {
    setReportsHead("Approved Reports");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  const rli4 = () => {
    setReportsHead("Rejected Reports");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  const rli5 = () => {
    setReportsHead("Reimbursed Reports");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  const rli6 = () => {
    setReportsHead("Archeived Trips");
    setTableMid2(
      "No Reports for this filter. Choose another filter or select All to view all Reports"
    );
  };
  return (
    <div className={styles.approval_body}>
      <a className={isactive} onClick={changeStyle}>
        Pending Approval
      </a>
      &nbsp;
      <a className={isactive1} onClick={changeStyle1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="16px"
          width="16px"
        >
          <path d="M443.7 137.5h-54.3V86.1c0-23.6-19.2-42.7-42.7-42.7H165.1c-23.6 0-42.7 19.2-42.7 42.7v51.4H68.1c-30.2 0-54.7 24.5-54.7 54.7v221.5c0 30.2 24.5 54.7 54.7 54.7h375.6c30.2 0 54.7-24.5 54.7-54.7V192.2c-.1-30.2-24.6-54.7-54.7-54.7zM152.4 86.1c0-7 5.7-12.7 12.7-12.7h181.5c7 0 12.7 5.7 12.7 12.7v51.4H152.4V86.1zm-84.3 81.4h375.5c13.6 0 24.7 11.1 24.7 24.7v30.9l-183.4 45c-16.1 4-33.2 4-49.4.2L43.4 223v-30.8c0-13.6 11.1-24.7 24.7-24.7zm375.6 270.8H68.1c-13.6 0-24.7-11.1-24.7-24.7V253.9l185.3 43.6c10.2 2.4 20.6 3.6 31.1 3.6 10.9 0 21.8-1.3 32.3-3.9L468.3 254v159.7c0 13.6-11 24.6-24.6 24.6z"></path>
        </svg>
        &nbsp;Trips
      </a>
      &nbsp;
      <a className={isactive2} onClick={changeStyle2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="16px"
          width="16px"
        >
          <path d="M439.1 104.5H264.2l-35.1-55.4c-11-17.3-29.7-27.6-50.2-27.6H63.7C36 21.5 13.5 44 13.5 71.7V431c0 32.7 26.6 59.3 59.3 59.3H439c32.7 0 59.3-26.6 59.3-59.3V163.9c.1-32.7-26.5-59.4-59.2-59.4zm29.3 59.4v63H43.6V164c0-16.2 13.2-29.3 29.3-29.3h366.2c16.2-.2 29.3 13 29.3 29.2zM63.7 51.6H179c10.1 0 19.4 5.1 24.8 13.7l24.9 39.3H72.9c-10.7 0-20.7 2.8-29.3 7.8V71.7c0-11.1 9-20.1 20.1-20.1zm375.4 408.8H72.9c-16.2 0-29.3-13.2-29.3-29.3V256.9h424.9v174.2c-.1 16.2-13.2 29.3-29.4 29.3z"></path>
        </svg>
        &nbsp;Reports
      </a>
      &nbsp;
      <div className={styles.line}></div>
      {style ? (
        <div className={setclass}>
          <div className={styles.box_container}>
            <div className={styles.left1_box}>
              <div className={styles.goldbox}>
                <strong>00</strong>
              </div>
              <div className={styles.first_box_content}>
                <a>
                  Pending <br />
                  Trips
                </a>
              </div>
            </div>
            <div className={styles.left2_box}>
              <div>No Trips Pending Approval</div>
            </div>
          </div>
          <div className={styles.box_container}>
            <div className={styles.right1_box}>
              <div className={styles.goldbox}>
                <strong>00</strong>
              </div>
              <div className={styles.first_box_content}>
                <a>
                  Pending <br />
                  Reports
                </a>
              </div>
            </div>
            <div className={styles.right2_box}>
              <div>No Reports Pending Approval</div>
            </div>
          </div>
        </div>
      ) : null}
      {style1 ? (
        <div className={setclass2}>
          {display ? (
            <div className={trips}>
              <span>Default</span>
              <ul>
                <li onClick={li}>All</li>
                <li onClick={li1}>Pending</li>
                <li onClick={li2}>Approved</li>
                <li onClick={li3}>Rejected</li>
                <li onClick={li4}>Closed</li>
                <li onClick={li5}>Cancelled</li>
                <li onClick={li6}>Archeived</li>
                <li onClick={li7}>Shared with me</li>
                <li onClick={li8}>Shared with other traveler </li>
              </ul>
            </div>
          ) : null}
          <div className={styles.headu}>
            <button onClick={settrips} className={styles.btn}>
              <span>{tripshead}&nbsp;</span>
              <span className={styles.arrow}></span>
            </button>
            <button className={styles.dot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="10px"
                height="10px"
              >
                <path d="M8.3 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4c-28.3 0-51.4-23-51.4-51.4zM204.6 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4-51.4-23-51.4-51.4zM400.8 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4-51.4-23-51.4-51.4z"></path>
              </svg>
            </button>
          </div>

          <table onClick={cancel} className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th>
                  <input className={styles.checkbox} type="checkbox" />
                </th>
                <th>
                  <span>Submitter</span>
                </th>
                <th>
                  <span>Trip#</span>
                </th>
                <th>
                  <span>Trip Details</span>
                </th>
                <th>
                  <span>Destination</span>
                </th>
                <th>
                  <span>Status</span>
                </th>
                <th>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="15px"
                      height="15px"
                      fill="#408dfb"
                    >
                      <path d="M491.9 470.7L358 336.8c30.3-35.2 46.8-79.6 46.8-126.6 0-52-20.2-100.9-57-137.6-75.9-75.9-199.3-75.9-275.2 0-75.9 75.9-75.9 199.3 0 275.2 36.8 36.8 85.6 57 137.6 57 46.9 0 91.4-16.5 126.6-46.8l133.9 133.9c2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4c5.9-5.9 5.9-15.4 0-21.2zm-281.7-95.9c-44 0-85.3-17.1-116.4-48.2-64.2-64.2-64.2-168.6 0-232.8 32.1-32.1 74.2-48.1 116.4-48.1s84.3 16 116.4 48.1c31.1 31.1 48.2 72.4 48.2 116.4s-17.1 85.3-48.2 116.4-72.4 48.2-116.4 48.2z"></path>
                    </svg>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.empty}>
                <td colSpan="6">
                  <h4>{tablemid}</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
      {style2 ? (
        <div className={setclass3}>
          {display ? (
            <div className={trips}>
              <span>Default</span>
              <ul>
                <li onClick={rli}>All</li>
                <li onClick={rli1}>Pending</li>
                <li onClick={rli2}>Overdue</li>
                <li onClick={rli4}>Approved</li>
                <li onClick={rli3}>Rejected</li>
                <li onClick={rli4}>Closed</li>
                <li onClick={rli5}>Reimbursed</li>
                <li onClick={rli6}>Archeived</li>
              </ul>
            </div>
          ) : null}
          <div className={styles.headu}>
            <button onClick={settrips} className={styles.btn}>
              <span>{reportshead}&nbsp;</span>
              <span className={styles.arrow}></span>
            </button>
            <button className={styles.dot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="10px"
                height="10px"
              >
                <path d="M8.3 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4c-28.3 0-51.4-23-51.4-51.4zM204.6 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4-51.4-23-51.4-51.4zM400.8 256c0-28.4 23-51.4 51.4-51.4s51.4 23 51.4 51.4-23 51.4-51.4 51.4-51.4-23-51.4-51.4z"></path>
              </svg>
            </button>
          </div>
          <table onClick={cancel} className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th>
                  <input className={styles.checkbox} type="checkbox" />
                </th>
                <th>
                  <span>Submitter</span>
                </th>
                <th>
                  <span>Report#</span>
                </th>
                <th>
                  <span>Report Name</span>
                </th>
                <th>
                  <span>Status</span>
                </th>
                <th>
                  <span>Total</span>
                </th>
                {/* <th><span>To be Reimpursed</span></th> */}
                <th>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="15px"
                      height="15px"
                      fill="#408dfb"
                    >
                      <path d="M491.9 470.7L358 336.8c30.3-35.2 46.8-79.6 46.8-126.6 0-52-20.2-100.9-57-137.6-75.9-75.9-199.3-75.9-275.2 0-75.9 75.9-75.9 199.3 0 275.2 36.8 36.8 85.6 57 137.6 57 46.9 0 91.4-16.5 126.6-46.8l133.9 133.9c2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4c5.9-5.9 5.9-15.4 0-21.2zm-281.7-95.9c-44 0-85.3-17.1-116.4-48.2-64.2-64.2-64.2-168.6 0-232.8 32.1-32.1 74.2-48.1 116.4-48.1s84.3 16 116.4 48.1c31.1 31.1 48.2 72.4 48.2 116.4s-17.1 85.3-48.2 116.4-72.4 48.2-116.4 48.2z"></path>
                    </svg>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.empty}>
                <td colSpan="6">
                  <h4>{tablemid2}</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default Approvals;
