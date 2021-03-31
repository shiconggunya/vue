import axios from 'axios';
export function request(config){

  const instance =axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000,
    });
  //2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    //3.某些网络请求(比如登录token),必须携带一些信息

    return config //拦截之后要发送出去
  },err =>{
    console.log(err);
  });
  instance.interceptors.response.use(res =>{
    //响应的结果
    return res.data //拦截之后放行
  },err =>{
    //失败的结果
  })

  //3.发送真正的网络请求
  return instance(config);


  // return new Promise ((resolve,reject)=>{
  //   const instance =axios.create({
  //   baseURL:'http://123.207.32.32:8000',
  //   timeout:5000,
  // });
  // instance(config).then(res =>{
  //   resolve(res);
  // }).catch(err=>{
  //   reject(err);
  // })

  // })


  // //1.创建axios实例
  // const instance =axios.create({
  //   baseURL:'http://123.207.32.32:8000',
  //   timeout:5000,
  // });

  // //2.发送真正的网络请求
  // instance(config.baseConfig).then(res =>{
  //   config.success(res);
  // })
  // .catch(err =>{
  //   config.failure(err);
  // })
}