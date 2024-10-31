import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
  },
  greeting: {
    padding: 10,
  },
  log: {
    border: 0,
    padding: 10,
    borderRadius: 10,
    boxShadow: "0px 0px 7px grey",
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>welcome</span>}

      {isLoggedIn ? (
        <button style={styles.log} onClick={onClickLogout}>logout</button>
      ) : (
        <button style={styles.log} onClick={onClickLogin}>login</button>
      )}
    </div>
  );
}

export default Toolbar;