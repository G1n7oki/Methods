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
