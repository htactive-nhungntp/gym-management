import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf9ogquG_0IjSO8oyWK8rvlyvPcy9SrpE",
  authDomain: "gym-management-2fecd.firebaseapp.com",
  databaseURL: "https://gym-management-2fecd.firebaseio.com",
  projectId: "gym-management-2fecd",
  storageBucket: "gym-management-2fecd.appspot.com",
  messagingSenderId: "222611987531",
  appId: "1:222611987531:web:673a1a77563a7756"
};

class Firebase {
  constructor() {
    !firebase.apps.length
      ? (this.app = firebase.initializeApp(firebaseConfig))
      : (this.app = firebase.app());
    this.auth = this.app.auth();
    this.db = this.app.database();
    this.storage = this.app.storage();
  }
  callFirebase = tableName => {
    let onData = firebase.database().ref(tableName);
    return onData;
  };

  getdata = async tableName => {
    const database = this.callFirebase(tableName);
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
  addMachines = () => this.db.ref("machines");
  // editMachines = index => this.db.ref(`machines/${index}`);
  deleteMachines = index => this.db.ref(`machines/${index}`);
}

export default Firebase;
