/**
 * Created by 安校辉 on 2017/6/21.
 */
import React, { Component } from 'react';
import './Xw.css';
import China from "./China";
import Word from "./Word";
import Button from "./Button";

class Xw extends Component {
    constructor(props){
        super(props);
        this.state={id:1,className:"btn1"}
    };


    handelClick=(e)=>{
        this.setState({id:e});
        // if(this.state.className=='btn1'){
        //     this.setState({id:e,className:"btn3"})
        // }else{
        //     this.setState({id:e,className:"btn1"})
        // }
    };
    render() {
        return (
            <div className="wrap">
                <Button handleChange={this. handelClick} aaa={this.state.className}/>
                <China id={this.state.id}/>
                <Word id={this.state.id}/>
            </div>
        );
    }
}
export default Xw;