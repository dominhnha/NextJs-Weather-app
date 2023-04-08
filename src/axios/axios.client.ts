import axios,{AxiosResponse } from "axios"

export const get = async(url:string): Promise<any> =>{
    const response:AxiosResponse<any> = await axios.get(url);
    return response.data;
}