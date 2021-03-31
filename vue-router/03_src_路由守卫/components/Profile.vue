<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{$route.query}}</p>
    <p>你的名字:{{$route.query.name}}</p>
  </div>
</template>

<script>
export default {
  name:'Profile',
}
</script>

<style>

</style>