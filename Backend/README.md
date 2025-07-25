# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. Validates the input data, hashes the password, creates a user, and returns a JWT token along with the user object.

## Request Body

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

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },

  "email": "john.doe@example.com",

  "password": "secret123"
}
```