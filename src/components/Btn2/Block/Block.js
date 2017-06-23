/**
 * Created by haixia on 2017/6/20.
 */
import React, { Component } from 'react';
import './Block.css';
import logo from './Img/logo_03.gif';
import logo1 from './Img/logo_06.gif';
import logo2 from './Img/logo_08.gif';
class Block extends Component{
    constructor(props){
        super(props)
    }
    showTit=(e)=>{
        if (e=="1"){
            return(
                <div className="disOne">
                    <div className="leftcon">
                        <div></div>
                        <div>
                            <h4>十八大以来，习近平心系重大工程</h4>
                            <p>习近平“劝学”“促学” 为国足指明踢法 奋进的五年</p>
                        </div>
                    </div>
                    <div className="leftcon">
                        <div></div>
                        <div>
                            <h4>十八大以来，习近平心系重大工程</h4>
                            <p>习近平“劝学”“促学” 为国足指明踢法 奋进的五年</p>
                        </div>
                    </div>
                    <div className="leftcon">
                        <div></div>
                        <div>
                            <h4>十八大以来，习近平心系重大工程</h4>
                            <p>习近平“劝学”“促学” 为国足指明踢法 奋进的五年</p>
                        </div>
                    </div>
                </div>
            );
        }
        if(e=="2"){
            return(
                <div className="disTwo">
                    <div className="rightcon">
                        <div><img src={logo} alt=""/></div>
                        <div className="fon">八旬老人骑车晕倒交警跪地人工呼吸20 分钟累瘫<p className="tip">网易要闻</p></div>
                    </div>
                    <div className="rightcon">
                        <div><img src={logo1} alt=""/></div>
                        <div>刘强东说五年后送货的都是机器人，看看618背后的另一场战争:物流|图说</div>
                    </div>
                    <div className="rightcon">
                        <div><img src={logo2} alt=""/></div>
                        <div>影响1.2亿人的大事!7月1日起,你想炒股可能会被“拒绝”</div>
                    </div>
                </div>
            );
        }
    };
    render(){
            return(
                <div>{this.showTit(this.props.id)}</div>
            )
    }
}
export default Block;