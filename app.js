
// methods
  // --------------example method--------------
  const calc = (input1, input2) => {
    return parseInt(input1) + parseInt(input2);
  }
  // --------------example method--------------

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

  // --------------main method two--------------
  const kParse = (input, program) => {

    let optionValues = input;
    let allOptions = Object.keys(optionValues);
    let selectedOptions = [];
    
    // I check wich options are selected
    for (var i = 0; i < allOptions.length; i++) {
      if (program[allOptions[i]]) {
        selectedOptions.push(allOptions[i]);
        // delete optionValues.allOptions[i];
      }
    }

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

// ------------------------------METODI RESULTS------------------------------
  Result.prototype.createResult = function () {
    let res = {};
    for (var i = 0; i < this.chiavi.length; i++) {
      res[this.chiavi[i]] = this.inputs[this.chiavi[i]];
    }
    return res;
  };
// ------------------------------METODI RESULTS------------------------------

// here I export the methods that are used in commander.js
  module.exports = {
    calc,
    kParse
  };
