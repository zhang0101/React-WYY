import axios from "axios";
import { Observable } from "rxjs";
import { Modal } from "antd";
import { loading } from "@/store/action";
import { store } from "..";
import { url } from "./url";
interface axiosType {
  url: string;
}

axios.create({
  timeout: 1000 * 30,
  //   baseURL: "",
  withCredentials: true,
});
axios.interceptors.request.use(
  (config: any): any => {
    return config;
  },
  (err: any) => {
    return err;
  },
);

axios.interceptors.response.use(
  (res: any): any => {
    return res.data;
  },
  (err: any) => {
    return err;
  },
);

class Axios {
  static loadingFn(isShow: boolean, num: number) {
    if (isShow) {
      store.dispatch(loading(num));
    }
  }
  static get(options: axiosType, isShowLoading = true) {
    this.loadingFn(isShowLoading, 1);
    return new Observable((obe) => {
      axios
        .get(options.url)
        .then((res: any) => {
          this.loadingFn(isShowLoading, -1);
          if (res.code === 200) {
            obe.next(res);
          } else {
            Modal.error({
              title: "提示",
              content: res.message,
            });
            obe.error(res.lives);
          }
        })
        .catch((err) => {
          Modal.error({
            title: "提示",
            content: "请求失败",
          });
          this.loadingFn(isShowLoading, -1);
          obe.error(err.lives);
        });
    });
  }
}
export { Axios, url };
