import React from "react"
import {ConfigProvider} from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import {HashRouter} from "react-router-dom";
import {Route, Switch} from 'react-router';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Test from "./pages/Test"
import "./App.scss"
import './static/tran'
import {Provider} from "mobx-react";
import * as allStores from "@/store/index";

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Provider {...allStores}>
                <HashRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/login" component={Login}/>
                        <Route exact={true} path="/test" component={Test}/>
                    </Switch>
                </HashRouter>
            </Provider>
        </ConfigProvider>
    )
};

export default App