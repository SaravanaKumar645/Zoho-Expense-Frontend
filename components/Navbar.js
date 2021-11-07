import classes from "./Navbar.module.css";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { signout } from "../auth/Auth";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { isAutheticated } from "../auth/Auth";

export default function Navbar({ tabPath }) {
  console.log("Inside Navbar component :: " + tabPath);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchIconFocused, setSearchIconFocused] = useState(false);
  const open = Boolean(anchorEl);
  const { user } = isAutheticated();
  const router = useRouter();
  var searchIconStyle = {
    height: "35px",
    width: "44px",
    fill: "#878ba2",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "4px 0 0 4px",
    borderRight: "1px solid rgba(255, 255, 255, 0.09)",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    justifyContent: "center",
  };
  var searchIconStyleFocused = {
    height: "35px",
    width: "44px",
    fill: "black",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "4px 0 0 4px",
    borderRight: "1px solid rgba(255, 255, 255, 0.09)",
    backgroundColor: "white",
    justifyContent: "center",
  };
  const onSearchInputFocus = (event) => {
    setSearchIconFocused((value) => !value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signout(() => {
      router.push("/");
    });
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  //*------------Admin view Render component-----------
  const admins = () => {
    return (
      <div>
        <h4>
          Admin View <i className="fas fa-angle-down"></i>
        </h4>
        <ul className={classes.ul}>
          <Link href="/admintrip">
            <li
              className={
                tabPath === "/admintrip"
                  ? classes["navTabLiFocused"]
                  : classes["navTabLi"]
              }
            >
              <i className="fas fa-suitcase-rolling"></i>
              <a className={classes.a}>Trips</a>
            </li>
          </Link>
          <Link
            href="/adminReport"
            className={
              tabPath === "/adminReport"
                ? classes["navTabLiFocused"]
                : classes["navTabLi"]
            }
          >
            <li
              className={
                tabPath === "/adminReport"
                  ? classes["navTabLiFocused"]
                  : classes["navTabLi"]
              }
            >
              <i className="fas fa-wallet"></i>{" "}
              <a className={classes.a}>Reports</a>
            </li>
          </Link>
          <br />
          <br />
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <nav
        className={classes.nav}
        style={{ position: "fixed", top: "0", left: "0", right: "0" }}
      >
        <div className={classes.icon}>
          <img src="/zoho-expense1.png" className={classes.logo}></img>
          <p className={classes.logoText}>Expense</p>
        </div>
        <div className={classes.search_box}>
          {/* <img src="/search-icon.png" className={classes.searchIcon}></img> */}
          <svg
            style={
              isSearchIconFocused ? searchIconStyleFocused : searchIconStyle
            }
            // id={classes.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="icon-sm mx-1"
          >
            <path d="M491.9 470.7L358 336.8c30.3-35.2 46.8-79.6 46.8-126.6 0-52-20.2-100.9-57-137.6-75.9-75.9-199.3-75.9-275.2 0-75.9 75.9-75.9 199.3 0 275.2 36.8 36.8 85.6 57 137.6 57 46.9 0 91.4-16.5 126.6-46.8l133.9 133.9c2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4c5.9-5.9 5.9-15.4 0-21.2zm-281.7-95.9c-44 0-85.3-17.1-116.4-48.2-64.2-64.2-64.2-168.6 0-232.8 32.1-32.1 74.2-48.1 116.4-48.1s84.3 16 116.4 48.1c31.1 31.1 48.2 72.4 48.2 116.4s-17.1 85.3-48.2 116.4-72.4 48.2-116.4 48.2z"></path>
          </svg>
          <input
            onFocus={onSearchInputFocus}
            onBlur={onSearchInputFocus}
            className={classes.search_input}
            type="search"
            placeholder="Search Expenses"
          ></input>
        </div>
        <ol className={classes.ol} id={classes.olid}>
          <li style={{ paddingRight: "20px" }}>
            <a href="#">
              <p
                style={{
                  fontSize: "10pt",
                  display: "flex",
                  color: "#878ba2",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                <span>
                  <i
                    className="fas fa-rocket"
                    style={{ color: "#de903e", marginRight: "5px" }}
                  ></i>
                </span>
                Trial Expires in 11 day.
                <span
                  style={{
                    color: "#e89d4e",
                    fontSize: "9pt",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  &nbsp;UPGRADE NOW
                </span>
              </p>
            </a>
          </li>
          <li className={classes.navIconList}>
            <a href="#">
              <i id={classes.plusIcon} className="fas fa-plus"></i>
            </a>
            <a href="#">
              <i id={classes.iTag} className="fas fa-cog"></i>
            </a>
            <a href="#">
              <i className="far fa-bell" id={classes.iTag}></i>
            </a>
            <a href="#">
              <i className="fas fa-user-friends" id={classes.iTag}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <p style={{ fontSize: "10pt", fontWeight: "400" }}>
                <span
                  style={{
                    color: "#878ba2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2ch",
                  }}
                >
                  {user.org_name}
                  <i
                    className="fas fa-caret-right"
                    style={{ transform: "translateY(1.5px)" }}
                  ></i>
                </span>
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>
                <Button
                  style={{ color: "#878ba2" }}
                  id="demo-positioned-button"
                  aria-controls="demo-positioned-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <i
                    className="fa fa-user"
                    aria-hidden="true"
                    id={classes.iTag}
                  >
                    {" "}
                    {user.name}
                  </i>
                </Button>
              </h5>
            </a>
          </li>
        </ol>
      </nav>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <div
        className={classes.wrapper}
        style={{
          marginLeft: "-4px",
          position: "fixed",
          top: "48px",
        }}
      >
        <div className={classes.sidebar}>
          <h4>
            My View <i className="fas fa-angle-down"></i>
          </h4>
          <ul className={classes.ul}>
            <Link href="/home">
              <li
                className={
                  tabPath === "/home"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-home"></i>

                <a className={classes.a}>Home</a>
              </li>
            </Link>
            <Link href="/tripmain">
              <li
                className={
                  tabPath === "/tripmain"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                {/* <FontAwesomeIcon icon={faBuilding} className={classes.fas} />{" "} */}
                <i className="fas fa-suitcase-rolling"></i>

                <a className={classes.a}>Trips</a>
              </li>
            </Link>
            <Link href="/expensemain">
              <li
                className={
                  tabPath === "/expensemain"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                {/* <i className="fas fa-scroll"></i>{" "} */}
                {/* <svg
                  style={{ height: "20px", width: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="icon align-middle"
                >
                  <path d="M380.8 16.2H131.2c-41 0-74.3 33.3-74.3 74.3v384.7c0 7.8 4.3 14.8 11.3 18.3 7.1 3.6 15.5 2.9 21.9-1.7l54.1-39.4c11.8-8.6 27.6-8.6 39.4 0l46.9 34.2c15.2 11.1 35.6 11.1 50.9 0l46.9-34.2c11.8-8.6 27.6-8.6 39.4 0l54.1 39.4c3.7 2.7 8 4 12.4 4 3.3 0 6.5-.8 9.6-2.3 7-3.5 11.3-10.6 11.3-18.3V90.5c0-41-33.4-74.3-74.3-74.3zm44.3 436.9c0 1.6-1.9 2.6-3.2 1.6l-36.5-26.6a63.169 63.169 0 0 0-74.7 0l-46.9 34.2c-4.6 3.4-10.9 3.4-15.5 0l-46.9-34.2c-11.2-8.1-24.3-12.2-37.4-12.2-13.1 0-26.2 4.1-37.4 12.2l-36.5 26.6c-1.3 1-3.2 0-3.2-1.6V90.5c0-24.4 19.8-44.3 44.3-44.3h249.6c24.4 0 44.3 19.8 44.3 44.3v362.6z"></path>
                  <path d="M332.7 167.9H188c-8.3 0-15 6.7-15 15s6.7 15 15 15h144.7c8.3 0 15-6.7 15-15s-6.7-15-15-15zM307.2 258.4H204.8c-8.3 0-15 6.7-15 15s6.7 15 15 15h102.3c8.3 0 15-6.7 15-15s-6.7-15-14.9-15z"></path>
                </svg> */}
                <i class="fas fa-bookmark"></i>
                <a className={classes.a}>Expenses</a>
              </li>
            </Link>
            <Link href="/user_reports">
              <li
                className={
                  tabPath === "/user_reports"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-wallet"></i>{" "}
                <a className={classes.a}>Reports</a>
              </li>
            </Link>
            <Link href="/cardsmain/cardsmain">
              <li
                className={
                  tabPath.includes([
                    "/cardsmain/cardsmain" || "/cardsmain/newcard",
                  ])
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i class="far fa-credit-card"></i>{" "}
                <a className={classes.a}>Cards</a>
              </li>
            </Link>
            <Link href="/user_approvals">
              <li
                className={
                  tabPath === "/user_approvals"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-check-circle"></i>{" "}
                <a className={classes.a}>Approvals</a>
              </li>
            </Link>
            <Link href="/user_analytics">
              <li
                className={
                  tabPath === "/user_analytics"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-chart-pie"></i>{" "}
                <a className={classes.a}>Analytics</a>
              </li>
            </Link>
            <Link href="/my_settings">
              <li
                className={
                  tabPath === "/my_settings"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-cog"></i>{" "}
                <a className={classes.a}>My Settings</a>
              </li>
            </Link>
            <br />
            <br />
          </ul>

          {user.role == 1 && admins()}
        </div>
      </div>
    </div>
  );
}
