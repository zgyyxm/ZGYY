/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';

class Userimg extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                <img src={"http://692060.ichengyun.net/avatar/"+this.props.username+'.jpg'} alt=""/>
            </div>
        )
    }
}

export default Userimg;