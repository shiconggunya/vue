export default{
  //异步操作
  //context:上下文,相当于store对象
  aupdataInfo(context,payload){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        context.commit('updataInfo');
        console.log(payload);
        resolve('1111');
      }, 1000);
    })
  }
}