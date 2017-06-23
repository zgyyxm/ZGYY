/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';

class Userlink extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                {this.props.username}
            </div>
        )
    }
}

export default Userlink;