'use strict'

// 获取精准类型
const toType = (obj) => {
    return Object.prototype.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
