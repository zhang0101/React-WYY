import React from "react";
import { Layout, Spin } from "antd";
import Header from "./components/header";
import Footer from "./components/footer";
import { connect } from "react-redux";
import { StateType } from "./store";

const { Sider, Content } = Layout;
class Admin extends React.Component<any> {
  state = {
    collapsed: false,
  };

  render() {
    const { menuOpen, loading } = this.props;
    return (
      <Spin spinning={Boolean(loading)}>
        <Layout>
          <Header></Header>
          <Content>{this.props.children}</Content>
          <Footer></Footer>
        </Layout>
      </Spin>
    );
  }
}
export default connect((state: StateType) => state)(Admin);
