
// methods
  // --------------example method--------------
  const calc = (input1, input2) => {
    return parseInt(input1) + parseInt(input2);
  }
  // --------------example method--------------


  // --------------main method two--------------
  const kParse = (input, program) => {

    let optionValues = input;

    // data mockup
      let allOptions = Object.keys(optionValues);
      let selectedOptions = [];

      // I check wich options are selected
      for (var i = 0; i < allOptions.length; i++) {
        program[allOptions[i]] && selectedOptions.push(allOptions[i]);
      }

      // here I sort the selected options in alphabetical order
      selectedOptions.sort();
    // data mockup

    const result = new Result(optionValues, selectedOptions);
    return result.createResult();

  }
  // --------------main method two--------------
// methods

// ----------------------------CONSTRUCTOR RESULTS----------------------------
  function Result(inputOne, inputTwo) {
    this.inputs = inputOne;
    this.chiavi = inputTwo;
  }
// ----------------------------CONSTRUCTOR RESULTS----------------------------

// ------------------------------RESULTS METHODS------------------------------
  Result.prototype.createResult = function () {
    let res = {};
    for (var i = 0; i < this.chiavi.length; i++) {
      if (this.chiavi[i] == 'bar' && this.inputs[this.chiavi[i]].length > 3) {
        let spliced = this.inputs[this.chiavi[i]].split(" ");
        this.inputs[this.chiavi[i]] = spliced;
      }

      this.chiavi[i] == 'number' ? res[this.chiavi[i]] = parseInt(this.inputs[this.chiavi[i]]) : res[this.chiavi[i]] = this.inputs[this.chiavi[i]];
    }
    return res;
  };
// ------------------------------RESULTS METHODS------------------------------

// here I export the methods that are used in commander.js
  module.exports = {
    calc,
    kParse
  };




// ------------------------------discarded version------------------------------

  // --------------main method one--------------
  // const kParse = (input, inputTwo, inputThree) => {
  //
  //   if ((input) && !(inputTwo, inputThree)) {
  //     return {
  //       foo: input
  //     };
  //   }
  //
  //   if ((inputTwo) && !(input, inputThree)) {
  //     return {
  //       number: inputTwo
  //     };
  //   }
  //
  //   if (input, inputTwo, inputThree) {
  //     return {
  //       bar: inputThree,
  //       foo: input,
  //       number: inputTwo
  //     };
  //   }
  //
  // }
  // --------------main method one--------------
