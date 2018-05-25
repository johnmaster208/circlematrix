import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ActionGrid from './components/ActionGrid';
import ActionCircleCounter from './components/ActionCircleCounter';
import ActiveUsers from './components/ActiveUsers';
import {
  selectCircle, 
  unSelectCircle, 
  socketCircle,
  unSelectSocketCircle, 
  getOccupiedCircles, 
  putOccupiedCircles
} from './actions/circleActions';
import {
  getUserSocketId, 
  getSocketConnections
} from './actions/socketActions';

class App extends React.Component {

  constructor(props) {
    super(props);
    const { 
      getUserSocketId, 
      getActiveSocketConnections, 
      putOccupiedCircles, 
      socketCircleWasSelected, 
      socketCircleWasUnselected
    } = this.props;
    this.socket = io('http://localhost:5000',{reconnection:false});
    this.activateActionCircle = this.activateActionCircle.bind(this);
    this.socket.on('pushUserSocketId', (id) => {
      getUserSocketId(id);
    });
    this.socket.on('activeSocketConnections', (connections) => {
      getActiveSocketConnections(connections);
    });
    this.socket.on('peerCirclesLoaded', (circles) => {
      putOccupiedCircles(circles);
    });
    this.socket.on('addSocketCircleById', (id) => {
      socketCircleWasSelected(this.props.items[id]);
    });
    this.socket.on('removeSocketCircleById', (id) => {
      socketCircleWasUnselected(this.props.items[id]);
    });
  }

  componentDidMount() {
    this.socket.emit('bootstrapCircleMatrix'); 
  }

  componentWillReceiveProps(nextProps) {
    const { items, occupiedCircles, socketCircleWasSelected, currentUserSocketId } = nextProps;
    if(occupiedCircles.length > 0) {
      occupiedCircles.map((circleId) => {
        socketCircleWasSelected(items[circleId]);
      });
    }
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
    const { circlesRemaining, connectedUsers, items } = this.props; 
    return (
    <div id="App">
      <div id="App-Sidebar" className="col-xs-12 col-sm-4">
        <h1 className="app-title">CircleMatrix</h1>
        <div className="sidebar-counter">
          <ActionCircleCounter counter={circlesRemaining} />
        </div>
        <div className="sidebar-users">
          <ActiveUsers users={connectedUsers} />
        </div>
      </div>
      <div id="App-Grid" className="col-xs-12 col-sm-9">
        <ActionGrid
          items={items}
          onClick={this.activateActionCircle}
        />
      </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch, items) {
  return {
    circleWasSelected: (circleObj) => dispatch(selectCircle(circleObj)),
    circleWasUnselected: (circleObj) => dispatch(unSelectCircle(circleObj)),
    socketCircleWasSelected: (circleObj) => dispatch(socketCircle(circleObj)),
    socketCircleWasUnselected: (circleObj) => dispatch(unSelectSocketCircle(circleObj)),
    getOccupiedCircles: () => dispatch(getOccupiedCircles()),
    putOccupiedCircles: (circles) => dispatch(putOccupiedCircles(circles)),
    getUserSocketId: (id) => dispatch(getUserSocketId(id)),
    getActiveSocketConnections: (connections) => dispatch(getSocketConnections(connections)),
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.circle.items,
    circlesRemaining: state.circle.circlesRemaining,
    occupiedCircles: state.circle.occupiedCircles,
    connectedUsers: state.socket.connections,
    currentUserSocketId: state.socket.id,
    activeSocketConnections: state.socket.connections.length
    //socket: state.socket
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
