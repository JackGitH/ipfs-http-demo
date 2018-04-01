import React, { Component } from 'react';
import './App.css';

class App extends Component {


      constructor(props) {
          super(props);
          this.state = {
            strHash: null,
            strContent: null
          }
      }

    render() {
      return (
        <div className="App">
          <input
            ref="ipfsContent"
            style={{width: 200,height: 40,borderWidth:2}}/>
          <button onClick={() => {
            let ipfsContent = this.refs.ipfsContent.value;
            console.log(ipfsContent);
          }}>提交到IPFS</button>

          <p>{this.state.strHash}</p>

          <button onClick={() => {
            console.log('从ipfs读取数据。')
           }}>读取数据</button>
           <h1>{this.state.strContent}</h1>
        </div>
      );
    }
}

export default App;
