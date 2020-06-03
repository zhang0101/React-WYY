import React from "react";
import { Menu, Dropdown, Typography, Button } from "antd";
import "./index.less";
import { connect } from "react-redux";
import { switchMenuFn } from "@/store/action";
import { StateType } from "@/store";
import { withRouter, RouteComponentProps } from "react-router-dom";
const { Item } = Menu;
const { Title } = Typography;
interface HeaderStateType {
  menu: { label: string; path: string }[];
}
interface Iprops extends StateType, RouteComponentProps {}

class Header extends React.Component<Iprops, HeaderStateType, any> {
  state = {
    menu: [
      {
        label: "发现",
        path: "/home",
      },
      {
        label: "歌单",
        path: "/sheet",
      },
    ],
  };
  componentWillMount() {}
  goLink = (item: { label: string; path: string }): void => {
    this.props.history.push(item.path);
  };

  menuList = () => {
    return this.state.menu.map((item) => (
      <Item key={item.path} onClick={this.goLink.bind(this, item)}>
        {item.label}
      </Item>
    ));
  };

  render() {
    return (
      <div className="header_bar">
        <div className="wrap">
          <div className="left">
            <Typography>
              <Title level={1}>Music</Title>
            </Typography>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
            >
              {this.menuList()}
            </Menu>
          </div>
          <div className="right">
            <Button type="primary">登录</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (state: StateType) => state,
  switchMenuFn,
)(withRouter(Header));
