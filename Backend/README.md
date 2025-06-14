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

### Get User Profile
**Endpoint:** `GET /users/profile`

Retrieves the profile information of the currently authenticated user.

**Authentication Required:** Yes (JWT Token)

**Headers:**
- `Authorization`: Bearer {token}

**Response:**
```json
{
  "_id": "user_id",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "createdAt": "2025-06-09T10:00:00.000Z",
  "updatedAt": "2025-06-09T10:00:00.000Z"
}
```

**Status Codes:**
- `200`: Success
- `401`: Unauthorized (invalid or missing token)

### Logout User
**Endpoint:** `GET /users/logout`

Logs out the current user by invalidating their authentication token.

**Authentication Required:** Yes (JWT Token)

**Headers:**
- `Authorization`: Bearer {token}

**Response:**
```json
{
  "message": "Logged Out"
}
```

**Status Codes:**
- `200`: Success
- `401`: Unauthorized (invalid or missing token)

# Captain API Documentation

## Register Captain
Register a new captain in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
```json
{
  "fullName": {
    "firstName": "string",  // minimum 3 characters
    "lastName": "string"    // optional, minimum 3 characters if provided
  },
  "email": "string",        // valid email format
  "password": "string",     // minimum 6 characters
  "vehicle": {
    "color": "string",      // minimum 3 characters
    "plate": "string",      // minimum 3 characters
    "capacity": "number",   // minimum 1
    "vehicleType": "string" // must be one of: "car", "motorCycle", "auto"
  }
}
```

### Success Response
- **Status Code**: 201 Created
- **Response Body**:
```json
{
  "token": "jwt_token_string",
  "captain": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "string"
  }
}
```

### Error Responses

#### Validation Error
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
- email: Required, valid email format
- password: Required, minimum 6 characters
- vehicle.color: Required, minimum 3 characters
- vehicle.plate: Required, minimum 3 characters
- vehicle.capacity: Required, minimum value of 1
- vehicle.vehicleType: Required, must be one of: "car", "motorCycle", "auto"

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Login Captain
Authenticate a captain and retrieve a JWT token.

### Endpoint
```
POST /captains/login
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
  "token": "jwt_token_string",
  "captain": {
    "fullName": {
      "firstName": "John",
      "lastName": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "captain_id",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

### Error Response
- **Status Code**: 401 Unauthorized
```json
{
  "message": "Invalid email or password"
}
```

## Get Captain Profile
**Endpoint:** `GET /captains/profile`

Retrieves the profile information of the currently authenticated captain.

**Authentication Required:** Yes (JWT Token)

**Headers:**
- `Authorization`: Bearer {token}

**Success Response:**
- **Status Code**: 200 OK
```json
{
  "captain": {
    "fullName": {
      "firstName": "John",
      "lastName": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "captain_id",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

## Logout Captain
**Endpoint:** `GET /captains/logout`

Logs out the current captain by invalidating their authentication token.

**Authentication Required:** Yes (JWT Token)

**Headers:**
- `Authorization`: Bearer {token}

**Success Response:**
- **Status Code**: 200 OK
```json
{
  "message": "Logout Successfully"
}
```

**Status Codes:**
- `200`: Success
- `401`: Unauthorized (invalid or missing token)