# User Registration and Address Management

This application allows users to register and manage multiple addresses. It uses MongoDB for data storage and Express.js as the web framework.

## Features

- **User Registration**: Users can register with a name and an initial address. 
- **Multiple Addresses**: Users can add multiple addresses associated with their id.
- **MongoDB Integration**: Uses MongoDB to store user and address data.

---

## API Endpoints

### 1. User Register with Address
- **Endpoint**: `POST /user/register`
- **Description**: Register a new user along with their initial address.
- **Request payload**:
{
  "name": "Inbha",
  "address": "123 HSR Layout",
  "city": "Bangalore",
  "state": "Karnataka",
  "zip": "560102"
}


- **Sample Response**:
{
  "msg": "Successfully Registered and Address Added."
}


- **If an existing user attempts to register again**:
{
  "msg": "User with this name already exists."
}


### 2. Add Address for Existing User
- **Endpoint**: `POST /user/add-address`
- **Description**: Add a new address for an existing user.
- **Request payload**:
{
  "name": "Inbha",
  "address": "456 MG Road",
  "city": "Bangalore",
  "state": "Karnataka",
  "zip": "560001"
}


- **Sample Response**:
{
  "msg": "Address added successfully."
}


- **If the user is not found:**:
{
  "msg": "User not found."
}

---

## Technologies Used

- **Node.js:**: JavaScript runtime for building the application.
- **Express.js:**: Web framework for Node.js.
- **MongoDB:** NoSQL database for storing user and address data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
