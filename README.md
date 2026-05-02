# DibiEdu React Application - Documentation

## Project Overview

DibiEdu is a modern React-based Learning Management System (LMS) frontend application that provides user authentication, user management, and a responsive learning platform interface. The application is fully integrated with a Laravel backend API and follows React best practices with component-based architecture.

## Project Structure

```
assignment_react/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header with responsive mobile menu
│   │   ├── Button.jsx       # Reusable button component with variants
│   │   ├── Card.jsx         # Card component for displaying content
│   │   ├── ProtectedRoute.jsx # Route protection for authenticated pages
│   │   └── index.js         # Component exports
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication context and hooks
│   ├── pages/
│   │   ├── Landing.jsx      # Home/landing page with hero section
│   │   ├── Login.jsx        # User login page
│   │   ├── Register.jsx     # User registration page
│   │   ├── Users.jsx        # Users list with pagination
│   │   ├── UserDetail.jsx   # Individual user detail page
│   │   └── index.js         # Page exports
│   ├── services/
│   │   └── api.js           # Axios API client with authentication
│   ├── App.jsx              # Main App component with routing
│   ├── App.css              # Application styles (Tailwind-based)
│   ├── index.css            # Global styles with Tailwind directives
│   └── main.jsx             # React entry point
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration for Tailwind
├── vite.config.js           # Vite build configuration
├── package.json             # Project dependencies
└── index.html               # HTML entry point
```

## Technologies & Libraries Used

### Core Framework
- **React** (^19.2.5) - UI library for building interactive components
- **React Router DOM** (^6.21.0) - Client-side routing and navigation
- **React DOM** (^19.2.5) - React rendering library

### API & State Management
- **Axios** (^1.6.2) - HTTP client for API requests with interceptors
- **React Context API** - State management for authentication

### Styling
- **Tailwind CSS** (^3.4.1) - Utility-first CSS framework for responsive design
- **PostCSS** (^8.4.33) - CSS processing for Tailwind
- **Autoprefixer** (^10.4.17) - Automatic vendor prefixes for CSS

### Build Tools
- **Vite** (^8.0.10) - Fast build tool and development server
- **@vitejs/plugin-react** (^6.0.1) - React plugin for Vite
- **ESLint** (^10.2.1) - Code linting for code quality

## Key Features

### 1. **Authentication System**
- User registration with email and password
- User login with JWT token management
- Secure token storage in localStorage
- Automatic token inclusion in API requests
- Login/Logout functionality with user state persistence

### 2. **User Management**
- Display list of all users with pagination
- View detailed user information
- Profile information including name, email, phone, address
- User join date and ID display

### 3. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Responsive navigation with hamburger menu on mobile
- Adaptive layouts for all screen sizes
- Touch-friendly interface elements

### 4. **Protected Routes**
- Authentication-required pages
- Automatic redirection to login for unauthorized users
- Loading state handling during authentication check
- Token-based access control

### 5. **API Integration**
- Connection to Laravel backend at: `http://38.47.180.195/student08/api`
- Axios interceptors for automatic token injection
- Error handling and user feedback
- Pagination support for user listings

## API Endpoints Used

The application communicates with the following API endpoints:

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user (returns user data and token)

### User Endpoints (Protected - require token)
- `GET /users?page={page}` - Get paginated user list
- `GET /users/{id}` - Get single user details

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone <your-github-repo-url>
cd assignment_react
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment (if needed)**
- API base URL is already configured in `src/services/api.js`
- Adjust the `API_BASE_URL` if using a different backend

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm preview
```

## Component Details

### Pages

#### Landing Page (`Landing.jsx`)
- Hero section with CTA buttons
- Feature showcase with 3 key features
- Call-to-action section
- Footer
- Dynamic buttons based on authentication status

#### Login Page (`Login.jsx`)
- Email and password inputs
- Form validation
- Error message display
- Loading state during submission
- Link to registration page

#### Register Page (`Register.jsx`)
- Name, email, password, and password confirmation inputs
- Password matching validation
- Error message display
- Loading state during submission
- Link to login page

#### Users Page (`Users.jsx`)
- Grid layout displaying user cards
- Pagination controls
- Page number buttons
- Previous/Next navigation
- Loading and error states
- User cards with key information

#### User Detail Page (`UserDetail.jsx`)
- User avatar with initial letter
- Complete user profile information
- Multiple fields display (name, email, phone, address, etc.)
- Back to users navigation
- Responsive single-column layout

### Components

#### Header (`Header.jsx`)
- Logo with home link
- Navigation menu (Home, Users, About, Contact)
- Responsive mobile menu with hamburger
- User info display when authenticated
- Logout button
- Login/Register links for unauthenticated users
- Sticky positioning

#### Button (`Button.jsx`)
- Three variants: primary (blue), secondary (gray), danger (red)
- Supports disabled state
- Flexible className prop for customization
- Hover and transition effects

#### Card (`Card.jsx`)
- Flexible content container
- Border and shadow styling
- Hover effect with shadow increase
- Click handler support
- Padding and spacing utilities

#### ProtectedRoute (`ProtectedRoute.jsx`)
- Wrapper for routes requiring authentication
- Redirects to login if not authenticated
- Shows loading indicator during auth check
- Preserves destination for post-login redirect

## Authentication Flow

1. **Register/Login**
   - User submits credentials
   - API returns user data and JWT token
   - Token and user stored in localStorage
   - User redirected to users page

2. **Protected Routes**
   - Component checks authentication state
   - If token exists, renders protected content
   - If no token, redirects to login

3. **API Requests**
   - Axios interceptor adds token to headers
   - Authorization: `Bearer {token}`
   - Token automatically included in all requests

4. **Logout**
   - Clear token from localStorage
   - Clear user state
   - Redirect to home page

## Styling Approach

- **Component-based**: Each component has its own styling
- **Utility-first**: Tailwind CSS classes for styling
- **Responsive**: Mobile-first design with breakpoints
- **Dynamic styling**: Props and state-based conditional classes
- **Reusable patterns**: Consistent spacing, colors, and typography

### Tailwind Breakpoints Used
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `max-[44em]:` - Custom breakpoint for specific responsive behavior

## Error Handling

- Try-catch blocks for API calls
- User-friendly error messages
- Error state display in UI
- Loading states during async operations
- Validation on client side

## Features Beyond Requirements

1. **Responsive Navigation** - Hamburger menu for mobile devices
2. **User Profile Avatar** - Visual user identification with initial letter
3. **Error Messages** - Clear feedback for failed operations
4. **Loading States** - Visual indicators for async operations
5. **Token Interceptor** - Automatic token injection for protected requests
6. **Landing Page Features Section** - Showcase of key features
7. **Call-to-Action Section** - Encourages user engagement
8. **Footer** - Professional footer with copyright
9. **Form Validation** - Client-side validation with user feedback
10. **Persistent Authentication** - User stays logged in on page refresh

## Best Practices Implemented

**Component-based architecture** - Reusable, modular components
**Custom hooks** - `useAuth` hook for authentication
**Proper error handling** - User feedback for errors
**Loading states** - Clear loading indicators
**Responsive design** - Mobile-first approach
**Secure token handling** - localStorage with secure practices
**API abstraction** - Centralized API client
**Protected routes** - Authentication-based access control
**Semantic HTML** - Proper HTML structure
**Accessibility** - Alt text, proper labels, semantic elements

## Project Deployment

### Prerequisites for Deployment
- Backend API is live at: `http://38.47.180.195/student08/api`
- Backend must be accessible from deployment environment

### Deployment Platforms (Options)
1. **Vercel** - Recommended for React apps
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Build and deploy to static hosting
   - Update API URL if needed

## Running Tests

```bash
# Run linting
npm run lint

# Check for syntax errors
npm run build
```

## Troubleshooting

### Common Issues

1. **CORS errors**
   - Ensure backend API is accessible
   - Check backend CORS configuration

2. **Token not persisting**
   - Check localStorage settings
   - Ensure cookies/storage not blocked

3. **Blank page**
   - Check browser console for errors
   - Verify Tailwind CSS loaded
   - Check React Router configuration

4. **API calls failing**
   - Verify backend URL in `src/services/api.js`
   - Check network tab in DevTools
   - Verify token format

## GitHub Repository

All code, documentation, and git history are available at your GitHub repository with clear, regular commits showing development progress.

## Author & Credits

This project was created as part of a Full Stack Web Development Bootcamp assignment, demonstrating modern React development practices and API integration.

---

**Last Updated:** 2024
**Version:** 1.0.0
