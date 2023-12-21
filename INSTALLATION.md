# Installation Guide

Here's a guide to setting up Taskflow on your local machine for development and testing. Make sure your system meets these prerequisites:

## Prerequisites

Before you begin, ensure your system meets these requirements:

- Have the latest versions of npm and Node.js installed.
- Compatible with Windows, Linux, or macOS.

## Installation Steps

1. **Clone the Repository**

   Open your terminal and clone the Taskflow repository using this command

   ```bash
   git clone https://github.com/username/projectname.git
   ```

2. **Move into the Project Directory**

   ```bash
   cd projectname
   ```

3. **Install Dependencies**

   Use npm to install all necessary project dependencies

   ```bash
   npm install
   ```

4. **Start the Convex Server**

   ```bash
   npx convex dev
   ```

5. **Note on Configuration File**

   Move on to the subsequent steps if there isn't an existing `.env` file in the root directory. Otherwise, follow steps 8 through 10 to configure the necessary settings.

6. **Set Up the .env File**

   Create a `.env` file in your root folder and add the following keys

   ```bash
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   EDGE_STORE_ACCESS_KEY=
   EDGE_STORE_SECRET_KEY=
   ```

7. **Configuring the Database**

   Register for a Convex account. Retrieve the security keys and insert them into the `.env` file by providing the required details:

   ```bash
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   ```
   
8. **Configure Authentication**

   Sign up for a Clerk account. Add authentication factors like Google, GitHub, etc. Copy the security keys and paste them into the `.env` file

   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   ```

9. **Edge Store Integration**

   Register for an Edge Store account for banner image storage. Copy the security keys and paste them into the `.env` file

   ```bash
   EDGE_STORE_ACCESS_KEY=
   EDGE_STORE_SECRET_KEY=
   ```

10. **Start the Web Server**

   Open another terminal and run the following command for the server

   ```bash
   npm run dev
   ```

Once the server starts, a link will appear in the terminal. Open this link in your web browser to experience Taskflow.

Follow these steps carefully. If you encounter any issues during installation, refer to the error messages or reach out to our support team for assistance. Enjoy using Taskflow for development and testing purposes!
