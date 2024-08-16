import React from 'react';
import { Button, Flex, Layout } from 'antd';
import Navbar from './Navbar';
import ContentLayout from './ContentLayout';


const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  // color: '#fff',
  height: '150px',
  paddingInline: 48,
  // lineHeight: '64px',
  // backgroundColor: '#4096ff',
};


const contentStyle = {
  textAlign: 'center',
  // height: '350px',
  margin: '15px 40px',
  // color: '#fff',
  // backgroundColor: '#0958d9',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  minHeight:'100%',
  maxWidth: '100%',
};
const AppLayout = () => (
    <Layout style={layoutStyle}>
        <Navbar/>
      <Content style={contentStyle}>
      <ContentLayout />
    </Content>
    </Layout>
);
export default AppLayout;