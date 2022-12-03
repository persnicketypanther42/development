import React, { Component } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './css/reset.css';
import './css/index.css';
import './css/App.css';

class Index extends Component {

  constructor() {
    super();
    this.state = {
      resetKey: 0
    }
  }

  resetApp = () => {
    this.setState({
      resetKey: this.state.resetKey + 1
    })
  }

  render() {
    console.log('re-render')
    return (
      <div id="App">
        <App resetApp={this.resetApp} key={this.state.resetKey}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index root={root}/>
  </React.StrictMode>
);
