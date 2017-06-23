/**
 * Created by 安校辉 on 2017/6/14.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import './Btn.css';

class Btn extends Component {
    constructor(props){
        super(props);
        this.handelClick=this.handelClick.bind(this)
    }
    handelClick(){
        console.log(this)
    }
    render() {
        return (
            <Button type="danger" onClick={this.handelClick}>Button</Button>


        );
    }
}

export default Btn;