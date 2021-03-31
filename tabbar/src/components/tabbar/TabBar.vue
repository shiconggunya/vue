<template>
    <div id="tab-bar">
      <slot>

      </slot>
    </div>
</template>

<script>
export default {
  name: "TabBar",

};
</script>

<style>
#tab-bar {
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

</style>