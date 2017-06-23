/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';

class Child extends Component {
    render(){
        return(
            <div>
              <button onClick={this.props.handleChange}>点击</button>
                <div>{this.props.data.name}</div>
            </div>
        );
    }
}
export default Child;