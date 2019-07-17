import React from "react";

import TableButton from "../Table/TableButton";

class EditingMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateName: "",
      updateAddress: "",
      updatePhone: "",
      updateDOB: ""
    };
  }

  gotdata = data => {
    var Temp = [];
    console.log("data ne: ", data);
    let members = data.val();
    let key = Object.keys(members);
    for (var i = 0; i < key.length; i++) {
      var k = key[i];
      var id = members[k].id;
      var name = members[k].name;
      var address = members[k].address;
      var phone = members[k].phone;
      var DOB = members[k].DOB;
      var createAt = members[k].createAt;
      Temp.push({ key: k, id, name, address, phone, DOB, createAt });
    }

    this.setState({
      members: Temp
    });
  };

  errdata = data => {
    console.log(data);
  };

  componentDidMount() {
    this.database.on("value", this.gotdata, this.errdata);
  }

  loadData = () => {
    const member = this.props.dataTable.find(
      mem => mem.key === this.props.match.params
    );

    console.log("key to compare", this.props.match.params);
    console.log("member found", member);
    this.setState({
      updateName: member.name,
      updateAddress: member.address,
      updatePhone: member.phone,
      updateDOB: member.DOB
    });
  };

  toggleChange = event => {
    this.setState({ updateName: event.target.value });
  };

  render() {
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <div className="form-group row">
            <h2>Update</h2>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                value={this.state.updateName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                value={this.state.updateAddress}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                value={this.state.updatePhone}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Day of Birth
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={this.toggleChange}
                value={this.state.updateDOB}
              />
            </div>
          </div>
          <br /> <br />
          <div className="btn-edit">
            <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
            &nbsp;
            <TableButton to="/" content="Save" color="btn-success" />
          </div>
        </div>
      </div>
    );
  }
}

export default EditingMember;
