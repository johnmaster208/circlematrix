import React from 'react'
import PropTypes from 'prop-types'


const ActiveUsers = (props) => {
  const { users } = props;
  return(
    <div>
      Active users:
      <ul className="active-users list-group">
        {users.map((item, index) => {
          return(<li key={index} className="list-group-item">SocketUser:{item}</li>)
        })}
      </ul>
    </div>
  );

};

ActiveUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ActiveUsers
