<template>
    <div class="nav-bar">
      <div class="left">  <slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    /*height: 44px;*/
    line-height: 44px;
    box-shadow: 0 1px 1px navajowhite;
  }
  .left,.right{
    width: 60px;
    /*background-color: #926e6e;*/
  }
  /*其他设置好宽度后，设置flex为1会自动填充剩余部分*/
  .center{
    flex: 1;
    /*background-color: #0000FF;*/
    text-align: center;
  }
</style>
