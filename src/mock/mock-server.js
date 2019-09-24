import Mock from 'mockjs'
import data from './data.json'
// 使用mock
Mock.mock('/goods', {
  jp: 0,
  data: data.goods
})
Mock.mock('/ratings', {
  jp: 0,
  data: data.ratings
})
Mock.mock('/info', {
  jp: 0,
  data: data.info
})