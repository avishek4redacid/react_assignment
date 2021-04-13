import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";


class AddMember extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      firstName: '',
      lastName: '',
      role: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.addMember = this.addMember.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  handleTextChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  addMember() {
    if (this.state.firstName && this.state.lastName && this.state.role && this.state.email && this.state.file) {
      this.props.addMember({
        name: this.state.firstName + ' ' + this.state.lastName,
        role: this.state.role,
        image: this.state.file,
        email: this.state.email,
      });
    }
  }


  render() {
    return (
      <div className="container main-body overflow-hidden">
        <div className="row col-md-12 page-header">
          <span className="">Add Team Member</span>
        </div>
        <div className="row col-md-9 user-form">
          <form>
            <div className="row col-md-12">
              <div className="col-md-5" />
              <div className="upload-image">
                {this.state.file ? <img src={this.state.file} alt="no-img" /> :
                  <span className="fa fa-camera"></span>}
                <input type="file" id="file" class="file" onChange={this.handleChange}
                  style={{ display: 'none' }} />
                <label for="file"
                  style={{ display: 'block', color: '#4379EE', cursor: 'pointer', paddingTop: '16px' }}>
                  {!this.state.file ? 'Upload Photo *' : 'Edit Photo'}</label>
              </div>
              <div className="col-md-5" />
            </div>
            <div style={{ marginTop: '60px' }}>
              <div className="row col-md-12">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="first">First Name *</label>
                    <input type="text" className="form-control input" placeholder="Enter your first name" id="first"
                      value={this.state.firstName} onChange={e => this.handleTextChange('firstName', e.target.value)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="last" >Last Name *</label>
                    <input type="text" className="form-control input" placeholder="Enter your last name" id="second"
                      value={this.state.lastName} onChange={e => this.handleTextChange('lastName', e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="row col-md-12">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="email" >Your email *</label>
                    <input type="text" className="form-control input" placeholder="Enter your email" id="first"
                      value={this.state.email} onChange={e => this.handleTextChange('email', e.target.value)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="phone" >Phone number</label>
                    <input type="text" className="form-control input" placeholder="Enter your phone number" id="second" />
                  </div>
                </div>
              </div>
              <div className="row col-md-12">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="role" >Position *</label>
                    <input type="text" className="form-control input" placeholder="CEO" id="first"
                      value={this.state.role} onChange={e => this.handleTextChange('role', e.target.value)} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="first">Gender</label>
                    <select type="text" className="form-control input" id="second">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-4" />
              <Link to="/"><button className="add-member" onClick={this.addMember}>Add Now</button></Link>
              <div className="col-md-4" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMember;
