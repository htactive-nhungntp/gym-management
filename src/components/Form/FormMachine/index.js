import React, { Component } from "react";
import TableButton from "../../Table/TableButton"

export default class FormMachine extends Component {
constructor(props){
    super(props)
    this.state = {
    newData: " ",
    status: " ",
    img: null,
    url: ""
}
}

toggleChange = (event, stateName) => {
    switch (stateName) {
    case "addName":
    this.setState({ newData: event.target.value });
    break;
    case "addStatus":
    this.setState({ status: event.target.value });
    break;
    default:
    break;
    }
    };

    addMachines = () =>{
        this.props.addMachines()
    }   
   
    handleImage = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          console.log("image: ", image);
          this.setState(
            () => ({ img: image }),
            () => console.log("state image: ", this.state.img)
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
                this.addMachines(url);
              });
          }
        );
      };

    
  render() {
    return (
      <div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />

          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="form-group row">
              <h2>Add New Machine</h2>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={e => this.toggleChange(e, "addName")}
                  //value={this.}
                />
              </div>
            </div>
            
            <div className="form-group row">
              <label
                htmlFor="inputImage"
                className="col-sm-2 col-form-label"
              >
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  onChange={this.handleImage}
                 
                  // value={this.}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputStatus"
                className="col-sm-2 col-form-label"
              >
                Status
              </label>
              <div className="col-sm-10">
                <input
                 className="form-control"
                  type="text"
                  onChange={e => this.toggleChange(e, "addStatus")}
                  // value={this.}
                />
              </div>
            </div>
            <br /> <br />
            <div className="btn-edit">
              <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
              &nbsp;
              <button
                className="btn btn-large btn-success"
                onClick={() => this.addMachines()}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
