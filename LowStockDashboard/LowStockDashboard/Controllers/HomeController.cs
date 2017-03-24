using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LowStockDashboard.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var absolutePath = Request.Url?.AbsolutePath ?? "";
            if (absolutePath.EndsWith("/") == false)
            {
                return Redirect($"{absolutePath}/");
            }
            return View();
        }
    }
}