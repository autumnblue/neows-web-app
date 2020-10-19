import React from 'react'

import MainLoader from './mainLoader'

const LoadingWrapper = ({ isLoading, children }) => {
  return (
    <>
      <>{children}</>
      <MainLoader isVisible={isLoading} />
    </>
  )
}

export default LoadingWrapper