import axios from "axios";

export class NotFlixService {
  static url = "http://localhost:80/";

  static get = path => {
    return axios.get(this.url + path);
  };

  // static post = (path, data) => {
  //     return axios.post(this.url+path, data)
  // }
}
