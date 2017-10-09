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
            />
          );
        })
      }
    </div>
  );
}

ActionGrid.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.object.isRequired
}


export default ActionGrid;
