# 0x01. ES6 Promises

## Resources
# Read or watch:

- [Promise](https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ)
- [JavaScript Promise: An introduction](https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q)
- [Await](https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow)
- [Async](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g)
- [Throw / Try](https://intranet.alxswe.com/rltoken/UTjDgvKk5l892Xslh0vqcQ)

# Learning Objectives
# At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Setup
# Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: npm install --save-dev jest
- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
- Install ESLint using: npm install --save-dev eslint
## Files
# package.json
Click to show/hide file contents
# babel.config.js
Click to show/hide file contents
# utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

Click to show/hide file contents
# .eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json

# Response Data Format
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}

## Tasks
# 0. Keep every promise you make and only make promises you can keep
 
- Return a Promise using this prototype function getResponseFromAPI()
# 1. Don't make a promise...if you know you can't keep it
- Using the prototype below, return a promise. The parameter is a boolean.
# 2. Catch me if you can!
- Using the function prototype below

function handleResponseFromAPI(promise)
# 3. Handle multiple successful promise
- In this file, import uploadPhoto and createUser from utils.js

- Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

# 4. Simple promise
- Using the following prototype

function signUpUser(firstName, lastName) {
}
# 5. Reject the promises
- Write and export a function named uploadPhoto. It should accept one argument fileName (string).

- The function should return a Promise rejecting with an Error and the string $fileName cannot be processed
# 6. Handle multiple promises
- Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
# 7. Load balancer
- Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).
# 8. Throw error / try catch
- Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).
# 9. Throw an error
- Write a function named guardrail that will accept one argument mathFunction (Function).


# AUTHOR
- Simanga Mchunu
