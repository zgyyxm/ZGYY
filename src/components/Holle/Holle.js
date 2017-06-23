/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';

class Holle extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
               <p>安校辉 {this.props.name}</p>
            </div>
        )
    }
}

export default Holle;