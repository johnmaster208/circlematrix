import React from 'react'
import PropTypes from 'prop-types'


const ActiveUsers = (props) => {
  const { users } = props;
  return(
    <div>
      Active users:
      <ul>
        {users.map((item, index) => {
          return(<li key={index}>{item}</li>)
        })}
      </ul>
    </div>
  );

};

ActiveUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ActiveUsers
