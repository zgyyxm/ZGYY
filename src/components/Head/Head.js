/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';
import Userlink  from './Userlink';
import Userimg  from './Userimg';
class Head extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                <Userimg username={this.props.username}/>
                <Userlink username={this.props.username}/>
            </div>
        )
    }
}
Head.defaultProps={username:"null"};
export default Head;