import React from 'react'

function Sidebar({ users, handleClick }) {
  return (
    <div>
      <div className="row col-md-12 page-header">
        <span className="">Team</span>
        <button onClick={() => handleClick()} className="add-button">Add New Member</button>
      </div>
      <div className="row">
        {users.map(({ name, role, email, image }) => (
          <div className="user-card col-md-2">
            <div className="user-circle">
              <img src={image} alt="" />
            </div>
            <div className="user-details">
              <h4 className="user-name">{name}</h4>
              <h5 className="user-role">{role}</h5>
              <h5 className="user-email">{email}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar