import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button } from 'antd'

import logo from '../../assets/images/logo.svg'

const Header = ({ location, signOut }) => {
  const renderClassName = () => {
    if (location.pathname === '/login' || location.pathname === '/sign-up') {
      return 'd-none'
    }
  }
  return (
    <div className={`header-container ${renderClassName()}`}>
      <img
        src={logo}
        alt='Logo Space X'
        className="logo"
      />
      <Button type="primary" danger onClick={signOut}>
        Log out
      </Button>
    </div>
  )
}

export default withRouter(Header)