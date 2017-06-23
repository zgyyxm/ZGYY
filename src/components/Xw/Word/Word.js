/**
 * Created by 安校辉 on 2017/6/21.
 */
import React, { Component } from 'react';
class Word extends Component {
    constructor(props){
        super(props)
    }
    showTit=(e)=>{
        if (e=="1"){
            return (
                <div>
                    <ul>
                        <li><a href="#">111111111111111</a></li>
                        <li><a href="#">111111111111111</a></li>
                        <li><a href="#">111111111111111</a></li>
                        <li><a href="#">111111111111111</a></li>
                    </ul>
                </div>
            );
        }
        if (e=="2"){
            return (
                <div>
                    <ul>
                        <li><a href="#">222222222222222</a></li>
                        <li><a href="#">222222222222222</a></li>
                        <li><a href="#">222222222222222</a></li>
                        <li><a href="#">222222222222222</a></li>
                    </ul>
                </div>
            );
        }
    };
    render(){
        return(
            <div>
                {this.showTit(this.props.id)}
            </div>
        )
    }
}

export default Word;