import COC from './core.js'
export default class Objects {
	constructor(arr) {
		if (typeof arr !== 'object') {
			COC.DevWarn({
				component: 'COC Arrays Class',
				message: 'You must initialize the class with an array.'
			})
			delete this
			return
		}
		this.val = arr
	}

	// Getters
	get get() {
		return this.val
	}

	get Keys() {
		return Object.keys(this.val)
	}

	// Methods And Voids
	FilterObjects(...args) {
		if (!this.val) {
			return new Arrays([])
		}
		return COC.FilterObjectOfObjects(this.val, args[0])
	}

	Mix(...args) {
		const mixins = args[0]
		Object.keys(mixins).forEach(i => {
			if (this.val[i] !== undefined) {
				if (typeof mixins[i] === 'object') {
					Object.keys(mixins[i]).forEach(j => {
						this.val[i][j] = mixins[i][j]
					})
				} else this.val[i] = mixins[i]
			}
		})
		return this
	}

	MixAndCreate(...args) {
		const mixins = args[0]
		Object.keys(mixins).forEach(i => {
			if (typeof mixins[i] === 'object') {
				Object.keys(mixins[i]).forEach(j => {
					this.val[i][j] = mixins[i][j]
				})
			} else this.val[i] = mixins[i]
		})
		return this
	}
}
