<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item replace icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
