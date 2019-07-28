import React, { Component } from "react";
import { withFirebase } from "../../../Firebase/context";
import { Swaling, Warning } from "../../../Helpers/afterActions";

class FormProfileBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      updateFullName: " ",
      updateAddress: "",
      updateEmail: "",
      updateUserName: "",
      updatePassword: "",
      updateConfirm: "",
      img: null,
      url: ""
    };
  }

  toggleChange = (event, stateName) => {
    switch (stateName) {
      case "updateFullName":
        this.setState({ updateFullName: event.target.value });
        break;
      case "updateAddress":
        this.setState({ updateAddress: event.target.value });
        break;
      case "updateEmail":
        this.setState({ updateEmail: event.target.value });
        break;
      case "updateUserName":
        this.setState({ updateUserName: event.target.value });
        break;
      case "updatePassword":
        this.setState({ updatePassword: event.target.value });
        break;
      case "updateConfirm":
        this.setState({ updateConfirm: event.target.value });
        break;
      case "updateImage":
        this.setState({ img: event.target.value });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let data = await this.props.firebase.getdata(`acount`);
    this.setState({
      user: data,
      updateFullName: data[0].full_name,
      updateAddress: data[0].address,
      updateEmail: data[0].email,
      updateUserName: data[0].user_name,
      updatePassword: data[0].password,
      img: data[0].avatar
    });
  };

  updateInfor = url => {
    if (this.state.updatePassword === this.state.updateConfirm) {
      this.props.firebase.callFirebase(`acount/${1}`).set({
        full_name: this.state.updateFullName,
        address: this.state.updateAddress,
        email: this.state.updateEmail,
        user_name: this.state.updateUserName,
        password: this.state.updatePassword,
        confirm: this.state.updateConfirm
      });
      Swaling("Save change successfully !");
    } else {
      Warning("Confirm password is not match !");
    }
  };

  reset = () => {
    this.setState({
      updateFullName: "",
      updateAddress: "",
      updateEmail: "",
      updateUserName: "",
      updatePassword: ""
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
              this.updateInfor(url);
            });
        }
      );
    }
    this.updateInfor(this.state.url);
  };

  render() {
    return (
      <div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 mx-auto personal-info">
          <h1 className="text-center">Admin Profile</h1>
          <hr />

          <div className="text-center col-md-3">
            <div className="profile-img">
              <img
                src={this.state.img}
                className="avatar img-circle  my-2"
                alt="avatar"
                onChange={e => this.toggleChange(e, "updateImage")}
              />
            </div>
            <div className="file-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fa fa-cloud-upload" /> Upload
              </label>
              <input id="file-upload" type="file" onChange={this.handleImage} />
            </div>
          </div>
          <div className="col-md-9 mt-3">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Full name:
                </label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.updateFullName}
                    onChange={e => this.toggleChange(e, "updateFullName")}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Address:
                </label>
                <div className="col-md-8">
                  <textarea
                    className="form-control unresize"
                    rows="2"
                    value={this.state.updateAddress}
                    onChange={e => this.toggleChange(e, "updateAddress")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Email:
                </label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.updateEmail}
                    onChange={e => this.toggleChange(e, "updateEmail")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Username:
                </label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.updateUserName}
                    onChange={e => this.toggleChange(e, "updateUserName")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Password:
                </label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="password"
                    value={this.state.updatePassword}
                    onChange={e => this.toggleChange(e, "updatePassword")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label">
                  Confirm password:
                </label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="password"
                    value={this.state.updateConfirm}
                    onChange={e => this.toggleChange(e, "updateConfirm")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 text-md-left control-label" />
                <div className="col-md-8">
                  <input
                    type="button"
                    className="btn btn-primary"
                    defaultValue="Save Changes"
                    onClick={e => this.handleUpload(e)}
                  />
                  <span />
                  <input
                    type="button"
                    className="btn btn-danger ml-3"
                    defaultValue="Cancel"
                    onClick={this.reset}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
let formProfile = withFirebase(FormProfileBase);
export default formProfile;
