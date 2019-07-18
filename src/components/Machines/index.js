import React, { Component } from 'react'
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from "../../ConfigFirebase";
require("firebase/firestore");

export default (!firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app());

export class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machine: [],
      newData: "",
      img: null,
      url: ""
    };

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref("machines");
    this.storage = this.app.storage();
  }

  toggleChange = event => {
    this.setState({ newData: event.target.value });
  };

  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      console.log("hiện hồn coi: ", image);
      this.setState(
        () => ({ img: image }),
        () => console.log("gọi hồn: ", this.state.img)
      );
    }
  };

  handleUpload = (e) => {
    e.preventDefault();
    const { img } = this.state;
    const uploadTask = this.storage
      .ref(`images/${img.name}`)
      .put(img);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        this.storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then(url => {
            this.addMember(url);
          });
      }
    );
  };

  gotdata = data => {
    var Temp = [];
    let mc = data.val();
    let key = Object.keys(mc);
    for (var i = 0; i < key.length; i++) {
      var k = key[i];
      var name = mc[k].name;
      var quanlity = mc[k].quanlity;
      var image = mc[k].image;
      Temp.push({ key: k, name, quanlity, image });
    }

    this.setState({
      machine: Temp
    });
    console.log("this.state: ", this.state.machine);
  };

  errdata = data => {
    console.log(data);
  };

  componentDidMount() {
    this.database.on("value", this.gotdata, this.errdata);
  }

  randomId() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  addMember = (url) => {
    firebase
      .database()
      .ref("machines")
      .push({
        id: this.randomId(),
        name: this.state.newData,
        quanlity: "1",
        image: url
      })
      .getDownloadURL();
    this.setState({
      newData: "",
      img: ""
    });
 
  };

  update = key => {
    console.log(key);
    firebase
      .database()
      .ref()
      .child(`machines/${key}`)
      .set({ name: this.state.newData, image: this.state.img });
  };

  delete = key => {
    console.log(key);
    firebase
      .database()
      .ref()
      .child(`machines/${key}`)
      .remove();
  };


    ////////////////
    render() {
        return (
            <div>
                  <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="sparkline12-list shadow-reset mg-t-30">
          <div className="sparkline12-hd">
            <div className="main-sparkline12-hd">
              <h1>  Machines List</h1>
              <div className="sparkline12-outline-icon">
                <span className="sparkline12-collapse-link">
                  <i className="fa fa-chevron-up" />
                </span>
                <span>
                  <i className="fa fa-wrench" />
                </span>
                <span className="sparkline12-collapse-close">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
          <div className="sparkline12-graph">
            <div className="static-table-list">
              <table className="table hover-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quanlity</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.machine.map(t => (
                      <tr key={t.key}>
                        <td>{t.key}</td>
                        <td>{t.name}</td>
                        <td>{t.quanlity}</td>
                        <td>
                          <img src={t.image} alt="" width={60} height={70} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
   
            </div>
        )
    }
}
