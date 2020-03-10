<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/TabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    'main-tab-bar':MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
