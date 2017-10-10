import React from 'react';
import { connect } from 'react-redux';
import ActionGrid from './components/ActionGrid';
import ActionCircleCounter from './components/ActionCircleCounter';
import {selectCircle, unSelectCircle} from './actions/circleActions';
import {socketSelectCircle} from './actions/socketActions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      circlesRemaining: props.circlesRemaining
    };
    this.activateActionCircle = this.activateActionCircle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.items})
  }

  activateActionCircle(obj) {
    if(obj.wasSelectedByMe === false && obj.wasSelectedByOther === false && this.props.circlesRemaining !== 0) {
      this.props.circleWasSelected(obj, this.props.items);
    } else if (obj.wasSelectedByMe === true && obj.wasSelectedByOther === false) {
      this.props.circleWasUnselected(obj, this.props.items);
    }
  }

  render() {
    return (
    <div id="App" className="container-fluid">
      <div id="App-Sidebar" className="col-md-3">
        <h1 className="">CircleMatrix</h1>
        <div className="sidebar-counter">
          <ActionCircleCounter counter={this.props.circlesRemaining} />
        </div>
        <div className="sidebar-users">
        </div>
      </div>
      <div id="App-Grid" className="col-md-9">
        <ActionGrid items={this.props.items} onClick={this.activateActionCircle} />
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    circlesRemaining: state.circle.circlesRemaining,
    items: state.circle.items,
    socket: state.socket
  }
}

function mapDispatchToProps(dispatch, items) {
  return {
    circleWasSelected: (circleObj, items) => dispatch(selectCircle(circleObj, items)),
    circleWasUnselected: (circleObj, items) => dispatch(unSelectCircle(circleObj, items)),
    circleWasSelectedBySocket: (circleObj, items) => dispatch(socketSelectCircle(circleObj, items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
