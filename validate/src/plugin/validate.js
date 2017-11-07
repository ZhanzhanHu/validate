let install = function (Vue, options = {}) {
  Vue.mixin({
    data() {
      let validate = this.$options.validate
      if (validate) {
        for (let [key, value] of Object.entries(validate)) {
          validate[key] = { ...value,
            pass: false
          }
        }
      }
      return {
        validateParams: {
          allPass: false,
          ...validate
        }
      }
    },
    methods: {
      validate(paramName) {
        for (let [key, value] of Object.entries(this.validateParams[paramName])) {
          let rule = rules[key]
          if (rule) {
            let result = rule(this[paramName], value)
            this.validateParams[paramName].pass = result
            if (!result) {
              break
            }
          }
        }
        for (let [key, value] of Object.entries(this.validateParams)) {
          if (value.hasOwnProperty('pass')) {
            let result = value.pass
            this.validateParams.allPass = result
            if (!result) {
              break;
            }
          }
        }
      },
    },
  })

  let rules = {
    ...options.rules || {},
    require: function require(str, value) {
      if (value == true) {
        if (str.length == 0) {
          return false
        } else if ((/\s/.test(str))) {
          return false
        } else {
          return true
        }
      }
    },
    strMaxLength: function strLengthMax(str, value) {
      if (str.length <= value) {
        return true
      } else {
        return false
      }
    },
    strMinLength: function strLengthMin(str, value) {
      if (str.length >= value) {
        return true
      } else {
        return false
      }
    },
    isString: function isString(str, value) {
      let regex = /^[A-Za-z]*$/
      return regex.test(str)
    },
    isNumber: function isNumber(str, value) {
      let regex = /^[0-9]*$/
      return regex.test(str)
    },
    greaterThan: function greaterThan(str, value) {
      if (str >= value) {
        return true
      } else {
        return false
      }
    },
    lessThan: function lessThan(str, value) {
      if (str <= value) {
        return true
      } else {
        return false
      }
    },
    custom: function custom(str, value) {
      if (value.test(str)) {
        return true
      } else {
        return false
      }
    }
  }
}
export default {
  install
}
