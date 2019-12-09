import React from "react"
import { Layout } from "antd"
import { withTranslation } from 'react-i18next';

const { Content } = Layout;

const _Content = ({t}) => {
  return (
    <Content>
      {t("欢迎来到react")}
      <br/>
    </Content>
  )
};

export default withTranslation()(_Content)