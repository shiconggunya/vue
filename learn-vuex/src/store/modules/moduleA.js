export default  { 
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name =payload;
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','wangwu')  //模块里的context只会提交自己模块的mutations
      }, 1000);
    },
  },
  getters:{
    fullname(state){
      return state.name+'1111';
    },
    fullname2(state,getters){
      return getters.fullname+'22222';
    },
    fullname3(state,getters,rootState){
      //state:当前模块的状态, getters:当前模块的getters, rootState:根状态
      return getters.fullname2 + rootState.counter;
    },
  },
}