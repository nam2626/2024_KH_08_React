import axios from "axios";

//baseURL, timeout 등 기본 설정을 가진 Axios 인스턴스
const apiAxios = axios.create({
  baseURL: "http://localhost:9999",
  headers: {
    "Content-Type": "application/json",
  },
});
//요청 인터셉터 추가
apiAxios.interceptors.request.use(
  (config) => {
    //요청 전처리 부분
    console.log(config.method.toUpperCase(), ' - '. config.url);
    return config;
  },
  (error) => {
    //요청에 에러가 발생했을때 처리부분
    console.log(error)
    return Promise.reject(error);
  }
);

//응답 인터셉터 추가
apiAxios.interceptors.response.use(
  (response) => {
    //응답 전처리 부분
    console.log(response.config.method.toUpperCase(), ' - '. response.config.url);
    return response;
  },
  (error) => {  
    //응답에 에러가 발생했을때 처리부분
    console.log(error)
    return Promise.reject(error);
  }
)
export default apiAxios;