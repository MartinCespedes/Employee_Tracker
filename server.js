const inquirer = require("inquirer");
const express = require("express");
const fs = require("fs");
const cTable = require("console.table");

const menuQuestions = () => {
  inquirer
    .prompt([
      {
        name: "menu",
        type: "list",
        message: "MAIN MENU",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then((answer) => {
      // Switch case depending on user option
      switch (answer.menu) {
        case "View All Departments":
          viewAllDeps();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmps();
          break;

        case "Add Department":
          addDep();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmp();
          break;

        case "Update Employee Role":
          updateEmpRole();
          break;
      }
    });
};

const viewAllDeps = () => {
  // Function to view all departments
  console.log("Viewing all departments...");
};

const viewAllRoles = () => {
  // Function to view all roles
  console.log("Viewing all roles...");
};

const viewAllEmps = () => {
  // Function to view all employees
  console.log("Viewing all employees...");
};

const addDep = () => {
  // Function to add a department
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then((answer) => {
      console.log(`Adding department ${answer.name}...`);
    });
};

const addRole = () => {
  // Function to add a role
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What role would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this role?",
      },
    ])
    .then((answer) => {
      console.log(
        `Adding role ${answer.title} with salary ${answer.salary}...`
      );
    });
};

const addEmp = () => {
  // Function to add an employee
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "last",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the employee's role?",
      },
      {
        name: "manager",
        type: "input",
        message: "Who is the employee's manager?",
      },
    ])
    .then((answer) => {
      console.log(
        `Adding employee ${answer.first} ${answer.last} with role ${answer.role} and manager ${answer.manager}...`
      );
    });
};

menuQuestions();
