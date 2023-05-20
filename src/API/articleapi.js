// 和 article 相关的 API 都放在这个模块中 - articleapi.js

// 先导入 request
import request from '@/utils/request.js'

// 按需导出 API 函数，函数名以 API 结尾
export const getArticleListAPI = function(page, limit) {
  // 直接 return 一个 Promise 实例（return new Promise(function(){})）
  return request.get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
