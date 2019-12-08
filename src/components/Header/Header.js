import React from "react"
import { Layout,Select } from "antd"
import { withTranslation } from 'react-i18next';

const { Header } = Layout;
const { Option } = Select;


const _Header = ({i18n}) => {

  console.log(i18n.language);

  const changeLang = (value) => {
    document.querySelector('html').setAttribute('lang',value);
    localStorage.setItem('lang',value);
    i18n.changeLanguage(value)
  };

  return (
    <Header>
      <Select defaultValue={'en'} onChange={changeLang}>
        <Option value="en">en</Option>
        <Option value="zh-cmn-Hans">zh-cmn-Hans</Option>
        <Option value="jp">jp</Option>
      </Select>
    </Header>
  )
};

export default withTranslation()(_Header)