# MVC ASP.NET CORE (.NET 6)

## YouTube link: https://www.youtube.com/watch?v=hZ1DASYd9rk

### WorkFlow:

#### 1. Create Project

- Create a MVC project using the .NET Core framework
- Select .net 6
- Add your nuget packages you'll need for the project

#### 2. Create your models for your database tables

- Create a cs class and define properties
- Use data annotations to set a property as the primary key, as required, nullable etc.

### 3. Set your appsettings.json configuration

- Set your connectionString
- Setting up different environment settings

### 4. Configure EntityFramework

- Create your DbContext class instance
- Initialize the constructor to access the base class methods
- Add your DbSet() properties for each table in your database
- Add another service (dependency injection)
- Use package manager console to create DB and tables.

### 5. Add your services, which will be included inside your builder object in Program.cs

### Notes:

- The program.cs file contains the configuration for your dependency inejection, which is added to an object you create, which is an instance of the Webapplication.CreateBuilder method. This object is your container for all your dependencies.
- You add these dependencies (services) to the object using the services method.

Your HTTP request pipeline configuration is also configured in the program.cs

**"Middleware"** is what we have stored in our pipeline , which the HTTP Requests have to go through.

N.B: The **_ORDER_** in which you process middleware is important, because of how code executes.

#### Views

- The view **_folder_** name needs to be the same as the controller name, as this is how the compiler will navigate the application code. e.g. If your controller is called SpringbokController.cs, you need to name the view folder **_Springbok_**
- The action files within the view folder need to be named after name of the action method within your controller class. e.g. If your action inside the Springbok Controller class is called **_ListProps()_**, then the action view file should be called **_ListProps.cshtml_**

### Tag-Helpers

- New to .net6
- For server side rendering
- Used within an html element
- Direct html attributes instead of having to use C# methods arguments.

### ActionResults

- IActionResult is an interface that implements all other return types.

### ConnectionString

- Is used to connect database to application
- EntityFrameworkCore is best for this
-
