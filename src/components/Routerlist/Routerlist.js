/**
 * Created by 安校辉 on 2017/6/22.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Head from '../Head';
import Tab from '../Tab';
import Btn2 from '../Btn2';
import Dad from '../Dad';

const One=()=>(
    <div>
        <Head username="tom"/>
    </div>
);
const Two=()=>(
    <div>
        <Dad/>
        <Tab/>
    </div>
);
const Three=()=>(
    <div>
        <Btn2/>
    </div>
);

class Routerlist extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/two">第二页</Link>
                    <Link to="/three">第三页</Link>
                    <Route exact path="/" component={One}/>
                    <Route  path="/two" component={Two}/>
                    <Route  path="/three" component={Three}/>
                </div>
            </Router>
        )
    }
}

export default Routerlist;