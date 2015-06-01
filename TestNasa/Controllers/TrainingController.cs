using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestNasa.Controllers
{
    public class TrainingController : Controller
    {
        //
        // GET: /Training/

        public ActionResult Index()
        {
            TrainingModel model = new TrainingModel();
            model.Nav_A = 1;
            model.Nav_B = 1;
            model.Nav_C = 1;
            return View("Index", model);
        }

        public ActionResult SetPage(int a, int b, int c)
        {
            TrainingModel model = new TrainingModel();
            model.Nav_A = a;
            model.Nav_B = b;
            model.Nav_C = c;
            return PartialView("Index", model);
        }

    }

    public class TrainingModel
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
        public int Nav_C { get; set; }
    }
}
