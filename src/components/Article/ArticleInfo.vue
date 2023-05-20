<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <!-- 这里使用 v-for 渲染三张图片，key 用 i  -->
          <!-- i为索引, item 为数组的项 -->
          <img :src="item" alt="" class="thumb" v-for="(item, i) in cover.images" :key="i" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者：{{ author }} &nbsp;&nbsp; {{ comments }}条评论 &nbsp;&nbsp; 发布日期：{{ pubdate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  data() {
    return {}
  },
  // 自定义属性
  props: {
    // 文章的标题
    title: {
      type: String,
      default: ''
    },
    // 作者名称
    author: {
      type: String,
      default: ''
    },
    // 评论数量
    comments: {
      type: [Number, String], // type 可以指定为一个数组，数组中是所有可能的类型
      default: ''
    },
    // 发布日期
    pubdate: {
      type: String,
      default: ''
    },
    // 图片
    cover: {
      type: Object,
      // 对象或数组默认值必须从一个函数获取
      default: () => {
        return { cover: 0 }
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
