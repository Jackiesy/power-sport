import React from "react"
import { Layout,ConfigProvider } from "antd"
import { withTranslation } from 'react-i18next';
import zhCN from 'antd/es/locale/zh_CN';
import "./App.scss"
import './static/tran'

const { Sider,Content,Header } = Layout;

const App = ({t}) => {

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={'app'}>
        <Header></Header>
        <Layout>
          <Sider>123</Sider>
          <Content>{t("欢迎来到react")}</Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
};

export default withTranslation()(App)