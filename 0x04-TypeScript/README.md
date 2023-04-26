# 0x04. Typescript

# Resources
Read or watch:

- [TypeScript in 5 minutes](https://intranet.alxswe.com/rltoken/waTSa9Mguj912pel9On57w)
- [TypeScript documentation](https://intranet.alxswe.com/rltoken/iPO8DlHCGzc1jnojLoP9HA)

# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript

# Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code
# Configuration Files
Please use these files for the following tasks

# package.json
Click to show/hide file contents
# .eslintrc.js
Click to show/hide file contents
# tsconfig.json
Click to show/hide file contents
# webpack.config.js
Click to show/hide file contents

# Tasks
# 0. Creating an interface for a student
- Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js
# 1. Let's build a Teacher interface
- Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
# 2. Extending the Teacher class
- Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
# 3. Printing teachers
- Write a function printTeacher:

- It accepts two arguments firstName and lastName
- It returns the first letter of the firstName and the full lastName
- Example: printTeacher("John", "Doe") -> J. Doe
- Write an interface for the function named printTeacherFunction.
# 4. Writing a class
- Write a Class named StudentClass:

- The constructor accepts firstName(string) and lastName(string) arguments
- The class has a method named workOnHomework that return the string Currently working
- The class has a method named displayName. It returns the firstName of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface
# 5. Advanced types Part 1
- Create the DirectorInterface interface with the 3 expected methods:
- Create the TeacherInterface interface with the 3 expected methods:
- Create a class Director that will implement DirectorInterface
- Create a class Teacher that will implement TeacherInterface
- Create a function createEmployee with the following requirements:
# 6. Creating functions specific to employees
- Write a function isDirector:

- it accepts employee as an argument
- it will be used as a type predicate and if the employee is a director
# 7. String literal types
- Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

it takes todayCl
# 8. Ambient Namespaces
- Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.
# 9. Namespace & Declaration merging
- Create a new directory task_4 and copy the above tsconfig.json and put this package.json in there
# 10. Update task_4/js/main.ts
-create and export a constant cpp for Cpp Subjects
- create and export a constant java for Java Subjects
- create and export a constant react for React Subjects
- create and export one Teacher object cTeacher with experienceTeachingC = 10
# 11. Brand convention & Nominal typing
- Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js

Create two interfaces M

# AUTHOR
- Simanga Mchunu
