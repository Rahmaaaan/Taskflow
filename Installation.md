# Installation Guide

Set up Taskflow on your local machine for development and testing purposes with these steps:

## Prerequisites

Ensure your system fulfills these requirements before proceeding:

- Have the latest versions of npm and Node.js installed.
- Compatible with Windows, Linux, or macOS.

## Installation Steps

1. **Clone the Repository**

   Open your terminal and clone the Taskflow repository using this command:

   ```bash
   git clone https://github.com/username/projectname.git
   ```

2. **Move into the Project Directory**

   Access the project directory:

   ```bash
   cd projectname
   ```

3. **Install Dependencies**

   Use npm to install all necessary project dependencies:

   ```bash
   npm install
   ```

4. **Start the Convex Server**

   Begin the Convex server:

   ```bash
   npm run convex dev
   ```

5. **Set Up Authentication Variables**

   Create an account in Convex and generate a `.env` file. Add authentication factors like Google, GitHub, etc. Include the keys:

   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

6. **Edge Store Account Registration**

   Sign up for an Edge Store account to acquire keys for image storage:

   ```bash
   EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
   EDGE_STORE_SECRET_KEY=your_edge_store_secret_key
   ```

7. **Start the Web Server**

   Initiate the web server:

   ```bash
   npm run dev
   ```

Once the server starts, a link will appear in the terminal. Open this link in your web browser to experience Taskflow.

Follow these steps diligently. If you face issues during installation, refer to error messages or seek support from our team. Enjoy leveraging Taskflow for development and testing purposes!
