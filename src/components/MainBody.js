// library imports
import React, { PureComponent } from 'react';
import AddMember from './AddMember';
import Team from './Team';

// interfaces
class MainBody extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { shouldShowAddNewMember: false };
  }
  handleClick = () => {
    this.setState({ shouldShowAddNewMember: true })
  }
  render() {
    const { users } = this.props;
    const { shouldShowAddNewMember } = this.state;
    return (
      <div className="container main-body overflow-hidden">
        {shouldShowAddNewMember ? <AddMember /> : <Team users={users} handleClick={this.handleClick} />}
      </div>
    );
  }
}


export default MainBody;
