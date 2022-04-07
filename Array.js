'use strict'

/**
 * 从数组中删除项
 * @param arr
 * @param item
 * @return {T[]}
 */
const remove = (arr, item) => {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * 将类似数组的对象转换为实际数组
 * @param list
 * @param start
 * @return {any[]}
 */
const toArray = (list, start = 0) => {
  let i = list.length - start
  let ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

/**
 * Es6数组去重
 * @param arr
 * @return {any[]}
 */
const unique = arr => {
  return [...new Set(arr)]
}

/**
 * 求两个数组的交集
 * @param arr1
 * @param arr2
 * @return {*[]}
 */
const alone = (arr1, arr2) => {
  return unique(arr1).filter(item => arr2.includes(item))
}

/**
 * 删除数组中的假值
 * @param arr
 * @return {*}
 */
const trueArr = arr => {
  return arr.filter(true)
}

/**
 * 洗牌算法随机
 * @param arr
 * @return {*[]}
 */
const shuffle = arr => {
  let result = [], random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}

/**
 * 数组求和
 * @param arr
 * @return {*}
 */
const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0)
}

/**
 * 数组求平均值
 * @param arr
 * @return {number}
 */
const average = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}
