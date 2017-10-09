import React from 'react';
import ActionGrid from './components/ActionGrid';
import ActionCircleCounter from './components/ActionCircleCounter';
import data from './data/circleData';
import {selectCircle, unSelectCircle} from './actions/circleActions';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: data,
      circlesRemaining: 10
    }
  }


  activateActionCircle = (obj) => {
    if(obj.wasSelectedByMe === false && obj.wasSelectedByOther === false && this.state.circlesRemaining !== 0) {
      this.setState({circlesRemaining: this.state.circlesRemaining - 1});
      selectCircle(obj,this.state.items)
    } else if (obj.wasSelectedByMe === true && obj.wasSelectedByOther === false) {
      this.setState({circlesRemaining: this.state.circlesRemaining + 1});
      unSelectCircle(obj, this.state.items)
    }
    this.setState({items: this.state.items})
  };


  render() {
    return (
    <div id="App" className="container-fluid">
      <div id="App-Sidebar" className="col-md-3">
        <h1 className="">CircleMatrix</h1>
        <div className="sidebar-counter">
          <ActionCircleCounter counter={this.state.circlesRemaining} />
        </div>
        <div className="sidebar-users">
          Users online:
        </div>
      </div>
      <div id="App-Grid" className="col-md-9">
        <ActionGrid items={this.state.items} onClick={this.activateActionCircle} />
      </div>
    </div>
    );
  }
}

export default App;
