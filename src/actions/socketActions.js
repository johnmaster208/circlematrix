import openSocket from 'socket.io-client';
import { APP_CONSTANTS } from '../constants';
const socket = openSocket('http://localhost:4008');

export const SOCKET_ACTIONS = {
  SOCKET_SELECT_CIRCLE: "SOCKET_SELECT_CIRCLE"
}

export function socketSelectCircle(obj, items) {
  const updatedCircle = {
    id: obj.id,
    fillColor: { color: APP_CONSTANTS.socketSelectedFillColor },
    wasSelectedByMe: false,
    wasSelectedByOther: true
  }
}
// export function selectCircle(obj, items) {
//   const updatedCircle = {
//     id: obj.id,
//     fillColor: { color: '#214699'},
//     wasSelectedByMe: true,
//     wasSelectedByOther: false
//   }
//   let findCircleObj = items.find(obj => obj.id == updatedCircle.id);
//   items.splice(findCircleObj.id, 1, updatedCircle)
// }
//
// export function unSelectCircle(obj, items) {
//   const updatedCircle = {
//     id: obj.id,
//     fillColor: { color: '#ddd'},
//     wasSelectedByMe: false,
//     wasSelectedByOther: false
//   }
//   let findCircleObj = items.find(obj => obj.id == updatedCircle.id);
//   items.splice(findCircleObj.id, 1, updatedCircle)
// }
//
// export function socketSelectCircle(obj, items) {
//   const updatedCircle = {
//     id: obj.id,
//     fillColor: { color: '#7ab3e2'},
//     wasSelectedByMe: false,
//     wasSelectedByOther: true
//   }
// }
//
// export function subscribeToTimer(interval, cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
