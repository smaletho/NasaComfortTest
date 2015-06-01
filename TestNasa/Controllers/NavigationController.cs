using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestNasa.Controllers
{
    public class NavigationController : Controller
    {
        //
        // GET: /Navigation/

        public ActionResult Index()
        {
            return View();
            //return RedirectToAction("SetTutorialState", new { nav_a = 1, nav_b = 1, nav_c = 1});
        }

        public ActionResult SetTutorialState(int nav_a, int nav_b, int nav_c)
        {
            PageVariables model = new PageVariables();
            model.Nav_A = nav_a;
            model.Nav_B = nav_b;
            model.Nav_C = nav_c;
            return PartialView("ViewController", model);
        }

        public ActionResult LoadMenuB(int id)
        {
            //id is index of parent tab
            Menu_Model model = new Menu_Model();
            model.MenuId = id;
            return PartialView("MenuB", model);
        }

        public ActionResult LoadMenuC(int nav_a, int nav_b)
        {
            //id is index of parent tab
            MenuC_Model model = new MenuC_Model();
            model.Nav_A = nav_a;
            model.Nav_B = nav_b;
            return PartialView("MenuC", model);
        }
    }

    public class PageVariables
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
        public int Nav_C { get; set; }
    }

    public class Menu_Model
    {
        public int MenuId { get; set; }
    }

    public class MenuC_Model
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
    }
}
