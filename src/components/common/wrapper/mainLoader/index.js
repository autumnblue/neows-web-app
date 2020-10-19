import React from 'react'

const MainLoader = ({ isVisible }) => {
  return (
    <>
      {
        isVisible
          ? (
            <div className='spinner'>
              <div className='spinner__container'>
                <div className='double-bounce1' />
                <div className='double-bounce2' />
              </div>
            </div>
          )
          : null
      }
    </>
  )
}

export default MainLoader
