import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = 'https://leilson-dsdeliver.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_MAPBOX_TOKEN;

export function fetchProducts(){
    return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local:string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);

}

export function saveOrder(payLoad: OrderPayLoad){
    return axios.post(`${API_URL}/orders`,payLoad);
}