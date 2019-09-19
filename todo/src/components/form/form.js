import React from "react";

import styles from "./form.scss";

const Form = props => {
  return (
    <div className={styles.form}>
      <div>
        <header>
          <span className="title">{props.title}</span>
          <button onClick={props.close}>X</button>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Form;
