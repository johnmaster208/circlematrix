import React from 'react';
import PropTypes from 'prop-types';


const ActionCircleCounter = (props) => {
  const { counter } = props

  return(
    <div className="text-center">
      <div className="circle-counter-number">{counter}</div>
      <div className="circle-counter-cr">circles remaining</div>
    </div>
  );


};

ActionCircleCounter.propTypes = {
  counter: PropTypes.number
}

export default ActionCircleCounter
