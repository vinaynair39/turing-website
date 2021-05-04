import React from "react";
import classnames from "classnames";
import styles from "./Buttons.module.scss";

export const PrimaryButton = ({ children }) => {
  return <button className={classnames(styles.button)}>{children}</button>;
};

export const IconButton = ({ children }) => {
  return <button className={classnames(styles.button)}>{children}</button>;
};
