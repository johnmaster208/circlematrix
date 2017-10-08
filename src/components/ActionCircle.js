import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from 'react-shapes'


const ActionCircle = (props) => {
  const { circleItem, onClick } = props;
  return(
    <a href="#" onClick={onClick}>
      <Circle
        r={circleItem.radius}
        fill={circleItem.fillColor}
        stroke={circleItem.strokeColor}
        strokeWidth={circleItem.strokeWidth}
        // radius={Circleitem.radius}
        // fillColor={item.fillColor}
        // strokeColor={item.strokeColor}
        // strokeWidth={item.strokeWidth}
        // isSelected={item.isSelected}
      />
    </a>
  );

};

ActionCircle.propTypes = {
  circleItem: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  //onClick: PropTypes.function.isRequired
}

export default ActionCircle
