'use strict'

// 获取精准类型
const toRawType = (obj) => {
  return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 返回undefined或者null类型
const isUndef = (v) => {
  return v === undefined || v === null
}


// 返回非undefined和null类型
const isDef = (v) => {
  return v !== undefined && v !== null
}

// 验证是否为真
const isTrue = (v) => {
  return v === true
}

// 验证是否为假
const isFalse = (v) => {
  return v === false
}

// 验证是否是对象类型
const isObject = (v) => {
  return obj !== null && typeof obj === 'object'
}

// 将属性混合到目标对象中
const extend = (to, _from) => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

// 将一个对象数组合并到一个对象中
const toObject = (arr) => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

// 检查对象是否具有该属性
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (obj, key) => {
  return hasOwnProperty.call(boj, key)
}

// 从数组中删除项
const remove = (arr, item) => {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 检查值是否是有效的数组索引
const isValidArrayIndex = val => {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

const isPromise = val => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

// 将输入值转换为数字以保持持久性, 如果转换失败，返回原始字符串
const toNumber = val => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

// 将类似数组的对象转换为实际数组
const toArray = (list, start = 0) => {
  let i = list.length - start
  let ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

// 验证手机号
const isMobile = val => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(val)
}

// 验证国内车牌
const isLicense = val => {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return reg.test(val)
}

// 验证邮箱
const isEmial = val => {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return reg.test(val)
}

// 验证电话号码
const isPhone = val => {
  const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
  return reg.test(val)
}

// 验证url
const isUrl = val => {
  const reg = /^http[s]?:\/\/.*/
  return reg.test(val)
}

// 验证是否为移动端
const isDeviceMobile = () => {
  const ua = navigator.userAgent.toLowerCase()
  const reg = /android|webos|iphone|ipod|blackberry/
  return reg.test(ua)
}

// 检测ios设备类型
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

// 是否为pc端
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

// 去除html标签
const removeHtmltag = str => {
  return str.replace(/<[^>]+>/g, '')
}

// 获取url参数
const getQueryString = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.localtion.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}

// el是否包含某个class
const hasClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// el添加某个class
const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// el去除某个class
const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

// 获取滚动的坐标
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 随机数范围
const random = (min, max) => {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * ((max + 1) - min))
  } else {
    return null
  }
}

// 最大值
const max = arr => {
  return Math.max.apply(null, arr)
}

// 最小值
const min = arr => {
  return Math.min.apply(null, arr)
}

// 去除空格
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

// 检测密码强度
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

// 确保一个函数只被调用一次
const once = fn => {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

// 解析简单路径
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