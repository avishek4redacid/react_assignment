import React from 'react'
import { useHistory } from "react-router-dom";


function Team({ users }) {
  const history = useHistory();

  function handleClick() {
    history.push("/add-new-member");
  }

  return (
    <div>
      <div className="row col-md-12 page-header">
        <span className="">Team</span>
        <button onClick={() => handleClick()} className="add-button">Add New Member</button>
      </div>
      <div className="col-md-12 row">
        {users.map(({ name, role, email, image }) => (
          <div className="user-card">
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

export default Team