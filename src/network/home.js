import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  })
}
// 请求流行types=pop&page=1，新款，热销数据
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
