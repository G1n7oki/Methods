'use strict'

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
  const search = window.localtion.search.split('?')[1] || ''
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
