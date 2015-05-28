using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestNasa.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            HomeViewModel model = new HomeViewModel();
            return View("Index", model);
        }

        public ActionResult LoadLeft(int id, int tab)
        {
            LeftViewStateModel model = new LeftViewStateModel();
            model.Scale = id;
            model.TabState = tab;
            return PartialView("Left", model);
        }

        public ActionResult LoadRight(int id)
        {
            RightViewStateModel model = new RightViewStateModel();
            model.Scale = id;
            return PartialView("Right", model);
        }

    }

    public class LeftViewStateModel
    {
        public int Scale { get; set; }
        public int TabState { get; set; }
    }
    public class RightViewStateModel
    {
        public int Scale { get; set; }
    }

    public class HomeViewModel
    {
        // 0 - not shown
        // 1 - 25%
        // 2 - 50%
        // 3 - 75%
        // 4 - 100%
        public int LeftScale { get; set; }
        public int RightScale { get; set; }
    }
}
