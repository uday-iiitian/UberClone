# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. Validates the input data, hashes the password, creates a user, and returns a JWT token along with the user object.

## Request Body

# API Documentation

## User Registration
### Endpoint: POST /users/register
### Description
Registers a new user in the system. Validates the input data, hashes the password, creates a user, and returns a JWT token along with the user object.

### Request Body
Send a JSON object with the following structure:

```
{
  "fullname": {
    "firstname": "<First Name>",
    "lastname": "<Last Name>" // optional
  },
  "email": "<user email>",
  "password": "<user password>"
}
```

### Field Requirements




- `fullname.firstname` (string, required): Minimum 3 characters

- `fullname.lastname` (string, optional): Minimum 3 characters if provided

- `email` (string, required): Must be a valid email address

- `password` (string, required): Minimum 5 characters



## Responses


### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json

  {


      "_id": "<user id>",

      "firstname": "<First Name>",

      "socketId": null
    }
  
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [

      {

        "location": "body"
      }
    ]
  }
  ```

### Other Errors

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json

  

  ```

## Example Request

```
POST /users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## User Login
### Endpoint: POST /users/login
### Description
Authenticates an existing user and returns a JWT token for accessing protected routes.

### Request Body
```json
{
  "email": "<user email>",
  "password": "<user password>"
}
```

### Field Requirements
- `email` (string, required): Must be a valid email address
- `password` (string, required): Minimum 5 characters

### Responses
#### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "token": "<JWT token>",
  "user": {
    "_id": "<user id>",
    "firstname": "<First Name>",
    "lastname": "<Last Name>",
    "email": "<user email>",
    "socketId": null
  }
}
```

#### Error Responses
- **Status Code:** 401 Unauthorized
```json
{
  "error": "Invalid email or password"
}
```
- **Status Code:** 400 Bad Request (Validation Error)
```json
{
  "errors": [
    {
      "msg": "<error message>",
      "param": "<field>",
      "location": "body"
    }
  ]
}
```

## User Profile
### Endpoint: GET /users/profile
### Description
Retrieves the authenticated user's profile information.

### Authentication
Requires JWT token in Authorization header:
```
Authorization: Bearer <JWT token>
```

### Responses
#### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "user": {
    "_id": "<user id>",
    "firstname": "<First Name>",
    "lastname": "<Last Name>",
    "email": "<user email>",
    "socketId": null
  }
}
```

#### Error Responses
- **Status Code:** 401 Unauthorized
```json
{
  "error": "Access denied. No token provided."
}
```
- **Status Code:** 403 Forbidden
```json
{
  "error": "Invalid token"
}
```

## User Logout
### Endpoint: POST /users/logout
### Description
Invalidates the user's JWT token.

### Authentication
Requires JWT token in Authorization header:
```
Authorization: Bearer <JWT token>
```

### Responses
#### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses
- **Status Code:** 401 Unauthorized
```json
{
  "error": "Access denied. No token provided."
}
```