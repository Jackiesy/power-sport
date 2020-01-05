import React, { Component } from 'react'
import { Radio ,Modal,Form,Input} from "antd"
import  './Home.scss'
import img1 from '../../imgs/100.jpg'
import img2 from '../../imgs/200.jpg'
import img3 from '../../imgs/300.jpg'
import img4 from '../../imgs/301.jpg'
import towPage1 from '../../imgs/twopage1.jpg'
import towPage2 from '../../imgs/twopage2.jpg'
import towPage3 from '../../imgs/twopage3.jpg'
import threePage1 from '../../imgs/threepage1.jpg'
import threePage2 from '../../imgs/threepage2.jpg'
import threePage3 from '../../imgs/threepage3.jpg'
import threePage4 from '../../imgs/threepage4.jpg'

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      value: '',
      towPageValue:'',
      onePage:false,
      towPage:false,
      threePage:true,
      fourPage:false
    }
  }
  onNextStep () {
    if(this.state.value === '') {
      Modal.error({
        content: '请选择您的宅基地面积是多少!',
      });
    }else {
      console.log(11111)
      this.setState({onePage:false,towPage:true})
    }
  }
  onNextTowStep () {
    if(this.state.towPageValue === '') {
      Modal.error({
        content: '请选择您想建几层!',
      });
    }else {
      this.setState({twoPage:false})
    }
  }
  onRadioValue (v) {
    this.setState({value:v.target.value,twoPage:true})
  }
  onRadioTowValue () {
    this.setState({towPageValue:v.target.value})
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='home-wrap'>
        {this.state.onePage &&<div>
        <div className='title-wrap'>
          <p className='title'>您的宅基地适合哪种别墅？</p>
          <div className="subtitle">简单 <b>3</b> <em>步</em>，<b>0</b> 元的报价，在线发效果图</div>
        </div>
        <div className='content-wrap'>
          <p>1.您的宅基地面积是多少？</p>
          <Radio.Group onChange={this.onRadioValue.bind(this)}>
            <div className='radio-wrap'>
              <Radio value={1}><img src={img1} /><p className="radio-p">100㎡内</p></Radio>
              <Radio value={2}><img src={img2} /><p className="radio-p">100㎡-200㎡</p></Radio>
            </div>
            <div className='radio-wrap'>
              <Radio value={3}><img src={img3} /><p className="radio-p">200㎡-300㎡</p></Radio>
              <Radio value={4}><img src={img4} /><p className="radio-p">300㎡以上</p>
              </Radio></div>
          </Radio.Group>
          <div className='btn' onClick={this.onNextStep.bind(this)}>下一步，走起来~</div>
        </div>
     </div>}
        {this.state.towPage && <div>
          <div className='title-wrap'>
            <p className='title'>您的宅基地适合哪种别墅？</p>
            <div className="subtitle">简单 <b>3</b> <em>步</em>，<b>0</b> 元的报价，在线发效果图</div>
          </div>
          <div className='content-wrap'>
            <p>2.您想建几层？</p>
            <Radio.Group onChange={this.onRadioTowValue.bind(this)}>
              <div className='radio-wrap'>
                <Radio value={1}><img src={towPage1} /><p className="radio-p">1层</p></Radio>
                <Radio value={2}><img src={towPage2} /><p className="radio-p">2层</p></Radio>
              </div>
              <div className='radio-wrap'>
                <Radio value={3}><img src={towPage3} /><p className="radio-p">3层</p></Radio>
                <Radio value={4}><img src={towPage4} /><p className="radio-p">3层以上</p>
                </Radio></div>
            </Radio.Group>
            <div className='btn' onClick={this.onNextTowStep.bind(this)}>下一步，走起来~</div>
          </div>
        </div>}
        {this.state.threePage && <div>
          <div className='title-wrap'>
            <p className='title'>您的宅基地适合哪种别墅？</p>
            <div className="subtitle">简单 <b>3</b> <em>步</em>，<b>0</b> 元的报价，在线发效果图</div>
          </div>
          <div className='content-wrap'>
            <p>3.您喜欢的别墅风格...？</p>
            <Radio.Group onChange={this.onRadioTowValue.bind(this)}>
              <div className='radio-wrap'>
                <Radio value={1}><img src={threePage1} /><p className="radio-p">欧式风格</p></Radio>
                <Radio value={2}><img src={threePage2} /><p className="radio-p">中式风格</p></Radio>
              </div>
              <div className='radio-wrap'>
                <Radio value={3}><img src={threePage3} /><p className="radio-p">法式风格</p></Radio>
                <Radio value={4}><img src={threePage4} /><p className="radio-p">海派风格</p>
                </Radio></div>
            </Radio.Group>
            <Form>
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [
                    { required: true, message: '请输入正确的手机号!', whitespace: true },
                    { pattern: /^1[3456789]\d{9}$/, message: "请填写正确的11位手机号" }
                  ],
                })(<Input placeholder="输入号码，匹配的结果将以微信的形式发送给您" />)}
              </Form.Item>
            </Form>
            <div className='btn' onClick={this.onNextTowStep.bind(this)}>3秒获得结果</div>
          </div>
          </div>}
        {this.state.fourPage && <div className='four-wrap'>
          <p>恭喜您</p>
          <p>获取资料成功~</p>
          <p>请保持您的电话畅通</p>
          <p>稍后我们的造家顾问会联系您</p>
          <p>在线免费给您发送别墅资料哦</p>
        </div>}
  </div>
    )
  }

};

export default Form.create()(Home)