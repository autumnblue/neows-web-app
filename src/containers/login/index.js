import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from '../../components/login'

import { login } from '../../actions/auth'

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password, ownProps.history))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)