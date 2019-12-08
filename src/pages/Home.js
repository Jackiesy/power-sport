import React from "react"
import { Layout } from "antd"
import Header from "../components/Header/Header"
import Sider from "../components/Sider/Sider"
import Content from "../components/Content/Content"

const Home = () => {
  return (
    <Layout className={'app'}>
      <Header/>
      <Layout>
        <Sider/>
        <Content/>
      </Layout>
    </Layout>
  )
};

export default Home