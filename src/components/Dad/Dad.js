/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';
import Child from './Child';
class Dad extends Component {
    constructor(props){
        super(props);
        this.state={childData:{name:"david"}};
    }
    click=()=>{
    this.setState({childData:{name:"tom"}})
    };
    render(){
        return(
            <div>
               <Child data={this.state.childData} handleChange={this.click}/>
            </div>
        )
    }
}

export default Dad;