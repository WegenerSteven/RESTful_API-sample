# RESTful API with Express.js and Node.js with MongoDB
This guide will help you create RESTful API application from scratch using Express.js and Node.js
## Prequisites
Before you begin, ensure you have the following installed:

 * Node.js
 * npm (Node Package Manager)
 * MongoDB (You can use MongoDDB Atlas for cloud-based solutions)
## Project Folder Structure
```
my-restful-api/
├── config/
|   └── db.js
├── controllers/
│   └── itemController.js
│
├── models/
│   └── item.js
│
├── public/
│   └── app.js
    └── index.html
    └── style.css
│
├── node_modules/
│
├── routes/
│   └── itemRoute.js
├── server.js
│
├── package.json
│
└── package-lock.json
```
## Setup
### 1. Initialize the project
create a new directory for your project and navigate into it:
```bash
mkdir my-restful-api
cd my-restful-api
```
initialize a new Node.js project
```bash
npm init -y
```
### 2. Install Dependencies
install required dependencies
```bash
npm install express body-parser mongodb
```
### 3. Create the server Application
create a file named `` server.js`` as shown in the folder structure above
### 4. Run the Applicatio 
start the server
```bash
node server.js
```
The application should run on 
```http://localhost:3000```
## API Endpoints
  * `GET /items` - Retrieve all items
  * `POST /items` - Add new Item
  * `PUT /items/{id}` - update existing items by id
  * `DELETE /items/{id}` - Delete an item by Id

## Notes

- Replace `<username>`, `<password>`, and `hostname` in the MongoDB connection string with your actual MongoDB credentials and hostnames.
- Ensure MongoDB is running and accessible from your application.

---

This README file provides a step-by-step guide to creating a RESTful API application using Express.js and Node.js.

- [Build a Resilient Application with MongoDB Atlas](https://mongodb.com/docs/atlas/resilient-application/)
- [Build a Resilient Application with MongoDB](https://mongodb.com/docs/cloud-manager/reference/resilient-application/)
- [Build a RESTful API With HapiJS and MongoDB](https://www.mongodb.com/developer/languages/javascript/hapijs-nodejs-driver)
- [Build a Resilient Application with MongoDB](https://mongodb.com/docs/ops-manager/current/reference/resilient-application/)
- [Further Reading](https://mongoosejs.com/docs/further_reading.html)




