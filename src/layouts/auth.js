export default class Auth {
  email

  constructor() {
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.setSession = this.setSession.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getEmail = this.getEmail.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleAuthentication (authResult, history) {
    if (authResult && authResult.email) {
      this.setSession(authResult, history)
    } else {
      history.push('/login')
    }
  }

  setSession (authResult, history) {
    window.localStorage.setItem('isLoggedIn', 'true')

    this.email = authResult.email
    window.localStorage.setItem('email', this.email)

    history.push('/')
  }

  isAuthenticated () {
    return window.localStorage.getItem('email')
  }

  getEmail () {
    return window.localStorage.getItem('email')
  }

  logout () {
    this.email = null

    window.localStorage.removeItem('email')

    window.location.href = '/login'
  }
}

export const auth = new Auth()