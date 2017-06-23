/**
 * Created by 安校辉 on 2017/6/21.
 */
import React, { Component } from 'react';

class China extends Component {
    constructor(props){
        super(props)
    }
    showTit=(e)=>{
        if (e=="1"){
            return "国内新闻";
        }
        if (e=="2"){
            return "国际新闻";
        }
    };
    render(){
        return(
            <div>
                <h1>{this.showTit(this.props.id)}</h1>
            </div>
        )
    }
}

export default China;