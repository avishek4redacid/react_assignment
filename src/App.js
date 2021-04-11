import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import MainBody from './components/MainBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddMember from './components/AddMember';

const items = [
  { name: 'team', label: 'Team', icon: 'fa fa-user', link: '/' },
  { name: 'dashboard', label: 'Dashboard', icon: 'fa fa-tachometer-alt', link: '/dashboard' },
  { name: 'products', label: 'Products', icon: 'fa fa-th-large', link: '/' },
  { name: 'favourites', label: 'Favourites', icon: 'fa fa-heart', link: '/' },
  { name: 'inbox', label: 'Inbox', icon: 'fa fa-comments', link: '/' },
]

const users = [
  { name: 'Jason Price', role: 'Admin', image: 'https://s3-alpha-sig.figma.com/img/8b6c/8fa8/e573bb6bb5f962ef6b86b3f49d63b4ec?Expires=1618790400&Signature=CIlGC7hoPHz~IttykFg-brjC98tFaUGky7lJjaENfNdpOKiZnWiNm4A3BiU~7R0kiT7U7XPd3EvtQAA9LoU3rnPB7YFMP8BY6eQ8uCXzuvazi7Zq1PDl8KaSfuBjq3pRKiQDQNP6~s9gziLXyBYfPe~q37g3bZ0p4RvQmDnvhz5Mk54B90vAjOxu07zl4zOBwcgVkVMExGB3lZgsDZdKLst9UQFfQArFUcJlO1rWyWcxOwP3u7hO5d2wRs48JP5mWvHCgPGvk-MIAC4LbA7sObsIPz734lOPYHDxnzwgK43g3hJoUZ6Fcn6C4-yvX6wD68WHp5~EzkzIW-Kvoe1CVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', email: 'janick_parisian@yahoo.com' },
  { name: 'Jukkoe Sisao', role: 'CEO', image: 'https://s3-alpha-sig.figma.com/img/432c/8df9/789613f40b424715fac1035a8dc4ee87?Expires=1618790400&Signature=eEPLX2ZDkWTPI3My~8QJSmohkfi4uxk-oxfIlQ1YeZbVrLe2nEsaazSAxQjgSq2WZhpTu~ry0oCphZ66bnWlevlDgHRlodCQjfCaksur95sxFWtfPLuSOuEIyZ152mN8d5E6wRwA~C2ST099Ua18OqsTV11y2tKT3vdx~uPK1c13w0pmzuiXpK-ohpe-rYjMYNy-Rk6jFnFfJiFb7xjf80dAAzAkn~40uqsZx-t0PMtGXDT77cwwICFxe1AMKdWmPCVtehFIjvPJCb8RmEhCX47bm9EOdFVhydIsPBdLLPBmM6TazmiruIBQjoKFOG6oo7EAlfPrKoVHDmzAe4UwbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', email: 'sibyl_kozey@gmail.com' },
  { name: 'Harriet King', role: 'CTO', image: 'https://s3-alpha-sig.figma.com/img/bb3a/3195/736f9b786e4cd0487f026a0579672641?Expires=1618790400&Signature=TZkjaTio0gBHKdIKZOiHY8DWK2RpmL1RALPqzM1ESot8yr5EDdzNQzWxp4hnO~BWero33iAaEjwUAtYgT10OV5Ve3gsVGvuOL3lGXC4Omnp1gxJlrMwJHCt5rvTMsTRNb3VwImN3E3vKc4cF-PUQcwNbwzakfamqSeLm85QCTgZy-pQc56ndovYLLE5ucWg-C7dCFvmqYA8mlaBdIg~a-Ca0iEPHX63qC~GSsaLCeKpBJ5gA6FildNWJcCgpHQgWaukQluitMsYDoQmvlC9qwHCEjY-jcnr83QRKBRAm3PFtQRVU9aoF-LIOrwtKBezFGYcdb~qzm46M2Asgas8UIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', email: 'nadia_block@hotmail.com' },
  { name: 'Lenora Banson', role: 'Lead', image: 'https://s3-alpha-sig.figma.com/img/6a4a/3c04/2e8a0ba0f5d1f0e2036800f15a1559ea?Expires=1618790400&Signature=e0uR75AYc7-J5CDbuywzuBmDHNkB2Ky53KeEqTNkbYhfMR4M29qoZUKNxUjQnGeYKJjWmREYaFyJWnEufyFHpJLzH8iJaWUcCfWdpm4mHRzxMQv4zHkQdY-ebId3z4BgQp7o-d6p8oCHSH7zkhP5bS-Bj~cBi9WHscT1DH6FX4HB5pZocvVSgza16wUstgHvdhuAjmsQs6~vhx2rqcHEfiF3JpOKWqqEa68YCwg-H68g3eiJodv9pky5RkB51JTVA3H3DJaNLy5Ihtk4HwMZCJWoLKbsPhWTvtAk0VVM3LkkvD7hJd-GlTjdOdmZLPKYroU3nZKtbdXz1jemFjzsiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', email: 'feil.wallace@kunde.us' },
]

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }



  render() {
    return (
      <div>
        <Sidebar items={items} />
        <TopBar />
        <MainBody users={users} />
        <Router>
          <Switch>
            <Route path="/add-new-member">
              <AddMember />
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
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
