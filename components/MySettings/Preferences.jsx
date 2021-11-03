import { style } from "@mui/system";
import React, { useState } from "react";
import styles from "./Preferences.module.css";
const Preferences = () => {
  const [zohoExpenseEmail, setZohoExpenseEmail] = useState(
    "userEmail@inbox.zohoexpense.in"
  );

  return (
    <div className={styles.preferencesDiv}>
      <div className={styles.emailReceipt}>
        <h3>Email receipt Forwarding</h3>
        <div className={styles.emailCards}>
          <p className={styles.firstPara}>
            Forward emails with receipts to <span>{zohoExpenseEmail}</span> .
            Zoho Expense automatically scans and converts receipts into expenses
            .<br />
            <button> Update</button>
          </p>
          <div className={styles.emailAutoForward}>
            <p>How do I auto-forward receipts ?</p>
            <ol>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  class="icon align-middle"
                >
                  <path
                    d="M811 690c-16 0-30-13-30-30V498c0-17-13-31-30-31H273c-16 0-30 14-30 31v34a30 30 0 01-60 0v-34c0-50 41-91 90-91h478c50 0 90 41 90 91v162c0 17-13 30-30 30z"
                    fill="#faba34"
                  ></path>
                  <path
                    d="M932 1022H92c-50 0-91-40-91-90V693a30 30 0 0160 0v239c0 17 14 30 31 30h840c17 0 31-13 31-30V425c0-9-5-18-12-24L531 69c-11-9-27-9-38 0L73 401c-7 6-12 15-12 24v103c0 11 6 21 16 27l421 223c9 5 19 5 28 0l271-144a30 30 0 0128 53L555 831a90 90 0 01-85 0L50 608a90 90 0 01-48-80V425c0-27 12-53 34-70L456 21a91 91 0 01112 0l420 334c22 17 35 43 35 70v507c-1 50-41 90-91 90z"
                    fill="#397cbc"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="52 41.984 88 66.016"
                  class="icon-md align-middle"
                >
                  <path
                    fill="#4285f4"
                    d="M58 108h14V74L52 59v43c0 3.315 2.685 6 6 6z"
                  ></path>
                  <path
                    fill="#34a853"
                    d="M120 108h14c3.315 0 6-2.685 6-6V59l-20 15z"
                  ></path>
                  <path
                    fill="#fbbc04"
                    d="M120 48v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="M72 74V48l24 18 24-18v26L96 92z"
                  ></path>
                  <path
                    fill="#c5221f"
                    d="M52 51v8l20 15V48l-5.6-4.2C60.465 39.35 52 43.585 52 51z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="17 34 127 113"
                  class="icon align-middle"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="28.3"
                      y1="53.8"
                      x2="70.7"
                      y2="127.2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#1784d9"></stop>
                      <stop offset=".5" stopColor="#107ad5"></stop>
                      <stop offset="1" stopColor="#0a63c9"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M144 93a2 2 0 010 1 3 3 0 01-1 1l-5 3-5 3-2 1-21 12-9 5h-1l-1 1h-1a5 5 0 01-1 1 6 6 0 01-1 0 6 6 0 01-3-1h-1l-6-4h-2v-1h-1l-1-1-19-10-3-2-2-1-4-3h-1l-5-3a3 3 0 01-1-1v-1a3 3 0 011-2l5-3h1l21-12 1-1 6-3 1-1h1v-1h2l6-4h1a6 6 0 015 0h1l11 6 6 4 22 12 5 3a3 3 0 011 2z"
                    fill="#123b6d"
                  ></path>
                  <path
                    fill="#28a8ea"
                    d="M110 49H82v26l28 26h28V75l-28-26z"
                  ></path>
                  <path
                    d="M110 101v26H81v-1h-1v-1h-1v-1h-1l-24-20-1-1V75h29l1 1 1 1 1 1z"
                    fill="#0364b8"
                  ></path>
                  <path fill="#14447d" d="M54 101h28v26H54z"></path>
                  <path fill="#0078d4" d="M110 101h28v26h-28z"></path>
                  <path fill="#50d9ff" d="M110 49h28v26h-28z"></path>
                  <path
                    fill="#0078d4"
                    d="M53 49h29v26H53zM82 75h28v26H82z"
                  ></path>
                  <path
                    d="M58 34h75a5 5 0 015 5v10H53V39a5 5 0 015-5z"
                    fill="#0358a7"
                  ></path>
                  <path
                    d="M138 94l-41 22h-2v-1h-1l-8-4v-1h-2L53 92v33h85z"
                    fill="#0a2767"
                    opacity=".1"
                  ></path>
                  <path
                    d="M138 95l-41 22h-2v-1h-1l-8-4v-1h-2L53 93v33h85z"
                    fill="#0a2767"
                    opacity=".1"
                  ></path>
                  <path
                    d="M138 96l-41 22h-2v-1h-1l-8-4v-1h-2L53 94v33h85z"
                    fill="#0a2767"
                    opacity=".1"
                  ></path>
                  <path
                    d="M138 97l-41 22h-2v-1h-1l-8-4v-1h-2L53 95v33h85z"
                    fill="#0a2767"
                    opacity=".1"
                  ></path>
                  <path
                    d="M143 95l-44 24a6 6 0 01-1 0 6 6 0 01-5 0 6 6 0 01-1 0l2 15 44 13a6 6 0 003-1 6 6 0 003-5V93a3 3 0 01-1 2z"
                    fill="#1490df"
                  ></path>
                  <path
                    d="M100 118l-1 1a6 6 0 01-1 0 6 6 0 01-5 0 6 6 0 01-1 0l2 15 44 13a6 6 0 004-1 6 6 0 002-4z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M144 143l-45-24a6 6 0 01-1 0 6 6 0 01-5 0 6 6 0 01-1 0l2 15 44 13a6 6 0 004-1 6 6 0 002-3z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M143 144l-45-25a6 6 0 01-5 0 6 6 0 01-1 0l2 15 44 13a6 6 0 004-1 6 6 0 001-2z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M142 145l-44-25h-1a6 6 0 01-4-1 6 6 0 01-1 0l2 15 44 13a6 6 0 004-1 6 6 0 000-1z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M142 146h-1-1v1a3 3 0 01-1 0 5 5 0 01-1 0H53a6 6 0 01-6-6V93l1 1 5 2 8 5 21 11 1 1h1v1h1l7 4 1 1 3 1 1 1 7 4 2 1 1 1h1l1 1z"
                    fill="#28a8ea"
                  ></path>
                  <path
                    d="M85 63v60a5 5 0 010 2 5 5 0 01-1 1 5 5 0 01-1 1 5 5 0 01-1 1 5 5 0 01-2 0H47V93a3 3 0 011-2l5-3V57h27a5 5 0 012 1 6 6 0 013 5z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M84 63v59a5 5 0 01-1 3 5 5 0 010 1 3 3 0 01-1 0 4 4 0 01-1 0v1a5 5 0 01-2 0H47V93a3 3 0 011-2l5-3V57h26a5 5 0 013 1 6 6 0 012 5z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M84 63v58a5 5 0 01-2 3 2 2 0 010 1 5 5 0 01-2 1 5 5 0 01-2 0H47V93a3 3 0 011-2l5-3V58h25a5 5 0 014 1 6 6 0 012 4z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M83 63v57a6 6 0 01-1 2 5 5 0 01-2 3h-1a5 5 0 01-1 0H47V93a3 3 0 011-2l5-3V58h24a5 5 0 015 3 6 6 0 011 2z"
                    opacity=".1"
                  ></path>
                  <path
                    d="M82 63v56a5 5 0 01-4 5 5 5 0 01-1 0H47V93a3 3 0 011-2l5-3V58h24a5 5 0 015 5z"
                    opacity=".2"
                  ></path>
                  <rect
                    x="17"
                    y="58"
                    width="65"
                    height="65"
                    rx="5.4"
                    fill="#1480d7"
                  ></rect>
                  <path
                    d="M35 82a15 15 0 016-7 17 17 0 019-2 16 16 0 018 2 14 14 0 016 6 20 20 0 012 9 21 21 0 01-2 9 15 15 0 01-6 7 17 17 0 01-9 2 17 17 0 01-8-2 15 15 0 01-6-6 19 19 0 01-2-9 21 21 0 012-9zm6 15a10 10 0 003 4 8 8 0 005 1 9 9 0 006-1 9 9 0 003-5 16 16 0 001-5 18 18 0 00-1-6 9 9 0 00-3-5 8 8 0 00-5-1 9 9 0 00-6 1 10 10 0 00-3 5 17 17 0 000 12z"
                    fill="#fff"
                  ></path>
                  <path fill="none" d="M0 0h180v180H0z"></path>
                </svg>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.defaultValues}>
        <h3>Default Values</h3>
        <p className={styles.firstPara}>
          Assign default values to fields and create trips and expenses faster.
        </p>
        <div className={styles.emailCards}>
          <p className={styles.secondPara}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="icon align-text-bottom"
              >
                <path d="M443.7 137.5h-54.3V86.1c0-23.6-19.2-42.7-42.7-42.7H165.1c-23.6 0-42.7 19.2-42.7 42.7v51.4H68.1c-30.2 0-54.7 24.5-54.7 54.7v221.5c0 30.2 24.5 54.7 54.7 54.7h375.6c30.2 0 54.7-24.5 54.7-54.7V192.2c-.1-30.2-24.6-54.7-54.7-54.7zM152.4 86.1c0-7 5.7-12.7 12.7-12.7h181.5c7 0 12.7 5.7 12.7 12.7v51.4H152.4V86.1zm-84.3 81.4h375.5c13.6 0 24.7 11.1 24.7 24.7v30.9l-183.4 45c-16.1 4-33.2 4-49.4.2L43.4 223v-30.8c0-13.6 11.1-24.7 24.7-24.7zm375.6 270.8H68.1c-13.6 0-24.7-11.1-24.7-24.7V253.9l185.3 43.6c10.2 2.4 20.6 3.6 31.1 3.6 10.9 0 21.8-1.3 32.3-3.9L468.3 254v159.7c0 13.6-11 24.6-24.6 24.6z"></path>
              </svg>
              TRIPS
            </span>
            <br />
            <br /> Set default values for fields in trips creation page.
            <br />
            <button> Configure</button>
          </p>
          <p className={styles.thirdPara}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="icon align-text-bottom"
              >
                <path d="M380.8 16.2H131.2c-41 0-74.3 33.3-74.3 74.3v384.7c0 7.8 4.3 14.8 11.3 18.3 7.1 3.6 15.5 2.9 21.9-1.7l54.1-39.4c11.8-8.6 27.6-8.6 39.4 0l46.9 34.2c15.2 11.1 35.6 11.1 50.9 0l46.9-34.2c11.8-8.6 27.6-8.6 39.4 0l54.1 39.4c3.7 2.7 8 4 12.4 4 3.3 0 6.5-.8 9.6-2.3 7-3.5 11.3-10.6 11.3-18.3V90.5c0-41-33.4-74.3-74.3-74.3zm44.3 436.9c0 1.6-1.9 2.6-3.2 1.6l-36.5-26.6a63.169 63.169 0 0 0-74.7 0l-46.9 34.2c-4.6 3.4-10.9 3.4-15.5 0l-46.9-34.2c-11.2-8.1-24.3-12.2-37.4-12.2-13.1 0-26.2 4.1-37.4 12.2l-36.5 26.6c-1.3 1-3.2 0-3.2-1.6V90.5c0-24.4 19.8-44.3 44.3-44.3h249.6c24.4 0 44.3 19.8 44.3 44.3v362.6z"></path>
                <path d="M332.7 167.9H188c-8.3 0-15 6.7-15 15s6.7 15 15 15h144.7c8.3 0 15-6.7 15-15s-6.7-15-15-15zM307.2 258.4H204.8c-8.3 0-15 6.7-15 15s6.7 15 15 15h102.3c8.3 0 15-6.7 15-15s-6.7-15-14.9-15z"></path>
              </svg>
              EXPENSES
            </span>
            <br />
            <br />
            Set default values for fields in expense creation page..
            <br />
            <button> Configure</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
