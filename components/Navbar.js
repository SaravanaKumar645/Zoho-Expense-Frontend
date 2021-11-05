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
  const open = Boolean(anchorEl);
  const { user } = isAutheticated();
  const router = useRouter();

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
          <img src="/search-icon.png" className={classes.searchIcon}></img>
          <input
            className={classes.search_input}
            type="search"
            placeholder="Search Expenses"
          ></input>
        </div>
        <ol className={classes.ol}>
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
              <i
                className="fas fa-plus"
                style={{
                  color: "rgba(255, 255, 255, 0.925)",
                  padding: "5px",
                  width: "28px",
                  borderRadius: "3px",
                  backgroundColor: "#22b378",
                  fontWeight: "600",
                }}
              ></i>
            </a>
            <a href="#">
              <i className="fas fa-cog" style={{ color: "#878ba2" }}></i>
            </a>
            <a href="#">
              <i className="far fa-bell" style={{ color: "#878ba2" }}></i>
            </a>
            <a href="#">
              <i
                className="fas fa-user-friends"
                style={{ color: "#878ba2" }}
              ></i>
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
                  <i className="fa fa-user" aria-hidden="true">
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
                <i className="fas fa-scroll"></i>{" "}
                <a className={classes.a}>Expenses</a>
              </li>
            </Link>
            <Link href="/reportmain">
              <li
                className={
                  tabPath === "/reportmain"
                    ? classes["navTabLiFocused"]
                    : classes["navTabLi"]
                }
              >
                <i className="fas fa-wallet"></i>{" "}
                <a className={classes.a}>Reports</a>
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
