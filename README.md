# cli-args-parser-kata_Ionut_Birlad_solution

This Command Line Application takes a series of input provided by the user and then produces a valid output according to the following specification.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First of all make sure you have Node.js installed. If note just go to https://nodejs.org/en/ and get it.

NB. If you're running the app on Windows you have to enable the local global scripts by running this command from PowerShell running as administrator
(you can find out more about that at http://tiny.cc/0vfjsz)

```
Set-ExecutionPolicy RemoteSigned
```

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
  "preferGlobal": true,
  "bin": "./commands.js",
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

### 1) parse a simple flags

digit the following input:

```
cli-args-parser-kata --foo
```

and the program will produce a JSON object as follows:

```
{"foo": true}
```

### 2) parse a composite flags

digit the following input:

```
cli-args-parser-kata --foo bar
```

and the program will produce a JSON object as follows:

```
{"foo": "bar"}
```

### 3) parse a composite flags with integer values

digit the following input:

```
cli-args-parser-kata --number 1
```

and the program will produce a JSON object as follows:

```
{"number": 1}
```

### 4) parse multiple flags at once

digit the following input:

```
cli-args-parser-kata --foo --bar baz --number 1
```

and the program will produce a JSON object as follows:

```
{"bar": "baz", "foo": true, "number": 1}
```

### 5) handle multiple values for the same flag

digit the following input:

```
cli-args-parser-kata --foo --bar baz,zab --number 1
```

and the program will produce a JSON object as follows:

```
{"bar": ["baz", "zab"], "foo": true, "number": 1}
```

## Built With

* [Commander.js](https://github.com/tj/commander.js/) - The library used to create the customized commands

## Authors

* **Ionut Birlad** - *Initial work* - [ionutbirlad](https://github.com/ionutbirlad)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Credits to [Ivo Putzer](https://github.com/ivoputzer) for the original idea.
