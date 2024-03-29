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

/**
 * el是否包含某个class
 * @param el
 * @param className
 * @return {boolean}
 */
const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * el添加某个class
 * @param el
 * @param className
 */
const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 * el去除某个class
 * @param el
 * @param className
 */
const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

/**
 * 去除html标签
 * @param str
 * @return {*}
 */
const removeHtmltag = str => {
  return str.replace(/<[^>]+>/g, '')
}

/**
 * 找元素的第n级父元素
 * @param ele
 * @param n
 * @return {*}
 */
const parents = (ele, n) => {
  while (ele && n) {
    ele = ele.parentElement ? ele.parentElement : ele.parentNode
    n--
  }
  return ele
}

/**
 * 返回元素的第n个兄弟节点
 * @param ele
 * @param n
 * @return {*}
 */
const sibling = (ele, n) => {
  while (ele && n) {
    if (n > 0) {
      if (ele.nextElementSibling) {
        ele = ele.nextElementSibling
      } else {
        for (ele = ele.nextSibling; ele && ele.nodeType !== 1; ele = ele.nextSibling);
      }
      n--
    } else {
      if (ele.previousElementSibling) {
        ele = ele.previousElementSibling;
      } else {
        for (ele = ele.previousElementSibling; ele && ele.nodeType !== 1; ele = ele.previousElementSibling);
      }
      n++
    }
  }
  return ele
}

/**
 * 获取任一元素的任意属性
 * @param elem
 * @param prop
 * @return {*}
 */
const getStyle = (elem, prop) => {
  return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}

/**
 * el是否在视口范围内
 * @param el
 * @param partiallyVisible
 * @return {boolean}
 */
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

/**
 * 去除空格
 * @param str
 * @param type
 * @return {*}
 */
const trim = (str, type = 1) => {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "")
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "")
    case 3:
      return str.replace(/(^\s*)/g, "")
    case 4:
      return str.replace(/(\s*$)/g, "")
    default:
      return str
  }
}

/**
 * 格式化金额
 * @param num
 * @return {string}
 */
const formatMoney = (num) => {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 格式化单位
 * @param num
 * @param digits
 * @return {string}
 */
const formatUnit = (num, digits) => {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 第一个字母大写
 * @param string
 * @return {string}
 */
const uppercaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 格式化时间
 * @param time
 * @return {*}
 */
const timeAgo = (time) => {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * 将属性混合到目标对象中
 * @param to
 * @param _from
 * @return {*}
 */
const extend = (to, _from) => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * 将一个对象数组合并到一个对象中
 * @param arr
 * @return {{}}
 */
const toObject = (arr) => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

/**
 * 将输入值转换为数字以保持持久性, 如果转换失败，返回原始字符串
 * @param val
 * @return {*|number}
 */
const toNumber = val => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * 获取url参数
 * @param name
 * @return {*}
 */
const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.location.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}

/**
 * 获取滚动的坐标
 * @param el
 * @return {{x: (number|number), y: (number|number)}}
 */
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

/**
 * 滚动到顶部
 */
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

/**
 * 随机数范围
 * @param min
 * @param max
 * @return {null|number}
 */
const random = (min, max) => {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null
  }
}

/**
 * 最大值
 * @param arr
 * @return {number}
 */
const max = (arr) => {
  return Math.max.apply(null, arr)
}

/**
 * 最小值
 * @param arr
 * @return {number}
 */
const min = (arr) => {
  return Math.min.apply(null, arr)
}

/**
 * 确保一个函数只被调用一次
 * @param fn
 * @return {(function(): void)|*}
 */
const once = fn => {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

/**
 * 解析简单路径
 * @param path
 * @return {function(*): *}
 */
const parsePath = path => {
  const bailRE = /[^\w.$]/
  if (bailRE.test(path)) {
    return
  }
  var sements = path.split('.')
  return function (obj) {
    for (let i = 0; i < sements.length; i++) {
      if (!obj) {
        return
      }

      obj = obj[sements[i]]
    }
    return obj
  }
}

/**
 * 生成当前日期向前推7天的时间
 * @return {*[]}
 */
const generateWeekly = () => {
  let week = []
  // 得到当前的时间戳
  const timestamp = Date.now()
  // 循环获得当前时间向前推7天的时间戳
  Array.from(new Array(7)).map((_, i) => {
    const weekTimestamp = new Date(timestamp - i * 24 * 60 * 60 * 1000)
    // 整成自己需要的样式
    const date = String(weekTimestamp.getMonth() + 1) + '.' + String(new Date(weekTimestamp).getDate())
    // 倒序插入
    week.unshift(date)
  })
  return week
}

/**
 * 解析字符串的风格
 * @param cssText
 * @return {{}}
 */
const listDelimiterRE = /;(?![^(]*\))/g
const propertyDelimiterRE = /:(.+)/
const parseStringStyle = (cssText) => {
  const ret = {}
  cssText.split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE)
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return ret
}

/**
 * 连接符转为驼峰 hello-world => helloWorld
 * @param str
 * @return {*}
 */
const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

/**
 * 首字母大写 hello => Hello
 * @param str
 * @return {string}
 */
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 去除连接符 o-h => oh
 * @param str
 * @return {string}
 */
const hyphenate = (str) => {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

const mobileNumberSplit = (mobile, symbol) => {
  return mobile.replace(/(?<=\d)(?=(\d{4})+(?!\d))/g, symbol)
}

/**
 * 动态引入js
 * @param src
 */
const injectScript = (src) => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = src
  const t = document.getElementsByTagName('srcipt')[0]
  t.parentNode.insertBefore(s, t)
}

/**
 * 是否为闰年
 * @param year
 * @return {boolean}
 */
const isLeapYear = (year) => {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
}

/**
 * 获取精准类型
 * @param obj
 * @return {string}
 */
const toRawType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * 返回undefined或者null类型
 * @param v
 * @return {boolean}
 */
const isUndef = (v) => {
  return v === undefined || v === null
}

/**
 * 返回非undefined和null类型
 * @param v
 * @return {boolean}
 */
const isDef = (v) => {
  return v !== undefined && v !== null
}

/**
 * 验证是否为真
 * @param v
 * @return {boolean}
 */
const isTrue = (v) => {
  return v === true
}

/**
 * 验证是否为假
 * @param v
 * @return {boolean}
 */
const isFalse = (v) => {
  return v === false
}

/**
 * 验证是否是对象类型
 * @param obj
 * @return {boolean}
 */
const isObject = (obj) => {
  return obj !== null && typeof obj === 'object'
}

/**
 * 检查对象是否具有该属性
 * @type {(v: PropertyKey) => boolean}
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (obj, key) => {
  return hasOwnProperty.call(boj, key)
}

/**
 * 检查值是否是有效的数组索引
 * @param val
 * @return {boolean}
 */
const isValidArrayIndex = val => {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * 是否为promise类型
 * @param val
 * @return {*|boolean}
 */
const isPromise = val => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * 验证手机号
 * @param val
 * @return {boolean}
 */
const isMobile = val => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(val)
}

/**
 * 验证身份证
 * @param val
 * @return {boolean}
 */
const isIdentity = val => {
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  return reg.test(val)
}

/**
 * 验证国内车牌
 * @param val
 * @return {boolean}
 */
const isLicense = val => {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return reg.test(val)
}

/**
 * 验证邮箱
 * @param val
 * @return {boolean}
 */
const isEmail = val => {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return reg.test(val)
}

/**
 * 验证电话号码
 * @param val
 * @return {boolean}
 */
const isPhone = val => {
  const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
  return reg.test(val)
}

/**
 * 验证url
 * @param val
 * @return {boolean}
 */
const isUrl = val => {
  const reg = /^http[s]?:\/\/.*/
  return reg.test(val)
}

/**
 * 验证是否为移动端
 * @return {boolean}
 */
const isDeviceMobile = () => {
  const ua = navigator.userAgent.toLowerCase()
  const reg = /android|webos|iphone|ipod|blackberry/
  return reg.test(ua)
}

/**
 * 检测ios设备类型
 * @return {string|boolean}
 */
const isIos = () => {
  const u = navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
    return 'Android'
  } else if (u.indexOf('iPhone') > -1) { // 苹果手机
    return 'ios'
  } else if (u.indexOf('iPad') > -1) { // ipad
    return 'ipad'
  } else if (u.indexOf('Windows Phone') > -1) { // winphone手机
    return 'winphone'
  } else {
    return false
  }
}

/**
 * 是否为pc端
 * @return {boolean}
 */
const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"]
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 检测密码强度
 * @param str
 * @return {number}
 */
const checkPwd = str => {
  let lv = 0
  if (str.length < 6) {
    return lv
  }
  if (/[0-9]/.test(str)) {
    lv++
  }
  if (/[a-z]/.test(str)) {
    lv++
  }
  if (/[A-Z]/.test(str)) {
    lv++
  }
  if (/[\.|-|_]/.test(str)) {
    lv++
  }
  return lv
}

/**
 * 检测值是否不为Undefined和Null或者为空
 * @param value
 * @return {boolean}
 */
const includeBooleanAttr = value => {
  return !!value || value === ''
}

/**
 * 验证是一个数字是不是回文数
 * @param x
 * @returns {boolean}
 */
const isPalindrome = x => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}

/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
  return s.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0)
}

/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return ''
  }
  let ans = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for(; j < ans.length && j < strs[i].length; j++) {
      if(ans[j] != strs[i][j]) {
        break
      }
    }
    ans = ans.substring(0, j)
    if(ans === '') {
      return ans
    }
  }
  return ans
}

/**
 * 冒泡排序
 * @param arr
 * @return {*}
 */
const bubbleSort = arr => {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

/**
 * 选择排序
 * @param arr
 * @return {*}
 */
const selectedSort = arr => {
  const len = arr.length
  let min, temp
  for (let i = 0; i < len - 1; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

/**
 * 插入排序
 * @param arr
 * @return {*}
 */
const insertionSort = arr => {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

/**
 * 归并排序
 * @param left
 * @param right
 * @return {*[]}
 */
const merge = (left, right) => {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

const mergeSort = arr => { // 采用自上而下的递归方法
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

// 快速排序
class QuickSort {
  constructor() {}
  // 分区操作
  partition(arr, left, right) {
    let pivot = left, index = pivot + 1 // 设定基准值（pivot）
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        this.swap(arr, i, index)
        index++
      }
    }
    this.swap(arr, pivot, index - 1)
    return index - 1
  }
  // 交换
  swap (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // 排序
  sort(arr, left = 0, right = arr.length - 1) {
    let partitionIndex
    if (left < right) {
      partitionIndex = this.partition(arr, left, right)
      this.sort(arr, left, partitionIndex - 1)
      this.sort(arr, partitionIndex + 1, right)
    }
    return arr
  }
}

// 堆排序
class HeapSort {
  constructor() {
    this.len = 0
  }
  // 建立大数据堆
  buildMaxHeap(arr) {
    this.len = arr.length
    for (let i = Math.floor(this.len/2); i >= 0; i--) {
      this.heapify(arr, i)
    }
  }
  // 堆整理
  heapify(arr, i) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let largest = i
    if (left < this.len && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < this.len && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest != i) {
      this.swap(arr, i, largest)
      this.heapify(arr, largest)
    }
  }
  // 交换
  swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // 排序
  sort(arr) {
    this.buildMaxHeap(arr)
    for (let i = arr.length - 1; i > 0; i--) {
      this.swap(arr, 0, i)
      this.len--
      this.heapify(arr, 0)
    }
    return arr
  }
}

// 计数排序
const countingSort = (arr, maxValue) => {
  let bucket = new Array(maxValue + 1)
  let index = 0
  const len = arr.length
  const bucketLen = maxValue + 1

  for (var i = 0; i < len; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (var j = 0; j < bucketLen; j++) {
    while(bucket[j] > 0) {
      arr[index++] = j
      bucket[j]--
    }
  }

  return arr
}

// 希尔排序
const shellSort = arr => {
  const len = arr.length
  let temp, gap = 1, j = 0

  while (gap < len / 3) { // 动态定义间隔序列
    gap = gap * 3 + 1
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]
      for (j = i - gap; j >= 0 && arr[j]> temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }

  return arr
}

/**
 * 匹配有效的括号
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stk = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  }
  return !stk.length
}

/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let fast = 1,
    slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  const n = nums.length
  let left = 0
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }
  return left
}

/**
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const n = nums.length
  let left = 0,
    right = n - 1,
    ans = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

/**
 * 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let index = s.length - 1
  while (s[index] === ' ') {
    index--
  }
  let wordLength = 0
  while (index >= 0 && s[index] !== ' ') {
    wordLength++
    index--
  }
  return wordLength
}

/**
 * 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let ans = ''
  let ca = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ca
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    ans += sum % 2
    ca = Math.floor(sum / 2)
  }
  ans += ca == 1 ? ca : ''
  return ans.split('').reverse().join('')
}

/**
 * x的平方根
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let left = 0
  let right = x / 2 + 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)

    if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid === x) {
      left = mid + 1
    }
  }
  return left - 1
}

/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let p = 0,
    q = 0,
    r = 1
  for (let i = 1; i <= n; ++i) {
    p = q
    q = r
    r = p + q
  }
  return r
}

/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const occ = new Set()
  const n = s.length
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}

/**
 * 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = arr.length
  return len % 2 ? arr[Math.floor(len / 2)] : (arr[len / 2] + arr[len / 2 - 1]) / 2
}

/**
 * 获取资源后缀
 * @param {string} url
 * @return {string}
 */
const getFileExtension = (url) => {
  if (typeof url !== 'string') {
    return ''
  }
  return url.substring(url.lastIndexOf('.') + 1)
}

/**
 * 使用正则表达式实现一下需求: 筛选出数组中只包含大小写字母的字符串, 并将结果转换成大写
 * @param {Array} arr
 * @returns
 */
const filteredArr = (arr) => {
  return arr.filter((item) => /^[a-zA-Z]+$/.test(item)).map((item) => item.toUpperCase())
}

/**
 * 根据运算优先级添加括号
 * @param {*} expression
 * @returns {string}
 */
const addBrackets = (expression) => {
  const resultArr = []
  // 定义运算符
  const symbolArr = ['+', '-', '*', '/']
  // 定义高优先级运算符
  const highLevelSymbolArr = ['*', '/']
  // 判断某个字符串是否是运算符
  const isSymbolFn = (str) => symbolArr.includes(str)
  // 判断某个字符串是否是高优先级运算符
  const isHighLevelSymbolFn = (str) => highLevelSymbolArr.includes(str)
  // 输入表达式的长度
  const expLen = expression.length
  // 标记当前的遍历是否处于高优先级运算符范围
  let isInBracket = false
  // 记录临时值
  let currentNum = ''
  for (let i = 0; i < expLen; i++) {
    const isSymbol = isSymbolFn(expression[i])
    const isHighLevelSymbol = isSymbol && isHighLevelSymbolFn(expression[i])
    // 处理当前字符是运算符的场景
    if (isSymbol) {
      // 处理当前字符是高优先级运算符
      if (isHighLevelSymbol) {
        // 如果当前没有被标记为高优先运算符，就在前面加个括号
        if (!isInBracket) {
          currentNum = '(' + currentNum
        }
        // 修改标记状态
        isInBracket = true
        currentNum += expression[i]
      } else {
        // 普通运算符
        if (isInBracket) {
          // 如果之前已经在高优先级运算符范围，就需要标记结束
          resultArr.push(currentNum + ')')
          isInBracket = false
        } else {
          resultArr.push(currentNum)
        }
        resultArr.push(expression[i])
        currentNum = ''
      }
    } else {
      // 如果是数字, 就直接进行记录
      currentNum = currentNum + expression[i]
    }
  }
  if (currentNum) {
    resultArr.push(currentNum + (isInBracket ? ')' : ''))
  }
  return resultArr.join('')
}

/**
 * 浅拷贝
 * @param {object} obj
 * @returns {{}}
 */
const shallowClone = (obj) => {
  const newObj = {}
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }
  return newObj
}

/**
 * 深拷贝
 * @param {object}  obj
 * @param {*} hash
 * @returns {RegExp|*|Date}
 */
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null) return obj // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj)
  let cloneObj = new obj.constructor()
  // 找到的是所属类原型上的constructor, 而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}

/**
 * 阿拉伯数字转中文数字
 * @param num
 * @returns {string}
 * @constructor
 */
function NoToChinese(num) {
  if (/^\d*(\.\d*)?$/.test(num)) {
    return 'Number is wrong!'
  }
  const AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九')
  const BB = new Array('', '十', '百', '千', '万', '亿', '点', '')
  let a = ('' + num).replace(/(^0*)/g, '').split('.'),
    k = 0,
    re = ''
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}\\d{' + (a[0].length - i - 1) + '}$').test(a[0])) re = BB[4] + re
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }
  if (a.length > 1) {
    //加上小数部分(如果有小数部分)
    re += BB[6]
    for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]
  }
  return re
}

/**
 * 实现jsonp
 * @param url
 * @param params
 * @param callbackName
 * @returns {Promise<unknown>}
 */
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = ''
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`
      }
    }
    dataSrc += `callback=${callbackName}`
    return `${url}?${dataSrc}`
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = generateUrl()
    document.body.appendChild(scriptEle)
    window[callbackName] = (data) => {
      resolve(data)
      document.removeChild(scriptEle)
    }
  })
}

/**
 * 节流
 * @param fn
 * @param delay
 * @returns {(function(): void)|*}
 */
const throttled = (fn, delay) => {
  let timer = null
  let starttime = Date.now()
  return function () {
    let curTime = Date.now() // 当前时间
    let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      starttime = Date.now()
    } else {
      timer = setTimeout(fn, remaining);
    }
  }
}

/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {(function(): void)|*}
 */
const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout) // timeout 不为null
    if (immediate) {
      let callNow = !timeout // 第一次会立即执行，以后只有事件执行后才会再次触发
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * 生成数组
 * @param n
 * @returns {number[]}
 */
const createArr = (n) => Array.from(new Array(n), (v, i) => i)

/**
 * 打乱数组
 * @param list
 * @returns {*}
 */
const randomSort = list => list.sort(() => Math.random() - 0.5)

/**
 * 数组唯一值去重
 * @param list
 * @returns {*[]}
 */
const duplicateById = list => [...list.reduce((prev, cur) => prev.set(cur.id, cur), new Map()).values()]

/**
 * 多数组取交集
 * @param list
 * @returns {*[]}
 */
const duplicateById = list => [...list.reduce((prev, cur) => prev.set(cur.id, cur), new Map()).values()]

/**
 * 查找最大值索引
 * @param arr
 * @returns {*}
 */
const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)

/**
 * 查找最小索引
 * @param arr
 * @returns {*}
 */
const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)

/**
 * 找到最接近的数值
 * @param arr
 * @param n
 * @returns {*}
 */
const closest = (arr, n) => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))

/**
 * 压缩多个数组
 * @param arr
 * @returns {*[][]}
 */
const zip = (...arr) => Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) => arr.map((a) => a[i]))

/**
 * 矩阵交换行和列
 * @param matrix
 * @returns {*}
 */
const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]))

/**
 * 回到顶部
 * @param element
 */
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })

/**
 * 回到底部
 * @param element
 */
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: 'smooth', block: 'end' })

/**
 * 截断数字非四舍五入
 * @param n
 * @param fixed
 * @returns {string}
 */
const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\d+(?:.\d{0,${fixed}})?`))[0]

/**
 * 截断数字并四舍五入
 * @param n
 * @param decimals
 * @returns {number}
 */
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

/**
 * 删除无效的属性
 * @param obj
 * @returns {{}|*}
 */
const removeNullUndefined = (obj) => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {})

/**
 * 反转对象键值
 * @param obj
 * @returns {{[p: number]: *}}
 */
const invert = (obj) => Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {})

/**
 * 字符串转对象
 * @param str
 * @returns {any}
 */
const strParse = (str) => JSON.parse(str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/\'/g, "\""))

/**
 * 比较两个对象
 * @param objects
 * @returns {this is *[]}
 */
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

/**
 * 获取随机颜色
 * @returns {`#${string}`}
 */
const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

/**
 * 颜色格式转换
 * @param hex
 * @returns {number[]}
 */
const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map((x) => parseInt(x, 16))

/**
 * 获取随机ip
 * @returns {string}
 */
const randomIp = () =>
  Array(4)
    .fill(0)
    .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
    .join('.')

/**
 * 生成uuid
 * @param a
 * @returns {string|*}
 */
const uuid = (a) => (a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid))
