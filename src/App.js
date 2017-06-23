import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        alert(this);
        this.state = {data:"变"};
        console.log(this.state);
    };
    componentWillMount=()=>{
        alert("即将创建组件");
        console.log(this.state);
    };
    componentDidMount=()=>{
        alert("渲染完成");
        console.log(this.state);
    };
    handelClick=()=>{
        alert(1);

        this.setState({data:"变玩"});

    };
    componentWillUpdate=()=>{
        alert("更新组件");
        console.log(this.state);
    };
    componentDidUpdate=()=>{
        alert("更新组件完成");
        console.log(this.state);
    };


  render() {
    return (
      <div className="App" onClick={this.handelClick}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.data}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
