/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';
import  logo1 from './Img/logo_03.gif';
import  logo2 from './Img/logo_06.gif';
import  logo3 from './Img/logo_08.gif';
import './News.css';
class News extends Component {
    render(){
        return(
            <div>
                <div className="Tab2">
                    <ul className="Ul2">
                        <li><div className="Img"><img src={logo1} alt="图片"/></div><p>八旬老人骑车晕倒交警跪地人工呼吸20 分钟累瘫</p>
                            <p className="font"><a>网易要闻</a></p></li>
                        <li><div className="Img"><img src={logo2} alt="图片"/></div><p>刘强东说五年后送货的都是机器人，看看618背后的另一场战争:物流|图说</p></li>
                        <li><div className="Img"><img src={logo3} alt="图片"/></div><p>影响1.2亿人的大事!7月1日起,你想炒股可能会被“拒绝”</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default News;