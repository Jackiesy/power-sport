import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Typography } from 'antd';
const { Title } = Typography;
import Lang from '@/components/SelectLang';
import './index.scss';
import { inject, observer } from "mobx-react";
import { userStore } from "@/store/index";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            loading:false
        }
        this.handleSubmit = e => {
            this.setState({ loading: false });
            e.preventDefault();

            this.props.form.validateFields(async (err, values) => {

                if(!err){
                     await userStore.login(values);
                    if(userStore.authorization){
                            this.props.history.replace("/");
                    }
                }

            });
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const direction = { flexDirection: 'column' };
        return (
            <Row
                type="flex"
                align="middle"
                justify="center"
                style={direction}
                className="login-wrap"
            >
                <Title>{this.t('user-login.title')}</Title>
                <Lang className="lang" />
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: this.t(
                                        'user-login.userName.required'
                                    )
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder={this.t(
                                    'user-login.login.userName'
                                )}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: this.t(
                                        'user-login.password.required'
                                    )
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type="password"
                                placeholder={this.t(
                                    'user-login.login.password'
                                )}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>{this.t('user-login.remember')}</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">
                            Forgot password
                        </a> */}
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={this.state.loading}
                        >
                            {this.t('user-login.login.login')}
                        </Button>
                        {/* Or <a href="">register now!</a>  */}
                    </Form.Item>
                </Form>
            </Row>
        );
    }
}

//const LoginForm = Form.create({ name: 'login' })(Login);

//export default LoginForm;
export default Form.create()(inject("userStore")(observer(Login)));