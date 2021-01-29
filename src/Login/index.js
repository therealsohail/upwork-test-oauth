import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import firebase from "../firebase";
import Google from "../google.png";
import Github from "../github.png";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const handleGithub = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GithubAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        let username = user["displayName"];
        let uid = user["uid"];
        if (uid) {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        let username = user["displayName"];
        let uid = user["uid"];
        if (uid) {
          window.localStorage.setItem("uid", uid);
          window.localStorage.setItem("username", username);
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        id="email"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>Or signin using</p>
      <button onClick={handleGithub}>
        <img src={Github} width="20" />
        Github
      </button>
      <button onClick={handleGoogle}>
        <img src={Google} width="20" />
        Google
      </button>

      <br />
      <p style={{ color: "red", fontWeight: "bold" }}>{error && error}</p>
    </form>
  );
};

export default Login;
