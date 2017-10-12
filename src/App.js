import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ActionGrid from './components/ActionGrid';
import ActionCircleCounter from './components/ActionCircleCounter';
import ActiveUsers from './components/ActiveUsers';
import {selectCircle, unSelectCircle, socketCircle, unSelectSocketCircle } from './actions/circleActions';
import {getSocketConnections} from './actions/socketActions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.socket = io('http://localhost:5000',{reconnection:false});
    this.activateActionCircle = this.activateActionCircle.bind(this);
  }

  componentWillMount() {
    this.socket.on('activeSocketConnections', (connections) => {
      this.props.getActiveSocketConnections(connections);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.socket.on('addSocketCircleById', (id) => {
      console.log(id);
      this.props.socketCircleWasSelected(this.props.items[id]);
    });
    this.socket.on('removeSocketCircleById', (id) => {
      console.log(id);
      this.props.socketCircleWasUnselected(this.props.items[id]);
    });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  activateActionCircle(obj) {
    if(obj.wasSelectedByMe === false && obj.wasSelectedByOther === false && this.props.circlesRemaining !== 0) {
      this.props.circleWasSelected(obj);
      this.socket.emit('socketCircleSelect', this.props.items[obj.id]);
    } else if (obj.wasSelectedByMe === true && obj.wasSelectedByOther === false) {
      this.props.circleWasUnselected(obj);
      this.socket.emit('socketCircleUnSelect', this.props.items[obj.id]);
    }
  }


  render() {
    return (
    <div id="App">
      <div id="App-Sidebar" className="col-xs-12 col-md-3">
        <h1 className="app-title">CircleMatrix</h1>
        <div className="sidebar-counter">
          <ActionCircleCounter counter={this.props.circlesRemaining} />
        </div>
        <div className="sidebar-users">
          <ActiveUsers users={this.props.connectedUsers} />
        </div>
      </div>
      <div id="App-Grid" className="row col-xs-12 col-md-9">
        <ActionGrid
          items={this.props.items}
          onClick={this.activateActionCircle}
          // {...this.state}
        />
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.circle.items,
    circlesRemaining: state.circle.circlesRemaining,
    occupiedCircles: state.circle.occupiedCircles,
    connectedUsers: state.socket.connections,
    activeSocketConnections: state.socket.connections.length
    //socket: state.socket
  }
}

function mapDispatchToProps(dispatch, items) {
  return {
    circleWasSelected: (circleObj) => dispatch(selectCircle(circleObj)),
    circleWasUnselected: (circleObj) => dispatch(unSelectCircle(circleObj)),
    socketCircleWasSelected: (circleObj) => dispatch(socketCircle(circleObj)),
    socketCircleWasUnselected: (circleObj) => dispatch(unSelectSocketCircle(circleObj)),
    getActiveSocketConnections: (connections) => dispatch(getSocketConnections(connections))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
