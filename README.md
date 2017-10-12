# circlematrix

Demonstration of React + Redux + Websockets:

 * Users can select up to 10 circles from the board (and no more!)
 * Additional Users can join the app via the power of Socket.io and select unoccupied circles
 * Circles you select will show up on peers' boards in realtime, as will theirs show on yours.


### Stuff used to make this:

 * React via create-react-app boilerplate
 * Redux and redux-thunk for state management
 * Express and Socket.IO to serve websocket requests
 * react-shapes


#### Install the project

Download or clone the project, ```cd``` into the directory, and type

```bash
npm install
````
or
```bash
yarn
```

Then, to run the App and Socket server concurrently, type

```bash
npm start
```
