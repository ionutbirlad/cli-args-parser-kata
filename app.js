const kParse = (program) => {
  const optionValues = program.opts()

  const allOptions = Object.keys(optionValues)
  const selectedOptions = []

  for (var i = 0; i < allOptions.length; i++) {
    program[allOptions[i]] && selectedOptions.push(allOptions[i])
  }

  selectedOptions.sort()

  const result = new Result(optionValues, selectedOptions)
  return result.createResult()
}

function Result (inputOne, inputTwo) {
  this.inputs = inputOne
  this.chiavi = inputTwo
}

Result.prototype.createResult = function () {
  const res = {}
  for (var i = 0; i < this.chiavi.length; i++) {
    if (this.chiavi[i] === 'bar' && this.inputs[this.chiavi[i]].length > 3) {
      const spliced = this.inputs[this.chiavi[i]].split(' ')
      this.inputs[this.chiavi[i]] = spliced
    }

    this.chiavi[i] === 'number' ? res[this.chiavi[i]] = parseInt(this.inputs[this.chiavi[i]]) : res[this.chiavi[i]] = this.inputs[this.chiavi[i]]
  }
  return res
}

module.exports = {
  kParse
}
