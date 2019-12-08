import React from "react"
import { Layout } from "antd"
import { withTranslation } from 'react-i18next';

const { Content } = Layout;

const _Content = ({t}) => {
  return (
    <Content>
      {t("欢迎来到react")}
      <br/>
      {t("黄思瑗是傻x")}
    </Content>
  )
};

export default withTranslation()(_Content)