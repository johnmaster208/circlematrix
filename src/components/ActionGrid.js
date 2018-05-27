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
              item={item}
              onClick={onClick}
              isOccupied={item.wasSelectedByMe === true || item.wasSelectedByOther === true}
            />
          );
        })
      }
    </div>
  );
}

ActionGrid.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}


export default ActionGrid;
