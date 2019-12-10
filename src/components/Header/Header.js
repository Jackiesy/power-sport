import React from 'react';
import { Layout, Row, Icon, Button } from 'antd';
import { withTranslation } from 'react-i18next';
import Lang from '@/components/SelectLang';
const { Header } = Layout;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.toggleCollapsed = () => {
            this.setState({
                collapsed: !this.state.collapsed
            });
        };
    }
    render() {
        return (
            <Header>
                <Row type="flex" align="middle" justify="space-between">
                    <Button
                        type="primary"
                        onClick={this.toggleCollapsed}
                        style={{ marginBottom: 16 }}
                    >
                        <Icon
                            type={
                                this.state.collapsed
                                    ? 'menu-unfold'
                                    : 'menu-fold'
                            }
                        />
                    </Button>
                    <Lang style={{ color: '#fff' }} />
                </Row>
            </Header>
        );
    }
}
