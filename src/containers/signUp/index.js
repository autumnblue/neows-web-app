import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import SignUp from '../../components/signUp'
import { signUp } from '../../actions/auth'

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password, ownProps.history))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
)