using BulkyBookWeb.Data;
using BulkyBookWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace BulkyBookWeb.Controllers
{
    public class CategoryController : Controller
    {

        private readonly ApplicationDbContext _db;

        public CategoryController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Category> objCategoryList = _db.Categories;
            return View(objCategoryList);
        }

        //GET
        public IActionResult Create() // Will give form where user inserts name and displayOrder,then display it in table view.
        {
            return View();
        }

        //POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Category obj)
        {

            if (obj.Name == obj.DisplayOrder.ToString())
            {
                // Creating errors
                ModelState.AddModelError("CustomError", "The DisplayOrder and Name properties can not be identical.");
            }

            if (ModelState.IsValid)
            {
                _db.Categories.Add(obj);
                _db.SaveChanges();
                TempData["success"] = "Category created successfully!";
                return RedirectToAction("Index");
            }
            return View(obj);
        }

        //GET
        public IActionResult Edit(int? id)
        {
            if (id==null || id == 0)
            {
                return NotFound();
            }

            // various ways to return a value that matches a condition
            // var categoryFirst = _db.Categories.FirstOrDefault(c => c.Id == id);
            // var categorySingle = _db.Categories.SingleOrDefault(c=> c.Id == id);
            var categoryFromDb = _db.Categories.Find(id);

            if (categoryFromDb == null)
            {
                return NotFound();
            }

            return View(categoryFromDb);
        }

        //POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Category obj)
        {

            if (obj.Name == obj.DisplayOrder.ToString())
            {
                // Creating errors
                ModelState.AddModelError("CustomError", "The DisplayOrder and Name properties can not be identical.");
            }

            if (ModelState.IsValid)
            {
                _db.Categories.Update(obj);
                _db.SaveChanges();
                TempData["success"] = "Category edited successfully!";
                return RedirectToAction("Index");
            }
            return View(obj);
        }
        // GET
        public IActionResult Delete(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }

            // various ways to return a value that matches a condition
            // var categoryFirst = _db.Categories.FirstOrDefault(c => c.Id == id);
            // var categorySingle = _db.Categories.SingleOrDefault(c=> c.Id == id);
            var categoryFromDb = _db.Categories.Find(id);

            if (categoryFromDb == null)
            {
                return NotFound();
            }
            return View(categoryFromDb);
        }
        //POST
        [HttpPost, ActionName("Delete")] //ActionName attribute allows you to rename an action when being referenced in the view
        [ValidateAntiForgeryToken]
        public IActionResult DeletePOST(int? id)
        {

                var record = _db.Categories.Find(id);

                if (record != null)
                {
                    _db.Categories.Remove(record);
                    _db.SaveChanges();
                TempData["success"] = "Category deleted successfully!";
                    return RedirectToAction("Index");
                }
                else
                {
                    return NotFound();
                }

        }
    }
}
