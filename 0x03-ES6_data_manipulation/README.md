# 0x03. ES6 data manipulation

# Resources
Read or watch:

- [Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)
- [Typed Array](https://intranet.alxswe.com/rltoken/BQ5bjKk8Q2YrpwVl0gZpXQ)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw)
- [WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

# Setup
- Install NodeJS 12.11.x
(in your home directory):

- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
- Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: npm install --save-dev jest
- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
- Install ESLint using: npm install --save-dev eslint
## Configuration files
# package.json
- Click to show/hide file contents
# babel.config.js
- Click to show/hide file contents
# .eslintrc.js
Click to show/hide file contents
and…
- Don’t forget to run $ npm install when you have the package.json

# Tasks
# 0. Basic list of objects
- Create a function named getListStudents that returns an array of objects.

- Each object should have three attributes: id (Number), firstName (String), and location (String).
# 1. More mapping
- Create a function getListStudentIds that returns an array of ids from a list of object.
# 2. Filter
- Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

- It should accept a list of students (from getListStudents) and a city (string) as parameters.
# 3. Reduce
- Create a function getStudentIdsSum that returns the sum of all the student ids.

- It should accept a list of students (from getListStudents) as a parameter.
# 4. Combine
- Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

- It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.
# 5. Typed Arrays
- Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

- It should accept three arguments: length (Number), position (Number), and value (Number).
# 6. Set data structure
- Create a function named setFromArray that returns a Set from an array.

- It accepts an argument (Array, of any kind of element).
# 7. More set data structure
- Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

- It accepts two arguments: a set (Set) and an array (Array).
# 8. Clean set
- Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

- It accepts two arguments: a set (Set) and a startString (String).

- When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.
# 9. Map data structure
- Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):
# 10. More map data structure
- Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.

- It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.


# AUTHOR
- Simanga Mchunu
