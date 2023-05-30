import React from "react";
import Card from "./Card";
import Button from "../Users/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
 


  return (
    <div>
    <div className={styles.backdrop} onClick={props.okayClicker} ></div>
    <Card className={styles.modal} >
      <header className={styles.header} >
        <h1>{props.title}</h1>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions} >
        <Button onClick={props.okayClicker}> OKAY</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
