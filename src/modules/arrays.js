import COC from './core.js'
export default class Arrays {
  constructor(arr) {
    if (typeof arr !== 'object') {
      COC.DevWarn({
        component: 'COC Arrays Class',
        message: 'You must initialize the class with an array.'
      })
      delete this
      return
    }
    this.val = arr && arr !== null ? arr : []
  }

  // Getters
  get get() {
    return this.val
  }
  get Sorted() {
    return new Arrays(
      this.Length > 50 ? COC.QuickSort(this.val) : COC.SelectionSort(this.val)
    )
  }

  get Length() {
    return this.val.length
  }

  get Last() {
    return this.Length > 0 ? this.val[this.val.length - 1] : false
  }
  // Voids

  Split(...args) {
    const chunks = args[0]
    const t = this.val
    let i
    const temp = []
    let rem
    let pumb
    rem = this.Length
        const round = Math.max(1, parseInt(rem / chunks)); // eslint-disable-line
    for (i = 0; i < chunks; i += 1) {
      pumb = Math.min(round, rem)
      if (pumb > 0) {
        temp[i] = t.splice(0, i === chunks - 1 ? rem : pumb)
        rem -= round
      } else {
        temp[i] = []
      }
    }
    this.val = temp
  }

  Merge(...args) {
    this.val = this.val.concat(args[0])
    return this
  }

  Sort() {
    this.val =
      this.Length > 50 ? COC.QuickSort(this.val) : COC.SelectionSort(this.val)
    return this
  }

  Desc() {
    this.val = this.Sort.get.reverse()
    return this
  }

  Clear() {
    this.val = []
    return this
  }

  Push(...args) {
    this.val.push(args[0])
    return this
  }

  QuickSort() {
    this.val = COC.QuickSort(this.val)
    return this
  }

  SelectionSort() {
    this.val = COC.SelectionSort(this.val)
    return this
  }

  // Methods
  GetIndex(val) {
    return COC.GetIndex(this.get, val)
  }

  Search(...args) {
    return COC.BinarySearch(this.Sorted.get, args[0])
  }

  FindAll(...args) {
    const result = []
    let i
    for (i = 0; i < this.Length; i += 1) {
      if (this.val[i] === args[0]) result.push(i)
    }
    return new COC.Arrays(result)
  }

  Includes(...args) {
    return COC.ArrayIncludes(this.val, args[0])
  }

  Pluck(...args) {
    if (!this.val) {
      return new Arrays([])
    }
    return new Arrays(COC.FilterArrayOfObjects(this.val, args[0]))
  }

  Reverse() {
    const temp = []
    const l = this.Length
    let i
    for (i = 0; i < l; i += 1) temp[i] = this.val[l - i - 1]
    this.val = temp
    return this
  }
}
