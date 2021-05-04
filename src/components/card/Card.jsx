import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  title = "",
  createdAt = "",
  location = "",
  company = "",
  description = "",
  salary = "",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.createdAt}>{createdAt}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.company}>{company}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <div className={styles.content}>
        <p>{description}</p>
        {!!salary && <span>{`${salary}`}</span>}
        <button className={styles.button}>{">"}</button>
      </div>
    </div>
  );
};
export default Card;
