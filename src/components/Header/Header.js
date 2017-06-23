/**
 * Created by 安校辉 on 2017/6/14.
 */
import React, { Component } from 'react';
import logo from './Img/header.gif';
import more from './Img/ss.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="h">
                <div className="header-center">
                    <div className="header-top">
                        <div className="left">
                            <p>上市公司简称：中国医药</p>
                            <a>证券代码：600056</a>
                        </div>
                        <div className="center">
                            <img src={logo} className="header-logo" alt="logo" />
                        </div>
                        <div className="right">
                            <p>中文 | English</p>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <ul className="nav">
                            <li>首页</li>
                            <li>关于我们</li>
                            <li>新闻动态</li>
                            <li>产业领域</li>
                            <li>投资者关系</li>
                            <li>社会责任</li>
                            <li>人才理念</li>
                            <li><img src={more} className="nav-logo"  alt="更多"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;