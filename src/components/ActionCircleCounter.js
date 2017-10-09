import React from 'react'
import PropTypes from 'prop-types'


const ActionCircleCounter = (props) => {
  const { counter } = props

  return(
      props.counter + " circles remaining."
  );


};

ActionCircleCounter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default ActionCircleCounter
