<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar title="黑马头条" :fixed="true" />
    <!-- <h4>222</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>111</h4>
    <h4>666</h4> -->

    <!-- 导入，注册，并使用 ArticleInfo 组件 - 用来封装单个文章项的  -->
    <p>{{ artlist.length }}</p>
    <!-- 实现下拉刷新  -->
    <!-- 当没有更多 - finished 为 true 时 - 禁用下拉刷新 - 当 finished 为 false 时， 不禁用下拉刷新， 所以 disabled 的值和 finished 的值一致。   -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <!-- 使用 van-list 实现上拉加载  -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in artlist" :key="item.aut_id" :title="item.title" :author="item.aut_name" :comments="item.commm_count" :pubdate="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>

    <!-- 使用 v-for 生成 -->
  </div>
</template>

<script>
import { getArticleListAPI } from '@/API/articleapi'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
import { Toast } from 'vant'
export default {
  name: 'Home',
  data() {
    return {
      page: 1, // 页码值
      limit: 10, // 每页显示多少条数据
      artlist: [], // 用来接收请求返回的 res 数组
      loading: true, // 初始化为 true , 因为不想刚进页面时加载第二页的数据
      finished: false,
      isLoading: false
    }
  },
  components: {
    ArticleInfo
  },
  created() {
    // this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // console.log(res)
      // this.artlist = res
      // 通过判断 isRefresh 来判断是上拉加载还是下拉刷新
      if (isRefresh) {
        // 下拉刷新 - 新数据在前
        this.artlist = [...res, ...this.artlist]
      } else {
        // 上拉加载 - 新数据在后 - 使用ES6的剩余参数运算符
        this.artlist = [...this.artlist, ...res]
        // 上拉加载得到数据后，把 loading 改为 false
        this.loading = false
      }

      // 注意记得写 finished 为 true 的条件
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      // 页码值加1，请求页面数据
      this.page++
      this.initArticleList() // 未传参数，则 isRefresh 为 undefined
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功')
        this.page++
        this.initArticleList(true) // 传了参数，为true
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  /deep/.van-nav-bar__title {
    line-height: 46px;
  }
}
</style>
