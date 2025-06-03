# User API Documentation

## Register User
Register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullName": {
    "firstName": "string", // minimum 3 characters
    "lastName": "string"   // optional, minimum 3 characters if provided
  },
  "email": "string",      // valid email format, minimum 5 characters
  "password": "string"    // minimum 6 characters
}
```

### Success Response
- **Status Code**: 201 Created
- **Response Body**:
```json
{
  "token": "jwt_token_string",
  "user": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

### Error Response
- **Status Code**: 404 Not Found
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- firstName: Required, minimum 3 characters
- lastName: Optional, minimum 3 characters if provided
- email: Required, valid email format, minimum 5 characters
- password: Required, minimum 6 characters

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Login User
Authenticate a user and retrieve a JWT token.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "string",    // valid email format
  "password": "string"  // minimum 6 characters
}
```

### Success Response
- **Status Code**: 200 OK
- **Response Body**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65f1a2b3c4d5e6f7g8h9i0j1",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Responses

#### Invalid Credentials
- **Status Code**: 401 Unauthorized
- **Response Body**:
```json
{
  "message": "Invalid email or password"
}
```

#### Validation Error
- **Status Code**: 404 Not Found
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- email: Required, valid email format
- password: Required, minimum 6 characters

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```