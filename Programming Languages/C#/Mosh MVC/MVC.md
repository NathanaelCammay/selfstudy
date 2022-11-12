# Model View Controller (MVC)

### ActionResults (outputs of our actions)

- The **_ActionResult_** class (interited from the Controller) is a class that contains methods that RETURN results in response to a browser request.
- These actions must always be **_public_** methods.
- e.g. public ActionResult [ActionName](){}

### Action Parameters (inputs of our actions)

- can be embedded in url, query string or form
- name parameters using same names that come from default id

#### Optional parameters

- make the parameters nullable if you want them to be optional
- use if statement to check if these params have a value, if not, you can then initialize to a default value.

### Custom routes

1. Call routes.MapRoute(name, url, default(s)) inside the RouteConfig.cs file
2. Set constraints on routes by assigning values to variables
3. OR condition uses one line instead of two.

### Atribute routes

Atribute routing is more efficient when creating custom routes

1. Enable attribute routing by enabling it
2. Enable it by calling the routes.MapMVCAttributeRoutes() inside RouteConfig.cs
3. Go to controller and apply route attribute above related controller

- e.g. [Route("movies/released/{year}/{month:regex()}")]

4. the {month:regex()} is basically whereby the regex expression is used to set parameter to a regular expression, not a verbatim one.
5. Use the colon to set more than one constraints

### Passing data to views

1. ViewData is very inefficient
2. ViewBag is also inefficient
3. Stick to returning the view data into the return statement where you call the view method and pass the data into the params.

### View Models (A model specifically built for a view)

1.  Create model(class) in models folder
2.  Create ViewModel folder
3.  Create ViewModel class
4.  Create properties that's data type is of the class model you created in step 1.
5.  Create viewModel object in the controller (e.g. viewModel = new RandomMovieViewModel){}
6.  Now pass the viewModel object into the view() method instead.
7.  Go to the view file and change the reference to the ViewModel instead of the Model class.

### Razor Syntax (cshtml)

- Write C# code inside an HTML file by prefixing the code using an @ sign.

- e.g. (
  @if (Model.Customers.Count == 0 )
  return;
  )

  - comments using @\*\*@

### Partial Views (Block of HTML code that can be re-used)

1. Add a view
2. Tick "Create as a partial view"
3. Create view code

- Render partial view by:

1. Use @Html.Partial method and pass the name of the partial view into the argument. e.g. (@Html.Partial("\_NavBar"))
2. YOu can add a model into the 2nd argument of the method. e.g. (@Html.Partial("\_NavBar", **_Model.Movie_**))
