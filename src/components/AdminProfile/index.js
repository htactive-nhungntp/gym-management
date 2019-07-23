import React, { Component } from "react";
import { withFirebase } from "../../Firebase/context";
import FormProfile from "../Form/FormProfile";

class AdminProfileBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      full_name: "",
      user_name: "",
      address:"",
      email: "",
      password:"",
      img: null,
      url: " ",
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let data_user = await this.props.firebase.getdata(`acount`);
    this.setState({
        user:data_user
    });
  };

  updateInfor = index => {
    this.props.firebase.updateInfor(index).set({
      name: " "
    });
  };
  render() {
    
    return (     
      <FormProfile/>
    );
  }
}
let profile = withFirebase(AdminProfileBase);
export default profile;
