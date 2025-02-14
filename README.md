# [AuthFlowX] 🚀

## Overview

This is a personal pet project created to demonstrate my skills and solutions in modern web development.
It features a fully functional authentication system, state persistence, and automated user management, built using a modern React stack.

Key highlights:

-   🔐 Firebase Authentication for user login, registration, and password recovery.
-   🎨 Tailwind CSS & Headless UI for a responsive and clean design.
-   🚀 Redux Toolkit + Persist for efficient state management.
-   ⚡ Automated user cleanup system using Netlify Scheduled Functions.

The project is [deployed](https://react-tailwind-firebase.netlify.app/) and available for preview.

---

## Technologies Used

### **Frontend**

-   **Framework**: React
-   **State Management**: Redux (Toolkit, Persist)
-   **Routing**: React Router
-   **Styling**: Tailwind CSS
-   **UI Components**: Headless UI, Heroicons
-   **Build Tool**: Vite
-   **Authentication & Database**: Firebase (Authentication, Firestore)
-   **Deployment**: Netlify

### **Backend**

-   **Serverless Execution:** Netlify Schedule
-   **Admin SDK:** Firebase Admin SDK (used for secure user management)

---

## Features

The project includes user authentication features such as **registration, login, and password recovery**, all handled via Firebase Authentication.  
For profile management, users can currently update their **name**.

To ensure efficient state management, I used **Redux Toolkit**, allowing seamless data access and updates throughout the app.  
Additionally, **Redux Persist** is implemented to store session data in **localStorage**, preventing users from losing their information after a page refresh.  
To avoid serialization issues in Redux Toolkit, **middleware adjustments were made to ignore specific persist actions**, ensuring smooth state updates.

The UI is built with **Tailwind CSS** for modern styling, while **Headless UI** and **Heroicons** provide interactive and accessible components for a smooth user experience.

The project also includes **custom form validation** to ensure correct user input, with centralized logic for reusability.

### **Routing & Protected Pages**

The application uses **React Router** for navigation, ensuring a structured and scalable routing system.  
To protect user data, certain pages (such as **Home** and **Settings**) are accessible **only to authenticated users**.  
A **ProtectedRoute** wrapper automatically redirects unauthenticated users to the login page.

### **Routing**

The application uses **React Router** for navigation, ensuring a structured and scalable routing system.  
To protect user data, certain pages (such as **Home** and **Settings**) are accessible **only to authenticated users**.  
A **ProtectedRoute** wrapper automatically redirects unauthenticated users to the login page.

For global state management, the app is wrapped in a **Redux Provider**, allowing seamless access to state across components.  
Additionally, **Redux Persist** is used to retain user authentication data in **localStorage**, ensuring that users remain logged in even after a page refresh.

### ❗ **Automated User Cleanup System**

> [!NOTE]
> Since **anyone can register** on the platform, the database could become cluttered with unnecessary accounts.  
> To prevent this, an **automated cleanup system** was implemented to **remove inactive users** and their associated documents.

-   **Firebase Admin SDK** is used for secure database operations, but since it only works on the backend, a server-side function was implemented.
-   **Netlify Schedule** is used to **automate the cleanup process**, ensuring that the function runs **daily** without manual intervention.
-   To keep a **test account available**, the system **always retains one user**:

```
Email: example@www.com
Password: 123123
```

---

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
