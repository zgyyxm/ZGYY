/**
 * Created by 安校辉 on 2017/6/19.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import './Show.css';

class Show extends Component {
    constructor(props){
        super(props);
        this.state={data:"p"};

    };
    handelClick=()=>{
        // if(this.state.data=='p'){
        //     this.setState({data:"pp"});
        // }else {
        //     this.setState({data:"p"});
        // }
        this.state.data=='p'?this.setState({data:"pp"}):this.setState({data:"p"});
    };
    render() {
        return (
            <div>
                <Button type="danger" onClick={this.handelClick}>Button</Button>
                <p className={this.state.data}>安校辉</p>
            </div>
        );
    }
}

export default Show;