export const url = {
  weather: (city: string) =>
    `/weather/v3/weather/weatherInfo?city=${city}&key=58ce18dca82ae14e2048c35ea24e8315`,
  highquality: "/api/top/playlist/highquality",
  banner: "/api/banner",
  hotPalyList: "/api/playlist/hot",
  personalized: "/api/personalized",
};
