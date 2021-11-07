import React, { useState } from "react";
import styles from "./Newcardmain.module.css";
import classes from "./Cardsmain.module.css";
import Link from "next/link";

export default function Newcardmain() {
  const [showDialog, setShowDialog] = useState(false);
  const [bankDialog, setBankDialog] = useState(false);
  const [error, setError] = useState("");

  const [nameofBank, setNameofBank] = useState("");
  const [bankDetails, setBankDetails] = useState({
    bankname: "",
    accessid: "",
    passcode: "",
    verifypasscode: "",
    customerid: "",
    ipin: "",
    verifyipin: "",
  });
  const handleSubmit = (e) => {
    if (
      bankDetails.ipin === bankDetails.verifyipin &&
      bankDetails.passcode === bankDetails.verifypasscode
    ) {
      e.preventDefault();
      alert(JSON.stringify(bankDetails));
      setShowDialog(false);
      setBankDialog(false);
      setBankDetails("");
      setError(false);
    } else if (bankDetails.passcode != bankDetails.verifypasscode) {
      setError("Enter the correct Passcode & Verify Passcode");
      e.preventDefault();
    } else {
      setError("Enter the correct IPIN & Verify IPIN");
      e.preventDefault();
    }
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBankDetails({ ...bankDetails, [name]: value });
  };
  const handleBank = (e) => {
    setBankDialog(true);
    setNameofBank(e.target.innerHTML);
  };
  const handleCancelButton = () => {
    setShowDialog(false);
    setBankDialog(false);
    setBankDetails("");
    setError(false);
  };
  return (
    <div className={styles.container}>
      <div className={classes.top}>
        <p className={classes.topName}>Connect your card to Zoho Expense!</p>
        <Link href="/cardsmain/cardsmain">
          <button className={styles.exit}>
            <i class="fas fa-times"></i>
          </button>
        </Link>
      </div>
      <hr />
      <div className={styles.middle}>
        <h5>CONNECT CARD</h5>
        <br />
        <p>Connect your card using bank credentials or import it manually</p>
        <br />
        <br />
        <br />
        <button
          className={styles.addBank}
          onClick={() => {
            setShowDialog(true);
          }}
        >
          Add Bank +
        </button>
        {showDialog ? (
          <div className={styles.overlay}>
            <div className={styles.dialogBox}>
              <div className={styles.dialogHead}>
                <p>Connect your card to Zoho Expense!</p>
                <i
                  onClick={() => {
                    setShowDialog(false);
                  }}
                  class="fas fa-times"
                ></i>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.dialogMain}>
                  <p>{error}</p>
                  <br />

                  <label>
                    Enter Your Bank Name *<br />
                    <input
                      onChange={handleOnChange}
                      name="bankname"
                      value={bankDetails.bankname}
                      required
                    />
                  </label>
                  <br />
                  <br />

                  <label>
                    Access ID *<br />
                    <input
                      onChange={handleOnChange}
                      name="accessid"
                      value={bankDetails.accessid}
                      required
                    />
                  </label>
                  <br />
                  <br />

                  <label>
                    Passcode *<br />
                    <input
                      type="password"
                      onChange={handleOnChange}
                      name="passcode"
                      value={bankDetails.passcode}
                      autoComplete="off"
                      required
                    />
                  </label>
                  <br />
                  <br />

                  <label>
                    Verify Passcode *<br />
                    <input
                      type="password"
                      onChange={handleOnChange}
                      name="verifypasscode"
                      value={bankDetails.verifypasscode}
                      autoComplete="off"
                      required
                    />
                  </label>
                  <br />
                  <br />
                </div>
                <div className={styles.conditions}>
                  <input type="checkbox" required />
                  <p> Accept Terms and Conditions</p>
                </div>
                <br />
                <br />
                <div className={styles.dialogFooter}>
                  <button type="submit" className={styles.dialogbutton}>
                    Submit
                  </button>
                  <button
                    className={`${styles.dialogbutton} ${styles.cancel}`}
                    onClick={handleCancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.popularCards}>
          <p>Popular Cards</p>
          <br />
          <div className={styles.cards}>
            <div onClick={handleBank} className={styles.bank}>
              HDFC Bank (India)- Credit Card
            </div>
            <div onClick={handleBank} className={styles.bank}>
              Citibank (India)- Credit Card
            </div>
            <div onClick={handleBank} className={styles.bank}>
              State Bank of India Credit Card (India)
            </div>
            <div onClick={handleBank} className={styles.bank}>
              American Express Card (India)
            </div>
            <div onClick={handleBank} className={styles.bank}>
              Standard Chartered Bank (India)
            </div>
            <div onClick={handleBank} className={styles.bank}>
              PayPal
            </div>
          </div>
        </div>
        {bankDialog ? (
          <div className={styles.overlay}>
            <div className={styles.dialogBox}>
              <div className={styles.dialogHead}>
                <p>Connect your card to Zoho Expense!</p>
                <i onClick={handleCancelButton} class="fas fa-times"></i>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.dialogMain}>
                  <p className={styles.bankNamePopular}>{nameofBank}</p>
                  <br />
                  <br />

                  <p>{error}</p>
                  <br />

                  <label>
                    Customer ID (Login ID) *<br />
                    <input
                      onChange={handleOnChange}
                      name="customerid"
                      value={bankDetails.customerid}
                      required
                    />
                  </label>
                  <br />
                  <br />

                  <label>
                    IPIN (password) *<br />
                    <input
                      type="password"
                      onChange={handleOnChange}
                      name="ipin"
                      value={bankDetails.ipin}
                      autoComplete="off"
                      required
                    />
                  </label>
                  <br />
                  <br />

                  <label>
                    Verify IPIN (password) *<br />
                    <input
                      type="password"
                      onChange={handleOnChange}
                      name="verifyipin"
                      value={bankDetails.verifyipin}
                      autoComplete="off"
                      required
                    />
                  </label>
                  <br />
                  <br />
                </div>
                <div className={styles.conditions}>
                  <input type="checkbox" required />
                  <p> Accept Terms and Conditions</p>
                </div>
                <br />
                <br />
                <div className={styles.dialogFooter}>
                  <button type="submit" className={styles.dialogbutton}>
                    Submit
                  </button>
                  <button
                    className={`${styles.dialogbutton} ${styles.cancel}`}
                    onClick={handleCancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
