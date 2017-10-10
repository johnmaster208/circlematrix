import PropTypes from 'prop-types'


const ActionCircleCounter = (props) => {
  const { counter } = props

  return(
      counter + " circles remaining."
  );


};

ActionCircleCounter.propTypes = {
  counter: PropTypes.number
}

export default ActionCircleCounter
