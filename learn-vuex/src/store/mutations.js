import {INCREMENT} from './mutations-types';
export default {
  //修改状态的方法(默认参数:state)
  [INCREMENT](state){
    state.counter++;
  },
  decrement(state){
    state.counter--;
  },
  incrementCount(state,payload){
    console.log(payload);
    state.counter +=payload.count;
    
  },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updataInfo(state){
    state.info.name = 'coderwhy';
    // Vue.set(state.info,'address','洛杉矶')//添加属性
    // Vue.delete(state.info,'age'); //删除属性
  } 
}