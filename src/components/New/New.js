/**
 * Created by 安校辉 on 2017/6/21.
 */

import React, { Component } from 'react';
import './New.css';
import { Tabs } from 'antd';
import Hotnews from './Hotnews';
import News from './News';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
class New extends Component {
    state = {
        tabPosition: 'top',
    };
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    };
    render(){
        return(
            <div className="box">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="热点要闻" key="1"><Hotnews/></TabPane>
                    <TabPane tab="个性推荐" key="2"><News/></TabPane>
                </Tabs>
            </div>

        );
    }
}
export default New;