# User Registration API

This is a simple Express.js API that validates user registration data and returns a success or error message based on the validation results.

## Features

- Validates first name and last name capitalization
- Validates password complexity (minimum length, at least one special character, one uppercase letter, one lowercase letter, and one numeric character)
- Validates email format (checks for the presence of the "@" symbol)
- Validates phone number length (minimum 10 digits)
- Returns appropriate error messages for each validation failure
- Sends a success message if all validations pass

## Installation

1. Clone the repository: `git clone https://github.com/your-username/user-registration-api.git`
2. Navigate to the project directory: `cd user-registration-api`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `node app.js`
2. The server will start running on port 8000.
3. Send a POST request to `http://localhost:8000/user` with the following JSON payload in the request body:


## Functionality

The API validates input data and returns a JSON response with a status and message. If any validation fails, a 400 Bad Request response is returned with an error message specifying the reason for the failure.

## Error Handling

In case of validation failures, the API responds with a 400 Bad Request status code and an error message detailing which validation check failed and why.

## Code Structure

- The API is built using the Express.js framework.
- The `errormiddleware` function manages errors and sends appropriate responses.
- The `/user` POST endpoint handles the validation logic for user registration data.
- A try-catch block is implemented to capture errors during validation and pass them to the error middleware for handling.


```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "johndoe@example.com",
  "password": "Password123!",
  "phone": "1234567890"
}



