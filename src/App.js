import React from "react"
import { ConfigProvider } from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter } from "react-router-dom";
import { Route, Switch,Redirect } from 'react-router';
import Home from "./pages/Home";
import "./App.scss"
import './static/tran'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} render={() => <Redirect to="/cn" />} />
          <Route exact={true} path="/cn" component={Home} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  )
};

export default App