'use strict'

/**
 * 获取精准类型
 */
const toRawType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * 返回undefined或者null类型
 */
const isUndef = (v) => {
  return v === undefined || v === null
}


/**
 * 返回非undefined和null类型
 */
const isDef = (v) => {
  return v !== undefined && v !== null
}

/**
 * 验证是否为真
 */
const isTrue = (v) => {
  return v === true
}

/**
 * 验证是否为假
 */
const isFalse = (v) => {
  return v === false
}

/**
 * 验证是否是对象类型
 * @param {object} obj
 */
const isObject = (obj) => {
  return obj !== null && typeof obj === 'object'
}

/**
 * 将属性混合到目标对象中
 * @param {object} to
 * @param {object} _from
 */
const extend = (to, _from) => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * 将一个对象数组合并到一个对象中
 * @param {array} arr
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
 * 检查对象是否具有该属性
 * @param {object} obj
 * @param {number} key
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (obj, key) => {
  return hasOwnProperty.call(boj, key)
}

/**
 * 从数组中删除项
 * @param {array} arr
 * @param {number} item
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
 * 检查值是否是有效的数组索引
 * @param {number} val
 */
const isValidArrayIndex = val => {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * 是否为promise类型
 * @param {string} val
 */
const isPromise = val => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * 将输入值转换为数字以保持持久性, 如果转换失败，返回原始字符串
 * @param {number} val
 */
const toNumber = val => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * 将类似数组的对象转换为实际数组
 * @param {array} list
 * @param {number} start
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
 * 验证手机号
 * @param {string} val
 */
const isMobile = val => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(val)
}

/**
 * 验证身份证
 * @param {string} val
 */
const isIdentity = val => {
	const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
	return reg.test(val)
}

/**
 * 验证国内车牌
 * @param {string} val
 */
const isLicense = val => {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return reg.test(val)
}

/**
 * 验证邮箱
 * @param {string} val
 */
const isEmail = val => {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return reg.test(val)
}

/**
 * 验证电话号码
 * @param {string} val
 */
const isPhone = val => {
  const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
  return reg.test(val)
}

/**
 * 验证url
 * @param {string} val
 */
const isUrl = val => {
  const reg = /^http[s]?:\/\/.*/
  return reg.test(val)
}

/**
 * 验证是否为移动端
 * @param {string} str
 */
const isDeviceMobile = () => {
  const ua = navigator.userAgent.toLowerCase()
  const reg = /android|webos|iphone|ipod|blackberry/
  return reg.test(ua)
}

/**
 * 检测ios设备类型
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
 * @param {string} str
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
 * 去除html标签
 * @param {string} str
 */
const removeHtmltag = str => {
  return str.replace(/<[^>]+>/g, '')
}

/**
 * 获取url参数
 * @param {string} name
 */
const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.localtion.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}

/**
 * el是否包含某个class
 * @param {window} el
 * @param {string} className
 */
const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * el添加某个class
 * @param {window} el
 * @param {string} className
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
 * @param {window} el
 * @param {string} className
 */
const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

/**
 * 获取滚动的坐标
 * @param {window} el
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
 * @param {number} min
 * @param {number} max
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
 * @param {array} arr
 */
const max = (arr) => {
  return Math.max.apply(null, arr)
}

/**
 * 最小值
 * @param {array} arr
 */
const min = (arr) => {
  return Math.min.apply(null, arr)
}

/**
 * 去除空格
 * @param {string} str
 * @param {number} type
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
 * 检测密码强度
 * @param {string} str
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
 * 确保一个函数只被调用一次
 * @param {function} fn
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
 * @param {string} path
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
 * 格式化金额
 * @param {number} num
 */
const formatMoney = (num) => {
	return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 格式化单位
 * @param {string} num
 * @param {number} digits 保留的小数点位数
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
 * @param {string} string
 */
const uppercaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 格式化时间
 * @param {number} time
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
 * 冒泡排序
 * @param {array} arr
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
 * @param {array} arr
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
 * @param {array} arr
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

/**
 * 快速排序
 */
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
