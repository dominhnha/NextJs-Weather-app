import weatherConfig from "./weather.config";

interface WeatherEndpointParams {
  cityName?: string;
  id?: number;
  lang?: string;
  icon?: string;
}

interface WeatherEndpoint {
  weatherCityName: (params: WeatherEndpointParams) => string;
  weatherCityId: (params: WeatherEndpointParams) => string;
  weatherIcons: (params: WeatherEndpointParams) => string;
}

const weatherEndPoint: WeatherEndpoint = {
  weatherCityName: ({ cityName, lang }: WeatherEndpointParams) =>
    weatherConfig.getUrl(`data/2.5/weather?q=${cityName}&lang=${lang}`, {}),
  weatherCityId: ({ id, lang }: WeatherEndpointParams) =>
    weatherConfig.getUrl(`data/2.5/weather?id=${id}&lang=${lang}`, {}),
  weatherIcons: ({ icon }: WeatherEndpointParams) =>
    `${weatherConfig.baseUrl}/img/w/${icon}.png`,
};

export default weatherEndPoint;