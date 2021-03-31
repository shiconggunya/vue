<template>
  <div>
    {{result}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'HelloWorld',
  data(){
    return {
      result:''
    }
  },
  created(){
    axios({
      url:'http://123.207.32.32:8000/category',
    }).then(res =>{
      this.result = res;
    })
  }
}
</script>

<style>

</style>