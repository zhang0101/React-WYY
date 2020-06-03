import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./index.less";

interface Iprops {
  changeSlide?: any;
}

class MyCarousel extends React.Component<Iprops> {
  changeSlides = (val: "prev" | "next") => {
    this.props.changeSlide(val);
  };
  render() {
    return (
      <div className="my_carousel">
        <LeftOutlined
          className="icons"
          onClick={this.changeSlides.bind(this, "prev")}
        />
        <div className="wraps">{this.props.children}</div>
        <RightOutlined
          className="icons"
          onClick={this.changeSlides.bind(this, "next")}
        />
      </div>
    );
  }
}

export default MyCarousel;
