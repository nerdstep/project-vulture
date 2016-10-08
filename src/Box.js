import React, { PropTypes } from 'react'
import './Box.css'


function Box({ className, ...props }) {
  return (
    <div
      className={['Box', className].join(' ')}
      {...props}
    />
  )
}

Box.propTypes = {
  className: PropTypes.string
}

export default Box
