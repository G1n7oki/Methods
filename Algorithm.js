'use strict'

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
