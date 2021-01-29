import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let [username, setUsername] = useState("");
  useEffect(() => {
    let username = window.localStorage.getItem("username");
    let uid = window.localStorage.getItem("uid");
    setUsername(username);
    console.log(username);
    // if (uid === null) {
    // }
  }, []);
  let message =
    username !== null ? `Welcome ${username}` : "You can't access this route";
  return <h1>{message}</h1>;
};

export default Dashboard;
