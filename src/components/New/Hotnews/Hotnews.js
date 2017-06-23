/**
 * Created by 安校辉 on 2017/6/20.
 */
import React, { Component } from 'react';
import './Hotnews.css';

class Hotnews extends Component {
    render(){
        return(
            <div className="Tab1">
                <ul className="Ul1">
                    <li><div className="SmallDiv"></div><h1 className="first">十八大以来，习近平心系重大工程</h1></li>
                    <li><div className="SmallDiv white"></div><h2>习近平“劝学”“促学” 为国足指明踢法 奋进的五年</h2></li>
                    <li><div className="SmallDiv"></div><h1>李克强为什么提出 “营商环境就是生产力”</h1></li>
                    <li><div className="SmallDiv white"></div><h2>李克强为打通“信息孤岛”定下时间表 俞正生 张高丽 奋进的北京</h2></li>
                    <li><div className="SmallDiv"></div><h1>全国338个城市水环境质量将有排行榜</h1></li>
                    <li><div className="SmallDiv white"></div><h2>每年公布四次 优化地表水监测点位布局 将加强相关数据质控</h2></li>
                </ul>
            </div>
        )
    }
}

export default Hotnews;