import React from 'react'

function TopBar() {
  return (
    <div className="top-bar">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control search-bar" placeholder="Search" />
      </div>
    </div>
  )
}

export default TopBar