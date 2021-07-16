# Project4-backend.github.io
Travel Blog/Journal

## About

## ER Diagram

![ERD Image](https://user-images.githubusercontent.com/82845234/125889339-64333435-a24c-42df-8ce8-d45e1508631e.png)



## User Stories

Three Models: User, Admin, Post
* CRUD for Admin table:
  1) Log In
  2) Sign Up
  3) Profile/About
  4) Admin Profile Edit/Delete
  
* CRUD for User table:
  1) Log In
  2) Sign Up
  3) Profile
  4) Profile Edit/Delete
  
* CRUD for Post table:
  1) List of Posts
  2) Add Post
  3) Update Post
  4) Delete Post

## Levels of Development to Achive

* Bronze Level: MVP for Users, Admin and Posts. Professional looking CSS. 
* Silver Level: Implement country info API. Search function in HomePage.
* Gold Level: Have a clickable map on the HomePage. Users can click on the map to get the country info. 
* Bonus: Add Bookmark Feature for user's to bookmark posts to their profile page. 

## Technologies Used

In your terminal (gitbash or command prompt)
1) Create a repo on GitHub and clone to one of your files
2) Install Node.Js and Express
    * npm init
    * npm install express
    * change entry point to server.js
    * npm install nodemon
    * npm run start
3) Install EJS, Method-Override and Body-Parser
    * npm install ejs
    * npm install method-override
    * npm install body-parser
4) [Download Postgres](https://www.postgresql.org/download/)
5) Run psql in the terminal by entering psql -U postres
6) Install Sequelize, create database in psql, model generate and model seed
    * npm install sequelize
    * npm install pg 
    * npx sequelize
    * npx sequelize init
    * create database in psql by running CREATE DATABASE calendar_dev in psql
    * npx sequelize model:generate --name --attributes
    * npx sequelize db:migrate
    * npx sequelize seed:generate --name demo
    * npx sequelize db:seed:all
7) To undo migrate and seed
    * npx sequelize db:migrate:undo
    * npx sequelize db:seed:undo:all
8) npm install cors
9) npm install use-constant

## Issues and Approach taken

* Django vs Express - after not being able to get functions to work on the fronted with Django backend, decided to reroute to Express backend. Will continue to work on getting     the Django version backend to work. 




