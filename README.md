# Geek Text

An online bookstore web API implementing basic online store functionalities.

## Stack
- MongoDB
- Express
- NodeJS

## Mission
To create an API Service to support an online web application bookstore which targets a particular niche in technology. The application, named Geek Text will support the following features:

## Functionality

### Book Browsing and Sorting
- Users will have a simple and enjoyable way to discover new books and authors and sort results.
- Allows user to filter books by genre and rating, and to sort by price and date added.

#### API Actions:
- Retrieve list of Books by Genre
- Retrieve list of Top Sellers (Top 10 books that have sold the most copied)
- Retrieve list of Books for a particular rating and higher
- Retrieve list of X Books at a time where X is an int

### Profile Management
- Users can create and maintain their profiles rather than enter in their information each time they order.

#### API Actions:
- Create a User with username (email), password and optional fields (name, email address, home address)
- Retrieve a user object and its fields by their username
- Update the user and any of their fields except for mail
- Create creditcCard that belongs to a user and retrieve a list of cards for that user

### Shopping Cart
- Users can manage items in a shopping cart for immediate or future

#### API Actions:
- Create a shopping cart instance for a user.
- Update the shopping cart with a book.
- Retrieve the list of book(s) in the shopping cart.
- Delete a book from the shopping cart instance for that user.
- Books can be deleted or increased in quantity.
- Subotal calculated in cart.

### Book Details
- Users can see informative and enticing details about a book.

#### API Actions:
- Create a book with the book ISBN, book name, book description, price, author, genre, publisher, year published and copies sold.
- Retrieve a book’s details by the ISBN.
- Create an author with first name, last name, biography and publisher.
- Retrieve a list of books associate with an author.

## To run locally:

After cloning this repository, run ```npm install``` from the project root directory. 

Create a file and name it '.env', and make sure to put your own MongoDB database url inside a variable named 'DATABASE_URL'

Once set you can use `npm start` to run the app on your localhost, or `npm run dev` to use nodemon.

Nodemon is a tool that helps develop Nodejs based applications by automatically restarting the node application when file changes in the directory are detected. 

## About this project
This project was part of our Software Engineering I class at Florida International University, which took place in our Summer 2020 semester.

This is a course designed as a CS upper level course in which students learn how to develop a complex software engineering project by using agile software engineering principles.

Students work as a team with the Scrum framework to create a production level-software product that will is demoed at the end of the semester. 

In addition, the course covers traditional software engineering concepts such as system design with UML and testing principles. 
