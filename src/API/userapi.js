// 和  user 相关的 API 放在这个模块 - userapi.js
// 以下皆为演示。

// 先导入 request
import request from '@/utils/request.js'

// 按需导出 API 函数，函数名以 API 结尾
export const getUserInfoAPI = function() {
  // 一定要注意要 return 。return 一个 Promise 实例。
  return request.get('/user')
}
