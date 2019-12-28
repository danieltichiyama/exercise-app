import React from "react";
import styles from "./Playground.module.scss";

<<<<<<< HEAD
class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Playground}>
        <p>Pushing and pulling encouraged. Have fun.</p>
        {/* insert playground equipment here. */}
      </div>
    );
  }
}
=======
const Playground = props => {
  return (
    <div className={styles.Playground}>
      <p>Pushing and pulling encouraged. Have fun.</p>
      {/* insert playground equipment here. */}
    </div>
  );
};
>>>>>>> 7b32e1b668a6799cf7ea95f2e53932103b52a524

export default Playground;
