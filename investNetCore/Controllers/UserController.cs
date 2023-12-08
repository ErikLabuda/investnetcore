using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using investNetCore.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace investNetCore.Controllers
{
    public class UserController : Controller
    {
        private readonly IMongoCollection<UserModel> _users;
        public UserController (IOptions<InvestDatabaseSettings> investDatabaseSettings, IMongoClient client)
        {
            var database = client.GetDatabase(investDatabaseSettings.Value.DatabaseName);
            _users = database.GetCollection<UserModel>(investDatabaseSettings.Value.UsersCollectionName);
        }
        // GET: UserController
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Register(UserModel userModel)
        {
            try
            {
                if (string.IsNullOrEmpty(userModel.email))
                {
                    ViewBag.ErrorMessage = "Email cannot be null or empty.";
                    return View();
                }
                if (_users.Find(u => u.email == userModel.email).Any())
                {
                    ViewBag.ErrorMessage = "Email already exists.";
                    return View();
                }

                var newUser = new UserModel
                {
                    name = userModel.name,
                    surname = userModel.surname,
                    email = userModel.email,
                    password = userModel.password
                };

                _users.InsertOne(newUser);

                // Specify the correct action name for redirection after successful registration
                return RedirectToAction("Index", User);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                ViewBag.ErrorMessage = $"Registration failed: {ex.Message}";
                return View("Index");
            }
        }


        // GET: UserController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: UserController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UserController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UserController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: UserController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UserController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: UserController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
