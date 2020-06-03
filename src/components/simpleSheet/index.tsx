import React, { Component } from "react";
import "./index.less";
import { CustomerServiceOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Paragraph } = Typography;
interface IProps {
  SimpleSheetData: any;
}

class SimpleSheet extends Component<IProps> {
  playSongFn = (item: any) => {
    console.log("查看详情");
  };
  transform = (value: number): number | string => {
    if (value > 10000) {
      return Math.floor(value / 10000) + "万";
    } else {
      return value;
    }
  };
  render() {
    const { SimpleSheetData } = this.props;
    return (
      <a className="simpleSheet">
        <div className="playInfo">
          <img src={SimpleSheetData.picUrl} alt="" />
          <div className="info">
            <span>
              <CustomerServiceOutlined
                style={{ margin: "0 5px" }}
                onClick={this.playSongFn.bind(this, SimpleSheetData)}
              />
              {this.transform(SimpleSheetData.playCount)}
            </span>
            <PlayCircleOutlined style={{ margin: "0 5px" }} />
          </div>
        </div>
        <span className="sheetName">
          <Paragraph ellipsis={{ rows: 2, expandable: false }}>
            {SimpleSheetData.name}
          </Paragraph>
        </span>
      </a>
    );
  }
}
export default SimpleSheet;
