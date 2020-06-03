import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import MenuConfig from "@/config/menuConfig";
import "./index.less";
import { connect } from "react-redux";
import { StateType } from "@/store";

const { SubMenu, Item } = Menu;

interface DateType {
  title: string;
  key: string;
  icon: any;
  children?: DateType[];
}

class NavLeft extends React.Component<StateType> {
  state = {
    menuTreeNode: "",
    renderLogo: "",
  };
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode,
    });
  }
  // 菜单渲染
  renderMenu = (data: DateType[]) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            title={item.title}
            key={item.key}
            icon={React.createElement(item.icon)}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Item
          title={item.title}
          key={item.key}
          icon={React.createElement(item.icon)}
        >
          <NavLink to={item.key} activeClassName="nav_active">
            {item.title}
          </NavLink>
        </Item>
      );
    });
  };
  render() {
    return (
      <div className="nav">
        <NavLink className="nav_logo" to="/">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt=""
          />
          {!this.props.menuOpen ? <div className="name">管理后台</div> : ""}
        </NavLink>
        <Menu theme="dark" defaultSelectedKeys={["/home"]}>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default connect((state: StateType) => state)(NavLeft);
