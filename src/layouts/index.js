import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

import { changeLoginState, signOut } from '../actions/auth'

/**
 * header and footer
 */
import Header from './header'
import Footer from './footer'

/**
 * private route
 */
import PrivateRoute from './privateRoute'

/**
 * main routes
 */
import Login from '../containers/login'
import SignUp from '../containers/signUp'

import Browse from '../containers/browse'

import { auth } from './auth'

const Routes = ({ isLoggedIn, changeLoginState, signOut }) => {
  if (auth.isAuthenticated() && !isLoggedIn) {
    changeLoginState(true)
  }

  const LogInRoute = (props) => {
    if (auth.isAuthenticated()) {
      return <Redirect to={{ pathname: '/' }} />
    } else {
      return <Route {...props} component={props.component} />
    }
  }

  const SignUpRoute = (props) => {
    if (auth.isAuthenticated()) {
      return <Redirect to={{ pathname: '/' }} />
    } else {
      return <Route {...props} component={props.component} />
    }
  }

  return (
    <div>
      <Header signOut={signOut} />
      <Switch>
        <LogInRoute exact path='/login' component={() => <Login />} />
        <SignUpRoute exact path='/sign-up' component={() => <SignUp />} />
        <PrivateRoute exact isAuthenticated={auth.isAuthenticated} path='/' component={Browse} />
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    },
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
)