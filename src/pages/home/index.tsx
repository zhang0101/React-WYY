import React from "react";
import "./index.less";
import { connect } from "react-redux";
import { StateType } from "@/store";
import { loadingFn } from "@/store/action";
import { Axios, url } from "@/axios";
import MyCarousel from "@/components/my-carousel";
import { Carousel, Typography } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import SimpleSheet from "@/components/simpleSheet";

const { Title } = Typography;

interface HomeStateType {
  banners: {
    picUrl: "string";
    targetId: "string";
    targetType: "string";
    url: "string";
  }[];
  hotTags: {
    id: number;
    userId: number;
    name: string;
    picUrl: string;
    coverImgUrl: string;
    playCount: number;
    tags: string[];
    createTime: number;
    creator: { nickname: string; avatarUrl: string };
    description: string;
    subscribedCount: number;
    shareCount: number;
    commentCount: number;
    subscribed: boolean;
    trackCount: number;
  }[];
  songSheetList: {
    id: number;
    userId: number;
    name: string;
    picUrl: string;
    coverImgUrl: string;
    playCount: number;
    tags: string[];
    createTime: number;
    creator: { nickname: string; avatarUrl: string };
    description: string;
    subscribedCount: number;
    shareCount: number;
    commentCount: number;
    subscribed: boolean;
    trackCount: number;
  }[];
}

interface HomePropsType extends StateType {
  //   changeSlide?: any;
}

class Home extends React.Component<HomePropsType, HomeStateType> {
  constructor(props: HomePropsType) {
    super(props);
    this.getBannerData();
    this.getHotPalyList();
    this.getPersonalized();
  }

  state: HomeStateType = {
    banners: [],
    hotTags: [],
    songSheetList: [],
  };
  componentWillMount() {
    // this.getBannerData();
  }
  getBannerData = () => {
    Axios.get({
      url: url.banner,
    }).subscribe((res: any) => {
      this.setState({
        banners: res.banners,
      });
    });
  };

  getHotPalyList() {
    Axios.get({ url: url.hotPalyList }).subscribe((res: any) => {
      this.setState({
        hotTags: res.tags.slice(0, 5),
      });
    });
  }
  getPersonalized = () => {
    Axios.get({ url: url.personalized }).subscribe((res: any) => {
      this.setState({
        songSheetList: res.result,
      });
    });
  };
  public slider: any;
  changeSlideFn = (el: string) => {
    this.slider[el]();
  };
  render() {
    return (
      <div className="home">
        <MyCarousel changeSlide={(el: string) => this.changeSlideFn(el)}>
          <div style={{ width: "100%" }}>
            <Carousel autoplay ref={(el) => (this.slider = el)} speed={2000}>
              {this.state.banners.map((item) => (
                <div key={item.targetId}>
                  <img src={item.picUrl} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        </MyCarousel>
        <div className="wrap">
          <div className="wrap-content">
            <div className="left">
              <div className="navs">
                <div className="navs_l">
                  <Typography>
                    <Title level={2}>
                      <i></i>
                      <a>热门推荐</a>
                    </Title>
                  </Typography>
                  <div className="navs_tags">
                    {this.state.hotTags.map((item) => (
                      <Link
                        key={item.name}
                        to={{ pathname: "/sheet", search: item.name }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link to="/sheet">
                    更多
                    <ArrowRightOutlined />
                  </Link>
                </div>
              </div>
              <div className="sheetList">
                {this.state.songSheetList.map((item, index) => (
                  <div
                    className={(index + 1) % 4 !== 0 ? "item" : ""}
                    key={item.id}
                  >
                    <SimpleSheet SimpleSheetData={item}></SimpleSheet>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">222</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state: StateType) => state, loadingFn)(Home);
