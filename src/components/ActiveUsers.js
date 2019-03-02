import React from 'react'
import PropTypes from 'prop-types'


const ActiveUsers = (props) => {
  const { users, currentUser } = props;
  return(
    <div>
      Active users:
      <ul className="active-users list-group">
        {users.map((item, index) => {
          return(
            <li key={index} className="list-group-item">
            {
              item === currentUser && 
              <span className="badge pull-left">YOU</span>
            }
              SocketUser:{item}
            </li>
          )
        })}
      </ul>
    </div>
  );

};

ActiveUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ActiveUsers
