<template>
  <div id="app">
    {{result}}
    <h2>--------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data(){
    return {
      result:'',
    }
  },
  components:{
    HelloWorld
  },
  created() {
    axios({
      url:'http://123.207.32.32:8000/home/multidata',

    }).then(res =>{
      // console.log(res);
      this.result = res
    })
  },
}
</script>

<style>

</style>
