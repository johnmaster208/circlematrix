import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from 'react-shapes'


const ActionCircle = (props) => {
  const { item, onClick } = props;
  return(
    <a id={item.key} onClick={onClick.bind(null, item)}>
      <Circle
        r={50}
        fill={item.fillColor}
        stroke={{color: "transparent"}}
        strokeWidth={3}
      />
    </a>
  );

};

ActionCircle.propTypes = {
  item: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.object.isRequired
}

export default ActionCircle
