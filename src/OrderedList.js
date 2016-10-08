import React, { PropTypes } from 'react'


function OrderedList({ items, ...props }) {
  return (
    <ol>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ol>
  )
}

OrderedList.propTypes = {
  items: PropTypes.array.isRequired
}

export default OrderedList
