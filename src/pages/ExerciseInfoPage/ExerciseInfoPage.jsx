import React from "react";
import ExerciseInfoComponent from "../../components/ExerciseInfoComponent";
import styles from "./ExerciseInfoPage.module.scss";

let ExerciseInfoPage = props => {
  return (
    <div className={styles.ExercisePage}>
      <ExerciseInfoComponent />
    </div>
  );
};

export default ExerciseInfoPage;
