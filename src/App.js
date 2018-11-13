import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConsoleDetail from './component/consoleDetail'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        show: false,
        logger: null
      }
      this.changeShow = this.changeShow.bind(this)
  }

  renderShow () {
    if (this.state.show){
      return <ConsoleDetail loggerMessage={this.state.logger}/>
    }
    else {
      return null
    }
  }

  changeShow(){ // set the loggerMessage to show  and  set the showing time of the message
    this.setState({
        show: true,
        logger: {
          name: 'logger',
            log: 'something happen'
        }
    },()=> console.log(this.state.show))
    setTimeout(() => {this.setState({show: false})},5000)  // the text will show in 5s
  }

  render() {
    return (
      <div className="App">
          {/*{other component}*/}
          <button onClick={this.changeShow}>Change</button>
          {this.renderShow()}
      </div>
    );
  }
}

export default App;
