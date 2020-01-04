import React, { Component } from 'react'
import { Radio } from "antd"
import  './Home.scss'
import img1 from '../../imgs/100.jpg'
import img2 from '../../imgs/200.jpg'
import img3 from '../../imgs/300.jpg'
import img4 from '../../imgs/301.jpg'

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
  }
  onNextStep =()=> {
    console.log(this.state)
    // if(this.state.value === '') {
    //   Modal.error({
    //     content: '请选择您的宅基地面积是多少!',
    //   });
    // }
  }
  render () {
    return (
      <div className='home-wrap'>
        <div className='title-wrap'>
          <p className='title'>您的宅基地适合哪种别墅？</p>
          <div className="subtitle">简单 <b>3</b> <em>步</em>，<b>0</b> 元的报价，在线发效果图</div>
        </div>
        <div className='content-wrap'>
          <p>1.您的宅基地面积是多少？</p>
          <Radio.Group >
            <div className='radio-wrap'>
              <Radio value={1}><img src={img1} /><p className="radio-p">100㎡内</p></Radio>
              <Radio value={2}><img src={img2} /><p className="radio-p">100㎡-200㎡</p></Radio>
            </div>
            <div className='radio-wrap'>
              <Radio value={3}><img src={img3} /><p className="radio-p">200㎡-300㎡</p></Radio>
              <Radio value={4}><img src={img4} /><p className="radio-p">300㎡以上</p>
              </Radio></div>
          </Radio.Group>
          <div className='btn' onClick={this.onNextStep}>下一步，走起来~</div>
        </div>
      </div>
    )
  }

};
