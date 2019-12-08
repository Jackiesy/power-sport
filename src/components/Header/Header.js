import React from "react"
import { Layout,Select } from "antd"

const { Header } = Layout;
const { Option } = Select;


const _Header = () => {
  return (
    <Header>
      <Select defaultValue={'en'}>
        <Option value="en">en</Option>
        <Option value="cn">cn</Option>
      </Select>
    </Header>
  )
};

export default _Header