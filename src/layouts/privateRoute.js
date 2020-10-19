import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeLoginState } from '../actions/auth'

const PrivateRoute = (props) => {
  if (props.isAuthenticated()) {
    if (!props.isLoggedIn && props.changeLoginState) props.changeLoginState(true)
    return <Route {...props} exact={props.exact} component={props.component} />
  }
  if (props.isLoggedIn) props.changeLoginState(false)
  return <Redirect to={{ pathname: '/login' }} />
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)