import React from "react"
import { ConfigProvider } from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter } from "react-router-dom";
import { Route, Switch } from 'react-router';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import "./App.scss"
import './static/tran'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  )
};

export default App