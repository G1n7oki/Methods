'use strict'

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
