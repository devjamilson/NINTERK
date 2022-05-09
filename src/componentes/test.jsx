import React, {Component} from "react";
import './style/test.css'

class App extends React.Component {
    state = {
      showBox: false
    };
  
    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  
    render() {
      return (
        <div
          onMouseEnter={this.handleBoxToggle}
          className={`container${this.state.showBox ? " show" : ""}`}
        >
          <div className="wrapper">
            <div className="innerBox" />
          </div>
        </div>
      );
    }
  }


export default App;