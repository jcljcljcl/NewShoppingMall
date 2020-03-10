import axios from "axios";
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh',
    timeout:5000
  })

  //设置拦截器
  //请求拦截
  instance.interceptors.request.use((config)=>{
    //请求成功
    console.log(config);
    //拦截下来，对config中的某种信息变换在给服务器发回去，在请求过程中调节动画，登录网络请求需要携带token，先拦截下来处理
    //需要返回，要不组件接收不到
    return config
  },err=>{
    //请求失败
    console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use((res)=>{
    //响应成功
    console.log(res);
    return res.data
  },err=>{
    //响应失败
    console.log(err);
  })
  //instance(config)本身就是一个Promise
  return instance(config)
}
