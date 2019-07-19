import React, { Component } from 'react'
import TableButton from "../../Table/TableButton/index";
export default class HandelFormMachine extends Component {
   constructor(props){
       super(props)
       console.log(props);
   }

    render() {
        return (
            <div>
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
              <label htmlFor="inputImage" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10">
                <input type="file" onChange={this.handleImage} />
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
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="sel1" className="col-sm-2 col-form-label">
                Type:
              </label>
              <div className="col-sm-10">
                <select
                  class="form-control"
                  id="type"
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
            </div>
        )
    }
}
