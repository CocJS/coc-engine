import COC from './core.js'
export default class $ {
  constructor(dom) {
    if (process.browser) {
      this.domer = typeof dom === 'string' ? document.querySelector(dom) : dom
    }
  }

  addClass(stl) {
    if (!this.domer) return this
    const css = stl.split(' ')
    let i
    for (i = 0; i < css.length; i += 1) this.domer.classList.add(css[i])
    return this
  }

  removeClass(stl) {
    if (!this.domer) return this
    const css = stl.split(' ')
    let i
    for (i = 0; i < css.length; i += 1) this.domer.classList.remove(css[i])
    return this
  }

  hasClass(css) {
    if (!this.domer) return false
    return this.domer.classList.contains(css) !== -1
  }

  focus() {
    this.domer.focus()
    return this
  }

  blur() {
    this.domer.blur()
    return this
  }

  ready(callback) {
    this.domer.addEventListener('ready', callback)
  }

  keyup(callback) {
    this.domer.addEventListener('keyup', callback)
  }

  css(css) {
    Object.keys(css).forEach(i => {
      this.domer.style[i] = css[i]
    })
    return this
  }

  scrollTo() {
    if (!this.domer) {
      console.log('ITS NULL')
      return
    }
    if(process.browser){
window.scrollTo(0, this.domer.offsetTop)
    }
  }
}
