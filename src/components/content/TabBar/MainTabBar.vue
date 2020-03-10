<template>
  <tab-bar>
    <tab-bar-item path="/home" messageColor="">
<!--      Dom使用别名加上~-->
      <img slot="item_icon" src="../../../assets/img/tabbar/home.svg" alt="">
<!--      <img slot="icon" src="assets/img/tabbar/home.svg" alt="">-->
      <img slot="item_click_icon" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item_message">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/menu" messageColor="">
      <img slot="item_icon" src="../../../assets/img/tabbar/category.svg" alt="">
      <img slot="item_click_icon" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item_message">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopping" messageColor="">
      <img slot="item_icon" src="../../../assets/img/tabbar/cart.svg" alt="">
      <img slot="item_click_icon" src="../../../assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item_message">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/help" messageColor="">
      <img slot="item_icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item_click_icon" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item_message">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  // import TabBar from 'components/common/tabbar/TabBar'
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'
  // import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      'tab-bar':TabBar,
      'tab-bar-item':TabBarItem
    }
  }
</script>

<style scoped>

</style>
