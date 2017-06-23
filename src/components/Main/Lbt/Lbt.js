/**
 * Created by 安校辉 on 2017/6/22.
 */
import React,{Component}from'react';
import { Carousel } from 'antd';
import bannar from './Img/4f0691cfe48c8f74fe413c7b92391ff4.jpg';
import bannar2 from './Img/54b7e0916b1dd6b73f70bec444de86f2.jpg';
import bannar3 from './Img/ac77a946706c680ac33c4a5036e3d810.jpg';
import bannar4 from './Img/e4fc097f53c7e77cdd6a767cbf14ab5b.jpg';
import './Lbt.css'
class Lbt extends Component {
    render(){
        return(
            <div className="Lb">
                <Carousel autoplay>
                    <div><img src={bannar} alt=""/></div>
                    <div><img src={bannar2} alt=""/></div>
                    <div><img src={bannar3} alt=""/></div>
                    <div><img src={bannar4} alt=""/></div>
                </Carousel>
            </div>
        )
    }
}

export default Lbt;