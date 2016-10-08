import React, { PropTypes } from 'react'

function ListItem({ item }) {
  return (
    <li>
      {item}
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired
}

export default ListItem
