### Hexlet tests and linter status:
[![Actions Status](https://github.com/akivonen/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/akivonen/frontend-project-46/actions)
[![Actions Status](https://github.com/akivonen/frontend-project-46/actions/workflows/tests.yml/badge.svg)](https://github.com/akivonen/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/5074c110b97976b17441/maintainability)](https://codeclimate.com/github/akivonen/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5074c110b97976b17441/test_coverage)](https://codeclimate.com/github/akivonen/frontend-project-46/test_coverage)
### Description
Difference Finder is a program that determines the difference between two data structures. This is a common task for which there are numerous online services, for example, http://www.jsondiff.com/. This mechanism is used when outputting tests or tracking changes in configuration files. In this project I faced the adoption of complex architectural solutions, automated testing, continuous integration, functional programming, and working with tree-like data structures and recursive algorithms.  
### Data Structures and Algorithms
Choosing the proper data structures is one of the keys to a successful architecture and clean code. The convenience of analysis and processing as well as the number and complexity of conditional statements depend on this.
The main question in the project is how to describe the internal representation of the differences between files as simply as possible. And although there are many different ways to do this, only some of them lead to simple code.
### Libraries and frameworks
- commander.js
- Jest
### Utility Features:
- Support for different input formats: YAML, JSON
- Output in plain text, stylish, and JSON format
```
# plain format
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
