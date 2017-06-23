/**
 * Created by 安校辉 on 2017/6/19.
 */
import React, { Component } from 'react';
import './Tab.css';
import Hotnews from "./Hotnews/Hotnews";
import News from "./News/News";

class Tab extends Component {
    constructor(props){
        super(props);
        // this.state={className:"btn3",data:"Tab1",button:"btn1",display:"Tab1"};
        this.state={className:"btn3",data:<Hotnews/>,button:"btn1"}
    };
    handelClick=()=>{
            // this.setState({className:"btn3",data:"Tab1",button:"btn1",display:"Tab1"});
        this.setState({className:"btn3",data:<Hotnews/>,button:"btn1"})
    };
    handelClick2=()=>{
            // this.setState({button:"btn3",data:"Tab2",className:"btn1",display:"Tab3"});
        this.setState({button:"btn3",data:<News/>,className:"btn1"})
    };
    render() {
        return (
            <div className="wrap">
                <div className="btn">
                    <div className={this.state.className} onClick={this.handelClick}>热点要闻</div>
                    <div className="line"></div>
                    <div className={this.state.button} onClick={this.handelClick2}>个性推荐</div>
                </div>
                {this.state.data}
            </div>
        );
    }
}
export default Tab;