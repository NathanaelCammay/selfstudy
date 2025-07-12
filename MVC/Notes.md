Below is a simple structure for your `Notes.md` file to help you document the steps of the MVC tutorial as you follow them one by one. It's clean and organized to track your progress clearly.

---

# MVC Tutorial Notes

This file contains step-by-step notes for the **Full-Stack .NET MVC Tutorial** by [@codeafuture](https://youtube.com/@codeafuture). 

This application was developed inside Visual Studio using a .NET Core MVC framework (.NET 9.0)

Each step is recorded as I follow along to build the web application.

## Tutorial Steps

### Step 1: [Specify type of data]
- **Details**: Specify what data your application will be using i.e: Models ((M))VC)

- **Notes**: Use data annotations to sync validation

### Step 2: [Connect to DB]
- **Details**: Setup connection to MSSQL

- Install Entity Framework Core and create a instance class (FinanceAppContext)
- Link your connectionString to your database in the appsettings.json folder
- Add service in our service container (Program.cs)
- Add migration to database (class which represents how a class will be stored in DB)


### Step 3: [Create Controller]
- **Details**: Implement controller class

- This will mediate between the model and the view
- Handle HTTPPost requests
- Handle async calls

### Step 4: [Create Service]
- **Details**: This service is a way to interact with the database, while protecting the dbContext class, so that you are only interacting with the serive and not the context directly.



## Source Code
-https://github.com/codeafuture/FinanceApp

---
