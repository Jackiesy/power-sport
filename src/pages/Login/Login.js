import React ,{Component}from "react"
import { Button, Form, Input, Modal } from "antd";
import './Login.scss'
import BaseApi from "../../api/BaseApi";
class Login extends Component{
  constructor(){
    super();
    this.state={
      loading: false,
    }
  }
  eventSubmit (e) {
    const { form } = this.props;
    e.preventDefault();
    form.validateFields ((err, values) => {
      this.
      console.log(values)
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="login_page">
        <div className="login_flex">
          <div className="from">
            <Form onSubmit={this.eventSubmit.bind(this)} className="login_form">
              <div className="userimg">
                <span>欢迎登录</span>
              </div>
              <Form.Item>
                {getFieldDecorator("userName", {
                  rules: [{ required: true, message: "请输入您的用户名" }]
                })(
                  <Input
                    size="large"
                    placeholder="请输入用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("passWord", {
                  rules: [{ required: true, message: "请输入密码" }]
                })(
                  <Input
                    size="large"
                    type= "password"
                    placeholder="输入密码"
                  />
                )}
              </Form.Item>
              <div className="smsCode">
                <div id="code" className="nc-container" />
              </div>
              <Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="spin"
                  loading={this.state.loading}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)