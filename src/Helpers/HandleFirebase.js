// import React, { Component } from "react";

import firebaseConfig from "../ConfigFirebase";
import firebase from "firebase";

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export const getdata = async tableName => {
  const database = firebase.database().ref(tableName);
  let objects = [];
  let membersArr = [];
  await database.on("value", snapshot => {
    objects = snapshot.val();
    if (objects) {
      membersArr = Object.keys(objects).map(key => ({
        ...objects[key],
        id: key
      }));
      console.log("membersArr ne ", membersArr);
      return membersArr;
    }
  });
  console.log("membersArr1 1111ne ", membersArr);
  return membersArr;
};

// export const update = key => {
//   console.log(key);
//   firebase
//     .database()
//     .ref()
//     .child(`members/${key}`)
//     .set({ name: "Nguyen Van A", createAt: "11112" });
// };

// export const addMem = (name, address, phone, DOB) => {
//   firebase
//     .database()
//     .ref("members")
//     .push({
//       id: this.randomId(),
//       name,
//       address,
//       phone,
//       DOB,
//       createAt:
//         new Date().getDate() +
//         "/" +
//         (new Date().getMonth() + 1) +
//         "/" +
//         new Date().getFullYear()
//     });
// };

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
