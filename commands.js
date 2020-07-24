#! /usr/bin/env node

const { program } = require('commander')

const {
  kParse
} = require('./app.js')

program
  .option('-f, --foo [item]', 'option')
  .option('-n, --number <item>', 'option')
  .option('-b, --bar <item>', 'option')
  .description('This command will take your input and will produce a valid output according to the original kata documentation (see the readme.md file)')
  .action(() => {
    const result = kParse(program)
    console.log(result)
  })

program.parse(process.argv)
