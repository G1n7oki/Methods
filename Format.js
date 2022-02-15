'use strict'

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
