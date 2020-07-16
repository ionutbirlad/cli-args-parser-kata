#! /usr/bin/env node

// exporting the global object used by commander
const { program } = require('commander');

// the required file for the exported methods
  const {
    calc,
    kParse
  } = require('./app.js');


// commands
// -----------------------------------EXAMPLE-----------------------------------
  program
  .command('run <input1> <input2>')
  .alias('r')
  .description('This command will take your input and will produce a valid output according to the original kata documentation (see the read.me file)')
  .action((input1, input2) => {
    let result = calc(input1, input2);
    console.log(`Il tuo risultato è ${result}`);
  });
  // ----------------------------------EXAMPLE----------------------------------

  // -------------------------arguments parser commands-------------------------
  program
  .option('-f, --foo [item]', 'option')
  .option('-n, --number <item>', 'option')
  .option('-b, --bar <item>', 'option')
  .description('This command will take your input and will produce a valid output according to the original kata documentation (see the readme.md file)')
  .action(() => {
    let result = kParse(program.opts(), program);
    console.log(result);
  });
  // -------------------------arguments parser commands-------------------------
// commands

// processing data
program.parse(process.argv);








// ------------------------------discarded version------------------------------

// if ((program.foo) && !(program.number, program.bar)) {
//   let result = kParse(program.foo);
//   console.log(result);
// }
//
// if ((program.number) && !(program.foo, program.bar)) {
//   let result = kParse(program.foo, parseInt(program.number));
//   console.log(result);
// }
//
// if (program.foo, program.number, program.bar) {
//   let result = kParse(program.foo, parseInt(program.number), program.bar);
//   console.log(result);
// }
