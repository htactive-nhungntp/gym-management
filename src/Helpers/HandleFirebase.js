// import React, { Component } from "react";

import firebaseConfig from "../ConfigFirebase";
import firebase from "firebase";

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export const callFirebase = tableName => {
  let onData = firebase.database().ref(tableName);
  return onData;
};

export const getdata = async tableName => {
  const database = callFirebase(tableName);
  const snapshot = await database.once("value");
  const data = snapshot.val();
  if (data) {
    return Object.entries(data).map(d => ({
      ...d[1],
      id: d[0]
    }));
  } else {
    return [];
  }
};

export const deleteData = key => {
  let onData = firebase
    .database()
    .ref()
    .child(key);
  return onData;
};
