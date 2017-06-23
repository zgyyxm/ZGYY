/**
 * Created by 安校辉 on 2017/6/21.
 */
import React, { Component } from 'react';

class Button extends Component {

    render(){
        return(
            <div>
                <button className={this.props.aaa} onClick={(e)=>{this.props.handleChange("1")}}>国内新闻</button>
                <button className={this.props.aaa} onClick={(e)=>{this.props.handleChange("2")}}>国外新闻</button>
            </div>
        )
    }
}

export default Button;