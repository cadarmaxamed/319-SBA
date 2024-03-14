# 319-SBA
# MangoDB Application for Per Scholas

## Overview
This is a simple MongoDB application to access data collection from database demonstrating basic usage of routes, middleware, and error handling.

## Main File Code
African Countries API
This project is an API built using Node.js with Express.js framework. It provides endpoints to access information about countries in East Africa, West Africa, and North Africa. The API leverages MongoDB as its database to store country data.

Features
Provides information about countries in East Africa, West Africa, and North Africa.
Supports CRUD operations for country data.
Implements global error handling for better error management.
Securely handles sensitive information such as database credentials using environment variables.
Technologies Used
Node.js
Express.js
MongoDB
dotenv (for environment variables)

Installation
Clone the repository:
git clone <repository-url>

Install dependencies:
npm install

Set up environment variables:
Create a .env file in the root directory of the project and define the following variables:


PORT=3000
MONGODB_URI=<mongodb-uri>


Start the server:
npm start

Usage
Once the server is running, you can access the API endpoints to retrieve information about African countries. Here are some sample endpoints:

East Africa: GET /EA
West Africa: GET /WA
North Africa: GET /NA

Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


##Screenshots for Validation Requirement Here!!!

![Validation 1](<Screenshot 2024-03-13 at 9.37.47 PM-1.png>)
![Validation 2](<Screenshot 2024-03-13 at 9.35.38 PM.png>)
