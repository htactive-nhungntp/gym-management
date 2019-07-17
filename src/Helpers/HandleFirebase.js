// import React, { Component } from "react";

import firebaseConfig from "../ConfigFirebase";
import firebase from "firebase";

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export const getdata = async tableName => {
  const database = firebase.database().ref(tableName);
  const snapshot = await database.once("value");
  const data = snapshot.val();
  return Object.entries(data).map(d => ({
    ...d[1],
    id: d[0]
  }));
};

export const updateData = (id, updateObject) => {
  firebase
    .database()
    .ref()
    .child(`members/${id}`)
    .set({
      name: updateObject.name,
      address: updateObject.address,
      DOB: updateObject.DOB,
      phone: updateObject.phone,
      createAt: updateObject.createAt
    });
};

const randomId = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export const addMem = (name, address, phone, DOB) => {
  firebase
    .database()
    .ref("members")
    .push({
      id: randomId(),
      name,
      address,
      phone,
      DOB,
      createAt:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear()
    });
};

// export const gotdata = () => {
//   let a = getdata();
//   // let key = Object.keys(members);

//   // for (var i = 0; i < key.length; i++) {
//   //   var k = key[i];
//   //   var id = members[k].id;
//   //   var name = members[k].name;
//   //   var address = members[k].address;
//   //   var phone = members[k].phone;
//   //   var DOB = members[k].DOB;
//   //   var createAt = members[k].createAt;
//   //   Temp.push({ key: k, id, name, address, phone, DOB, createAt });
//   // }

//   //   this.setState({
//   //     members: Temp
//   //   });
// };

// let errdata = data => {
//   console.log(data);
// };

//   export const delete = key => {
//     console.log(key);
//     firebase
//       .database()
//       .ref()
//       .child(`members/${key}`)
//       .remove();
//   };

// export default connectFirebase;
