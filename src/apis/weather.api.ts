import axios from "axios";
import weatherEndPoint from "./weather.endpoints";


interface WeatherApi {
  weatherCityName: (cityName: string, lang?: string) => Promise<any>;
  weatherCityId: (id: number, lang?: string) => Promise<any>;
  weatherIcon: (icon: string) => string;
}

const weatherApi: WeatherApi = {
  weatherCityName: async (cityName: string, lang: string = "vi") =>
    await axios.get(weatherEndPoint.weatherCityName({ cityName, lang })).then((res) => res.data),
  weatherCityId: async (id: number, lang: string = "vi") =>
    await axios.get(weatherEndPoint.weatherCityId({ id, lang })).then((res) => res.data),
  weatherIcon: (icon: string) => weatherEndPoint.weatherIcons({ icon }),
};

export default weatherApi;

