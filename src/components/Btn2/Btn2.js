/**
 * Created by haixia on 2017/6/20.
 */
import React,{Component}from'react';
import logo3 from './Img/logo-9.gif';
import './Btn2.css';
import { Button } from 'antd';
import Block from './Block';
import None from './None';

class Btn extends Component{
    constructor(props){
        super(props);
        this.state={
            displayOne:<Block/>,
            wire:"bottomLine",
            wireLeft:"btnleft",
            id:1
        };
    }
    handOne=()=>{
        // alert(1)
        this.setState(
            {
                wire:"bottomLine",
                wireLeft:"btnleft",
                displayOne:<Block/>,
                id:1
            }
        )
    };
    handTwo=()=>{
        // alert(1)
        this.setState(
            {
                displayOne:<None/>,
                wire:"btnleft",
                wireLeft:"bottomLine",
                id:2
            }
        )
    };

    render(){
        return(
            <div className="main">
                <div className="mainTop">
                    <div className={this.state.wire} onClick={this.handOne}> 热点要闻</div>
                    <div className={this.state.wireLeft} onClick={this.handTwo}>个性推荐</div>
                    <img className="img" src={logo3} alt=""/>
                </div>
                <Block id={this.state.id}/>
            </div>
        );
    }
}
export default Btn;