import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
//import ActionCircle from './components/ActionCircle'
import ActionGrid from './components/ActionGrid'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: []}
  }

  componentWillMount() {
    this.generateActionGrid()
    this.pollActionCircleStatus(this.state.items)
  }

  generateActionGrid = (items) => {
    //this needs to iterate over the number of items.
    for(let i = 0; i < 250; i++) {
      this.state.items.push({
          radius: 25,
          fillColor: {color:'#dddddd'},
          strokeColor: {color: 'transparent'},
          strokeWidth: 3,
          isSelected: false
      })
    }
  };

  pollActionCircleStatus = (items) => {
    items.map((item, i) => {
      if(item.isSelected == true) {
        this.setState({fillColor: {color: '#1e029a'}})
      }
    });
  };

  activateActionCircle = (event) => {
    console.log('Clicked circle ' + event);
  };


  render() {
    return (
    <div id="App" className="">

      <div id="App-Grid" className="col-md-10">
        <ActionGrid items={this.state.items} onClick={this.activateActionCircle()} />
      </div>
      <div id="App-Sidebar" className="col-md-2">
        <h1 className="">CircleMatrix</h1>

        <div className="sidebar-help-messages">
          You can do it!
        </div>
        <div className="sidebar-counter">
          10
        </div>
        <div className="sidebar-users">
          Users online:
        </div>
      </div>
    </div>
    );
  }
}

export default App;
