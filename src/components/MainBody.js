// library imports
import React from 'react'
import Team from './Team';

// interfaces
function MainBody(props) {

    return (
      <div className="container main-body overflow-hidden">
        <Team users={props.users} />
      </div>
    );
}


export default MainBody;
