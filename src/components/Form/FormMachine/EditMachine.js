import React, { Component } from "react";
import "firebase/firestore";
import TableButton from "../../Table/TableButton/index";
import { withFirebase } from "../../../Firebase/context";
import { Swaling } from "../../../Helpers/afterActions";
import "../../../Firebase/firebase";
require("firebase/firestore");

class EditMachineBase extends Component {
  constructor(props) {
    super(props);
    console.log("props: ", this.props);
    console.log("props: ", this.props.match.params.id);
    this.state = {
      updateName: "",
      updateStatus: "",
      img: null,
      url: "",
      type_id: ""
    };
    this.loadData();
  }

  loadData = async () => {
    let mac = await this.props.firebase.getdata(`machines`);
    let macParams = mac.find(m => m.id === this.props.match.params.id);
    this.setState({
      updateName: macParams.name,
      updateStatus: macParams.status,
      url: macParams.image,
      type_id: macParams.type_id
    });
  };

  toggleChange = (event, stateName) => {
    switch (stateName) {
      case "addName":
        this.setState({ updateName: event.target.value });
        break;
      case "addStatus":
        this.setState({ updateStatus: event.target.value });
        break;
      case "addType":
        this.setState({ type_id: event.target.value });
        break;
      case "addImage":
        this.setState({ img: event.target.value });
        break;
      default:
        break;
    }
  };

  updateMachines = url => {
    this.props.firebase
      .callFirebase(`machines/${this.props.match.params.id}`)
      .set({
        name: this.state.updateName,
        image: url,
        status: this.state.updateStatus,
        type_id: this.state.type_id
      });
    Swaling("Update data successfully !");
    this.setState({
      updateName: "",
      updateStatus: "",
      img: null,
      url: "",
      type_id: ""
    });
  };

  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(
        () => ({ img: image }),
        () => console.log("state image: ", this.state.img)
      );
    }
  };

  handleUpload = e => {
    e.preventDefault();
    const { img } = this.state;
    if (img) {
      const uploadImage = this.props.firebase.storage
        .ref(`images/${img.name}`)
        .put(img);
      uploadImage.on(
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
          this.props.firebase.storage
            .ref("images")
            .child(img.name)
            .getDownloadURL()
            .then(url => {
              this.updateMachines(url);
            });
          // this.props.history.push(`/machine`);
        }
      );
    }
    this.updateMachines(this.state.url);
  };

  render() {
    return (
      <div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="form-group row">
              <h2>Edit Machine</h2>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={e => this.toggleChange(e, "addName")}
                  value={this.state.updateName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputImage" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10 ">
                <input type="file" onChange={this.handleImage} />
                <img
                  src={this.state.url}
                  alt="can not upload"
                  onChange={e => this.toggleChange(e, "addImage")}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputStatus" className="col-sm-2 col-form-label">
                Status
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={e => this.toggleChange(e, "addStatus")}
                  value={this.state.updateStatus}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="sel1" className="col-sm-2 col-form-label">
                Type:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="type"
                  value={this.state.type_id}
                  onChange={e => this.toggleChange(e, "addType")}
                >
                  <option value="01">Máy tập thể hình</option>
                  <option value="02">Máy chạy bộ</option>
                  <option value="03">Tạ</option>
                  <option value="04">Phụ kiện</option>
                </select>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="btn-edit">
            <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
            &nbsp;
            <button
              className="btn btn-large btn-success"
              onClick={this.handleUpload}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let editMachine = withFirebase(EditMachineBase);
export default editMachine;
