import React, { Component } from 'react';



class AdminProfile extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 mx-auto personal-info">
                <h1 className="text-center">Admin Profile</h1>
                <hr />
                <div className="row">
                    <div className="text-center col-12 col-md-3">
                        <img src="//placehold.it/100" className="avatar img-circle  my-2" alt="avatar" />
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <i className="fa fa-cloud-upload" /> Upload
                    </label>
                        <input id="file-upload" type="file" />
                    </div>
                    <div className="col-md-9 mt-3">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Full name:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" defaultValue="Jane" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Address:</label>
                                <div className="col-md-8">
                                    <textarea className="form-control unresize" rows="2"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Email:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" defaultValue="janesemail@gmail.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Username:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" defaultValue="janeuser" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Password:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="password" defaultValue={11111122333} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label">Confirm password:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="password" defaultValue={11111122333} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 text-md-left control-label" />
                                <div className="col-md-8">
                                    <input type="button" className="btn btn-primary" defaultValue="Save Changes" />
                                    <span />
                                    <input type="reset" className="btn btn-danger ml-3" defaultValue="Cancel" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminProfile;
