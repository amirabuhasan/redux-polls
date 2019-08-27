import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import LoadingBar from 'react-redux-loading';
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              <Nav/>
              { loading
                  ? null
                  : (
                      <div>
                        <Route path='/' exact component={ Dashboard }/>
                        <Route path='/leaderboard' component={ Leaderboard }/>
                        <Route path='/polls/:id' component={ Poll }/>
                        <Route path='/add' component={ AddPoll }/>
                      </div>
                  )
              }
            </div>
          </Fragment>
        </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
};

export default connect(mapStateToProps)(App);