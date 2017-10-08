import React from 'react';
import PropTypes from 'prop-types';
import ActionCircle from './ActionCircle'

const ActionGrid = (props) => {
  const { items, onClick } = props
  return (
    <div id="Action-Grid">
      {
        items.map((item, index) => {
          return (
            <ActionCircle
              key={index}
              circleItem={item}
              onClick={onClick}
            />
          );
        })
      }
    </div>
  );
}

ActionGrid.propTypes = {
  items: PropTypes.array.isRequired
}


export default ActionGrid;
