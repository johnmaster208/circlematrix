import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { MODAL } from './constants/index.js';
import ActionGrid from './components/ActionGrid';
import ActionCircleCounter from './components/ActionCircleCounter';
import ActiveUsers from './components/ActiveUsers';
import circleActions from './actions/circleActions';
import socketActions from './actions/socketActions';
import ModalAlert from './components/ModalAlert';
class App extends React.Component {

  constructor(props) {
    super(props);
    const {
      items, 
      getUserSocketId, 
      getActiveSocketConnections, 
      putOccupiedCircles, 
      socketCircleWasSelected, 
      socketCircleWasUnselected
    } = this.props;
    this.socket = io('http://localhost:5000',{reconnection:false});
    this.activateActionCircle = this.activateActionCircle.bind(this);
    this.onCloseAlertModal = this.onCloseAlertModal.bind(this);
    this.socket.on('pushUserSocketId', (id) => {getUserSocketId(id)} );
    this.socket.on('activeSocketConnections', (connections) => {getActiveSocketConnections(connections)} );
    this.socket.on('peerCirclesLoaded', (circles) => {putOccupiedCircles(circles)} );
    this.socket.on('addSocketCircleById', (id) => {socketCircleWasSelected(items[id])} );
    this.socket.on('removeSocketCircleById', (id) => {socketCircleWasUnselected(items[id])} );
  }
  componentDidMount() {
    this.socket.emit('bootstrapCircleMatrix');
    this.props.showModalAlert(MODAL.TUTORIAL);
  }
  componentWillReceiveProps(nextProps) {
    const { items, occupiedCircles, socketCircleWasSelected } = nextProps;
    if(occupiedCircles.length > 0) {
      occupiedCircles.map((circleId) => {
        return socketCircleWasSelected(items[circleId]);
      });
    }
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }
  activateActionCircle(obj) {
    const { circlesRemaining, circleWasSelected, circleWasUnselected, items, showModalAlert } = this.props;
    if(obj.wasSelectedByMe === false && obj.wasSelectedByOther === false && circlesRemaining !== 0) {
      circleWasSelected(obj);
      this.socket.emit('socketCircleSelect', items[obj.id]);
    } else if (obj.wasSelectedByMe === true && obj.wasSelectedByOther === false) {
      circleWasUnselected(obj);
      this.socket.emit('socketCircleUnSelect', items[obj.id]);
    } else {
      if(obj.wasSelectedByOther === true) {
        showModalAlert(MODAL.ALERT_OCCUPIED_CIRCLE);
      } else if (circlesRemaining === 0) {
        showModalAlert(MODAL.ALERT_NO_CIRCLES_REMAINING);
      }
      
    }
  }
  onCloseAlertModal(key) {
    const { hideModalAlert } = this.props;
    hideModalAlert(key);
  }
  render() {
    const { circlesRemaining, connectedUsers, items, modalState, hideModalAlert, currentUserSocketId } = this.props; 
    return (
    <div id="App">
      <div id="App-Sidebar" className="">
        <h1 className="app-title">CircleMatrix</h1>
        <div className="sidebar-counter">
          <ActionCircleCounter counter={circlesRemaining} />
        </div>
        <div className="sidebar-users">
          <ActiveUsers users={connectedUsers} currentUser={currentUserSocketId} />
        </div>
      </div>
      <div id="App-Grid" className="">
        <ActionGrid
          items={items}
          onClick={this.activateActionCircle}
        />
      </div>
      <div>
        <ModalAlert 
          modalKey={modalState.key}
          show={modalState.show && modalState.key !== 'UNKNOWN'}
          onClose={hideModalAlert} />
      </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch, items) {
  return {
    circleWasSelected: (circleObj) => dispatch(circleActions.selectCircle(circleObj)),
    circleWasUnselected: (circleObj) => dispatch(circleActions.unSelectCircle(circleObj)),
    socketCircleWasSelected: (circleObj) => dispatch(circleActions.socketCircle(circleObj)),
    socketCircleWasUnselected: (circleObj) => dispatch(circleActions.unSelectSocketCircle(circleObj)),
    getOccupiedCircles: () => dispatch(circleActions.getOccupiedCircles()),
    putOccupiedCircles: (circles) => dispatch(circleActions.putOccupiedCircles(circles)),
    getUserSocketId: (id) => dispatch(socketActions.getUserSocketId(id)),
    getActiveSocketConnections: (connections) => dispatch(socketActions.getSocketConnections(connections)),
    showModalAlert: (key) => dispatch(socketActions.showModalAlert(key)),
    hideModalAlert: (key) => dispatch(socketActions.hideModalAlert(key))
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.circle.items,
    circlesRemaining: state.circle.circlesRemaining,
    occupiedCircles: state.circle.occupiedCircles,
    connectedUsers: state.socket.connections,
    currentUserSocketId: state.socket.id,
    activeSocketConnections: state.socket.connections.length,
    modalState: state.socket.modal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
