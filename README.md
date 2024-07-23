## Overview

This project is a web application for Springdale Public School, utilizing modern web technologies such as React, Vite, and Tailwind CSS, with state management handled by Redux. The application features various components, including a home page, an about us page, a contact us page, and an admissions page, all designed using Tailwind CSS and ShadCN UI components.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Styling](#styling)
- [State Management](#state-management)
- [Contact Information](#contact-information)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

Clone the repository:

```bash
git clone https://github.com/sharmashiv24251/School.git
```

Navigate to the project directory:

```bash
cd School
```

Install the dependencies:

```bash
npm install
```

### Running the Project

To start the development server:

```bash
npm run dev
```

Open `http://localhost:5173` to view the application in the browser.

## Project Structure

```
School/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   ├── index.js
│   ├── main.css
├── package.json
├── tailwind.config.js
├── vite.config.js
```

- **public/**: Contains static assets.
- **src/**: Contains the source code of the application.
- **components/**: Reusable React components.
- **pages/**: Page components.
- **store/**: Redux store configuration and slices.
- **App.jsx**: Main application component.
- **index.js**: Entry point of the application.
- **main.css**: Global styles.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.

## Dependencies

The project has the following dependencies listed in the `package.json`:

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@reduxjs/toolkit": "^2.2.6",
    "axios": "^1.7.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.1.7",
    "lucide-react": "^0.414.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.2.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.25.1",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.1"
  },
  "devDependencies": {
    "@types/node": "^20.14.11",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.6",
    "vite": "^5.3.4"
  }
}
```


## Styling

Styling is primarily handled using **Tailwind CSS**, **ShadCN UI** , which allows for utility-first CSS styling. The project also includes:

- **Custom Styles**: Defined in `main.css`.
- **Responsive Design**: Tailwind's responsive utilities ensure the application looks good on all devices.

## State Management

State management is handled using **Redux**. The project includes:

- **Store Configuration**: Centralized store setup in the `store/` directory.
- **Slices**: One slice called form sclice to hancle contact form

## Contact Information

For any inquiries or issues, please contact:

- **Project Maintainer**: Shivansh Sharma
- **Email**: codersharma24251@gmail.com
- **LinkedIN**: [sharmashiv24251](https://www.linkedin.com/in/sharmashiv24251/)
-  **GitHub**: [sharmashiv24251](https://github.com/sharmashiv24251)
