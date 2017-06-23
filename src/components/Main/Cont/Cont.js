/**
 * Created by 安校辉 on 2017/6/22.
 */
import React, { Component } from 'react';
import './Cont.css'

class Cont extends Component {

    render(){
        return(
            <div className="cont">
                <div className="odivOne"> </div>
                <div className="odivTwo">
                    <div><img src={require('./Images/home_10.jpg')} alt=""/></div>
                    <h2>领先的国际贸易</h2>
                    <p>国际贸易板块是在承继原中国医药保健品进出口总公司贸易业务的基础上不断发展和壮大的业务板块。</p>
                    <div className="more moreOne">阅读更多</div>
                </div>
                <div className="odivThree">
                    <div><img src={require('./Images/home_03.jpg')} alt=""/></div>
                    <h2>领先的国际贸易</h2>
                    <p>国际贸易板块是在承继原中国医药保健品进出口总公司贸易业务的基础上不断发展和壮大的业务板块。</p>
                    <div className="more moreTwo">阅读更多</div>
                </div>
                <div className="odivFour">
                    <div><img src={require('./Images/home_05.jpg')} alt=""/></div>
                    <h2>领先的国际贸易</h2>
                    <p>国际贸易板块是在承继原中国医药保健品进出口总公司贸易业务的基础上不断发展和壮大的业务板块。</p>
                    <div className="more moreThree">阅读更多</div>
                </div>
                <div className="odivFive">
                    <div><img src={require('./Images/home_07.jpg')} alt=""/></div>
                    <h2>领先的国际贸易</h2>
                    <p>国际贸易板块是在承继原中国医药保健品进出口总公司贸易业务的基础上不断发展和壮大的业务板块。</p>
                    <div className="more moreFour">阅读更多</div>
                </div>
                <div className="odivSix"></div>

            </div>

        )
    }
}

export default Cont;