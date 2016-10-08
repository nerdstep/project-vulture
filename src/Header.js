import React, { PropTypes } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import { grey900, lightBlue500 } from 'material-ui/styles/colors'
import './Header.css'


const styles = {
  header: {
    backgroundColor: grey900
  },
  progress: {
    marginTop: -4
  }
}

function Header({ isLoading, title }) {
  return (
    <div>
      <div className="Header" style={styles.header}>
        <h1>{title}</h1>
      </div>
      {isLoading &&
        <LinearProgress
          color={lightBlue500}
          mode="indeterminate"
          style={styles.progress}
        />
      }
    </div>
  )
}

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
