# Authentication System

A React-based authentication system using Context API and Axios for API calls.

## Features

- User registration
- User login
- User logout
- Persistent authentication state
- Protected routes support

## Tech Stack

- React.js
- Context API for state management
- Axios for API calls
- Express.js backend (port 8080)

## Authentication Context

The system uses React's Context API to manage authentication state globally:

- `user` - Stores current user information
- `login(email, password)` - Handles user login
- `signup(name, email, password)` - Handles new user registration
- `logout()` - Handles user logout

## API Endpoints

- `POST /auth/login` - Login endpoint
- `POST /auth/register` - Registration endpoint
- `POST /auth/logout` - Logout endpoint

## Usage

```jsx
import { useAuth } from './context/AuthContext';

function MyComponent() {
    const { user, login, signup, logout } = useAuth();

    // Login example
    const handleLogin = async () => {
        const result = await login(email, password);
        if (result.success) {
            // Login successful
        }
    };
}
```

## Error Handling

The system includes comprehensive error handling:
- Server errors
- Authentication failures
- Network issues

## Security Features

- Includes credentials in requests
- Secure cookie-based sessions
- Server-side validation
