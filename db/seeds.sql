INSERT INTO department (name)
VALUES ("Marketing"),
       ("Sales"),
       ("Accounting"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
       ("Marketing Manager", 100000, 1),
       ("Marketing Coordinator", 70000, 1),
       ("Marketing Intern", 35000, 1);
VALUES ("Sales Manager", 150000, 2),
       ("Sales Rep", 90000, 2),
       ("Sales Intern", 40000, 2),
       ("Accounting Manager", 115000, 3),
       ("Accounting Rep", 95000, 3),
       ("Accounting Intern" 55000, 3),
       ("HR Manager", 80000, 3),
       ("HR Rep", 58000, 3),
       ("HR Intern", 38000, 3),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Emma ", "Smith", 1, NULL),
       ("Ethan", "Lee", 2, 1),
       ("Olivia", "Davis", 3, 1),
       ("Jackson ", "Chen", 4, NULL),
       ("Ava", "Wilson", 5, 4),
       ("Benjamin", " Garcia", 6, 4),
       ("Mia", " Johnson", 7, NULL),
       ("William ", "Nguyen", 8, 7),
       ("Charlotte ", " Martinez", 9, 7),
       ("James ", "Kim", 10, NULL),
       ("Sophia ", "Rodriguez", 11, 10),
       ("Cespedes", "Martin", 12, 10);