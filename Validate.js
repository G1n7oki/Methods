'use strict'

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
