# cli-args-parser-kata_Ionut_Birlad_solution

This Command Line Application takes a series of input provided by the user and then produces a valid output according to the following specification.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First of all make sure you have Node.js installed. If note just go to https://nodejs.org/en/ and get it.

### Installing

If the previuos prerequisite is satisfied run


```
npm install
```

And NPM will install all dependecies according to the package.json file

```
{
  "name": "cli-args-parser-kata",
  "version": "1.0.0",
  "description": "A CLI arguments parser",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ionut Birlad",
  "license": "MIT",
  "dependencies": {
    "commander": "^5.1.0"
  }
}
```

Now you're ready to run the application

## Running the tests

Now you can run all test from your terminal according to the following guide

### parse a simple flags

digit the following input:

```
--foo
```

and the program will produce a JSON object as follows:

```
{"foo": true}
```

### parse a composite flags

digit the following input:

```
--foo bar
```

and the program will produce a JSON object as follows:

```
{"foo": "bar"}
```

### parse a composite flags with integer values

digit the following input:

```
--number 1
```

and the program will produce a JSON object as follows:

```
{"number": 1}
```

### parse multiple flags at once

digit the following input:

```
--foo --bar baz --number 1
```

and the program will produce a JSON object as follows:

```
{"bar": "baz", "foo": true, "number": 1}
```

## Built With

* [Commander.js](https://github.com/tj/commander.js/) - The library used to create the customized commands

## Authors

* **Ionut Birlad** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Credits to [Ivo Putzer](https://github.com/ivoputzer) for the original idea.
