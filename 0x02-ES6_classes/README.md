# 0x02. ES6 classes

## Resources
Read or watch:

- [Classes](https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA)
- [Metaprogramming](https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g)

# Setup
# Install NodeJS 12.11.x
(in your home directory):

- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
## Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: npm install --save-dev jest
- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
- Install ESLint using: npm install --save-dev eslint
## Configuration files
# package.json
Click to show/hide file contents
# babel.config.js
Click to show/hide file contents
# .eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json

# Tasks
# 0. You used to attend a place like this at some point
- Implement a class named ClassRoom:

- Prototype: export default class ClassRoom
- It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
# 1. Let's make some classrooms
- Import the ClassRoom class from 0-classroom.js.

- Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).
# 2. A Course, Getters, and Setters
- Implement a class named HolbertonCourse:
# 3. Methods, static methods, computed methods names..... MONEY
- Implement a class named Currency:
# 4. Pricing
- Import the class Currency from 3-currency.js
# 5. A Building
- Implement a class named Building:
# 6. Inheritance
- Import Building from 5-building.js.

- Implement a class named SkyHighBuilding that extends from Building:
# 7. Airport
- Implement a class named Airport:
# Constructor attributes:
- name (String)
- code (String)
# 8. Primitive - Holberton Class
- Implement a class named HolbertonClass:
# 9. Hoisting
- Fix this code and make it work.
# 10. Vroom
- Implement a class named Car:


# AUTHOR
- Simanga Mchunu
