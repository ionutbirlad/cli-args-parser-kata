#! /usr/bin/env node

// exporting the global object used by commander
const { program } = require('commander');

// the required file for the exported methods
  const {
    calc,
    kParse
  } = require('./app.js');


// commands
  // program
  // .command('run <input1> <input2>')
  // .alias('r')
  // .description('This command will take your input and will produce a valid output according to the original kata documentation (see the read.me file)')
  // .action((input1, input2) => {
  //   let result = calc(input1, input2);
  //   console.log(`Il tuo risultato è ${result}`);
  // });

  // .action(function () {
  //   let result = {
  //     name: 'Iozzu',
  //     age: 26
  //   };
  //   console.log(result);
  // });


  // ---------------------------------------------------------------------------
  // program
  // .command('run')
  // .option('-f, --foo [item]', 'option')
  // .option('-n, --number <item>', 'option')
  // .option('-b, --bar <item>', 'option')
  // .description('This command will take your input and will produce a valid output according to the original kata documentation (see the read.me file)')
  // .action((item) => {
  //
  //   if ((program.foo) && !(program.number, program.bar)) {
  //     let result = kParse(program.foo);
  //     console.log(result);
  //   }
  //
  //   if ((program.number) && !(program.foo, program.bar)) {
  //     let result = kParse(program.foo, parseInt(program.number));
  //     console.log(result);
  //   }
  //
  //   if (program.foo, program.number, program.bar) {
  //     let result = kParse(program.foo, parseInt(program.number), program.bar);
  //     console.log(result);
  //   }
  //
  // });

  // ---------------------------------------------------------------------------
  program
  // .command('run')
  .option('-f, --foo [item]', 'option')
  .option('-n, --number <item>', 'option')
  .option('-b, --bar <item> [item]', 'option')
  .description('This command will take your input and will produce a valid output according to the original kata documentation (see the readme.md file)')
  .action(() => {

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


    let result = kParse(program.opts(), program);
    console.log(result);

  });
// commands

// processing data
program.parse(process.argv);
