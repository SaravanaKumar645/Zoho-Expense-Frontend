import React from "react";
import styles from "./Cardsmain.module.css";
import Link from "next/link";

export default function Cardsmain() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.topName}>Cards</p>
        <Link href="/cardsmain/newcard">
          <button className={styles.addCardButton}>+ Add Card </button>
        </Link>
      </div>
      <hr />
      <div className={styles.middle}>
        <img
          src="https://dhd53jy3n33fn.cloudfront.net/zexpense/assets/images/empty-cards-list-1x-9856e3789f56ce546515b4fe47ecae43.png"
          srcSet="https://dhd53jy3n33fn.cloudfront.net/zexpense/assets/images/empty-cards-list-2x-02f7ede5c3a9a8d219668b357347f2d1.png"
          alt="Preview not available"
        />
        <br />
        <div className={styles.middleContent}>
          <h1>Access corporate and personal cards</h1>
          <br />
          <p>
            Add or access cards and view imported card statements. Reconcile
            card statements or directly convert them to expenses.
          </p>
        </div>
        <br />
        <Link href="/cardsmain/newcard">
          <button className={`${styles.addCardButton} ${styles.down}`}>
            + Add Card{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
