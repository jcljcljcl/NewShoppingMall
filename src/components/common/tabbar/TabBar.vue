<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display:flex;
    background-color: #928e8e;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -5px 10px red;
  }
</style>
