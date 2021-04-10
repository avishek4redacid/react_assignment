import React from 'react'

function AddMember({ items }) {
  return (
    <div>
      <div className="row col-md-12 page-header">
        <span className="">Add Team Member</span>
      </div>
      <div className="row col-md-9 user-form">
        <form>
          <div className="row col-md-12">
            <div className="col-md-5" />
            <div className="upload-image">
              <span className="fa fa-camera" />
            </div>
            <div className="col-md-5" />
          </div>
          <div style={{ marginTop: '60px' }}>
            <div className="row col-md-12">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">First Name</label>
                  <input type="text" className="form-control input" placeholder="Enter your first name" id="first" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Last Name</label>
                  <input type="text" className="form-control input" placeholder="Enter your first name" id="second" />
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Your email</label>
                  <input type="text" className="form-control input" placeholder="Enter your email" id="first" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Phone number</label>
                  <input type="text" className="form-control input" placeholder="Enter your phone number" id="second" />
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Position</label>
                  <input type="text" className="form-control input" placeholder="CEO" id="first" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Gender</label>
                  <select type="text" className="form-control input" placeholder="Enter your first name" id="second">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12">
            <div className="col-md-4" />
            <button className="add-member">Add Now</button>
            <div className="col-md-4" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMember
