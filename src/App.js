import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { connect } from 'react-redux';
import { setUsers, addMember } from './actions';
import MainBody from './components/MainBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddMember from './components/AddMember';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const items = [
  { name: 'team', label: 'Team', icon: 'fa fa-user', link: '/' },
  { name: 'dashboard', label: 'Dashboard', icon: 'fa fa-tachometer-alt', link: '/dashboard' },
  { name: 'products', label: 'Products', icon: 'fa fa-th-large', link: '/' },
  { name: 'favourites', label: 'Favourites', icon: 'fa fa-heart', link: '/' },
  // { name: 'inbox', label: 'Inbox', icon: 'fa fa-comments', link: '/' },
  { name: 'inbox', label: 'Inbox', icon: 'fa fa-comments', link: '/add-new-member' },
]


class App extends Component {

  //  componentDidMount() {
  //    // call default function to display redux operation
  //    this.props.setUsers(users);
  //  }


  componentDidUpdate(prop, prop1) {
    console.log("afjdsfiw", prop, JSON.stringify(this.props));
  }


  render() {
    return (
      <div>
        <Sidebar items={items} />
        <TopBar />
        <Router history={history}>
          <Switch>
            <Route path="/add-new-member">
              <AddMember addMember={this.props.addMember} history={history} />
            </Route>
            <Route path="/">
              <MainBody users={this.props.users} />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    users: state.users || [],
    addMember: state.addMember,
  };
}

export default connect(mapStateToProps, { setUsers, addMember })(App);
